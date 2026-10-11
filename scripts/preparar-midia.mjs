/**
 * Prepara as imagens do site.
 *   Entrada: marca/fotos/<nome>.jpg      — fotos originais (já sem marca d'água)
 *            marca/quadros/<nome>.jpg    — quadros tirados do vídeo
 *            marca/recortes/<nome>.webp  — recortes com fundo transparente (camada da abertura)
 *   Saída:   public/img/<nome>-<largura>.avif e .webp
 *            (nunca amplia: se a original for menor, a maior versão fica com a largura dela)
 * Também gera os recortes da abertura para o celular (ver DERIVADOS).
 * Uso: npm run midia
 */
import { readdirSync, mkdirSync, unlinkSync, existsSync } from 'node:fs';
import { basename, extname } from 'node:path';
import sharp from 'sharp';

const root = new URL('../', import.meta.url).pathname;
const destino = `${root}public/img/`;
mkdirSync(destino, { recursive: true });

const LARGURAS = [640, 1024, 1600, 2400];
const PASTAS = ['marca/fotos/', 'marca/quadros/', 'marca/recortes/'];

// Recortes feitos a partir de uma imagem original (a abertura usa outro enquadramento no celular).
// A foto e a camada recortada precisam do MESMO recorte para continuarem alinhadas.
const DERIVADOS = [
  { nome: 'a-frente-celular', de: 'marca/fotos/a-frente.jpg', area: { left: 700, top: 0, width: 1280, height: 1706 } },
  { nome: 'a-frente-recorte-celular', de: 'marca/recortes/a-frente-recorte.webp', area: { left: 700, top: 0, width: 1280, height: 1706 } },
];

const escapar = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function gerar(nome, base, largura) {
  const larguras = [...LARGURAS.filter((l) => l < largura), Math.min(largura, LARGURAS.at(-1))];
  const anterior = new RegExp(`^${escapar(nome)}-\\d+\\.(avif|webp)$`);
  readdirSync(destino)
    .filter((f) => anterior.test(f))
    .forEach((f) => unlinkSync(`${destino}${f}`));
  for (const l of larguras) {
    const redimensionada = base.clone().resize({ width: l });
    await redimensionada.clone().avif({ quality: 52, effort: 6 }).toFile(`${destino}${nome}-${l}.avif`);
    await redimensionada.clone().webp({ quality: 78, effort: 6 }).toFile(`${destino}${nome}-${l}.webp`);
  }
  console.log(`✓ ${nome} → ${larguras.join(', ')}`);
}

for (const pasta of PASTAS) {
  if (!existsSync(`${root}${pasta}`)) continue;
  for (const arquivo of readdirSync(`${root}${pasta}`).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))) {
    const caminho = `${root}${pasta}${arquivo}`;
    const { width = 0 } = await sharp(caminho).metadata();
    await gerar(basename(arquivo, extname(arquivo)), sharp(caminho).rotate(), width);
  }
}

for (const d of DERIVADOS) {
  await gerar(d.nome, sharp(`${root}${d.de}`).rotate().extract(d.area), d.area.width);
}
