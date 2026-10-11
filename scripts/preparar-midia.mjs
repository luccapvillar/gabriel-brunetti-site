/**
 * Prepara as imagens do site.
 *   Entrada: marca/fotos/<nome>.jpg      — fotos originais (já sem marca d'água)
 *            marca/quadros/<nome>.jpg    — quadros tirados do vídeo
 *            marca/recortes/<nome>.webp  — recortes com fundo transparente (usados só pelos DERIVADOS)
 *   Saída:   public/img/<nome>-<largura>.avif e .webp
 *            (nunca amplia: se a original for menor, a maior versão fica com a largura dela)
 * Também gera os recortes da abertura para o celular (ver DERIVADOS).
 * Uso: npm run midia               (todas as imagens)
 *      npm run midia -- a-frente   (só as que têm "a-frente" no nome)
 */
import { readdirSync, mkdirSync, unlinkSync, existsSync } from 'node:fs';
import { basename, extname } from 'node:path';
import sharp from 'sharp';
import { CELULAR, RECORTE_DESKTOP, RECORTE_CELULAR } from './coordenadas-abertura.mjs';

const root = new URL('../', import.meta.url).pathname;
const destino = `${root}public/img/`;
mkdirSync(destino, { recursive: true });

const LARGURAS = [640, 1024, 1600, 2400];
const PASTAS = ['marca/fotos/', 'marca/quadros/'];

// Recortes feitos a partir de uma imagem original (a abertura usa outro enquadramento no celular).
// A foto e a camada recortada precisam do MESMO recorte para continuarem alinhadas.
// No celular, a abertura usa AVIF um pouco mais leve (é a primeira coisa a carregar no 4G).
// A abertura do celular ganha uma largura extra (750 px): é o tamanho exato de telas de 375 px com densidade 2 e serve bem as de 360–430 px.
// O recorte do piloto só cobre a faixa em que o "33" aparece (ver scripts/coordenadas-abertura.mjs).
const DERIVADOS = [
  { nome: 'a-frente-celular', de: 'marca/fotos/a-frente.jpg', area: CELULAR, extras: [750], avif: 44 },
  { nome: 'a-frente-recorte-topo', de: 'marca/recortes/a-frente-recorte.webp', area: RECORTE_DESKTOP },
  { nome: 'a-frente-recorte-topo-celular', de: 'marca/recortes/a-frente-recorte.webp', area: RECORTE_CELULAR, extras: [750], avif: 44 },
];

const filtro = process.argv[2];
const incluir = (nome) => !filtro || nome.includes(filtro);

const escapar = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function gerar(nome, base, largura, extras = [], qualidadeAvif = 52) {
  const larguras = [...new Set([...LARGURAS, ...extras].filter((l) => l < largura).concat(Math.min(largura, LARGURAS.at(-1))))].sort((a, b) => a - b);
  const anterior = new RegExp(`^${escapar(nome)}-\\d+\\.(avif|webp)$`);
  readdirSync(destino)
    .filter((f) => anterior.test(f))
    .forEach((f) => unlinkSync(`${destino}${f}`));
  for (const l of larguras) {
    const redimensionada = base.clone().resize({ width: l });
    await redimensionada.clone().avif({ quality: qualidadeAvif, effort: 6 }).toFile(`${destino}${nome}-${l}.avif`);
    await redimensionada.clone().webp({ quality: 78, effort: 6 }).toFile(`${destino}${nome}-${l}.webp`);
  }
  console.log(`✓ ${nome} → ${larguras.join(', ')}`);
}

for (const pasta of PASTAS) {
  if (!existsSync(`${root}${pasta}`)) continue;
  for (const arquivo of readdirSync(`${root}${pasta}`).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
    const caminho = `${root}${pasta}${arquivo}`;
    if (!incluir(basename(arquivo, extname(arquivo)))) continue;
    const { width = 0 } = await sharp(caminho).metadata();
    await gerar(basename(arquivo, extname(arquivo)), sharp(caminho).rotate(), width);
  }
}

for (const d of DERIVADOS.filter((d) => incluir(d.nome))) {
  await gerar(d.nome, sharp(`${root}${d.de}`).rotate().extract(d.area), d.area.width, d.extras, d.avif);
}
