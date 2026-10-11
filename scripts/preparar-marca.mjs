/**
 * Gera os ícones e a imagem de compartilhamento a partir da identidade do site:
 *   public/favicon.svg, public/favicon-32.png, public/apple-touch-icon.png — a placa amarela 33
 *   public/og.jpg (1200×630) — a abertura: foto → "33" → recorte do piloto, com o nome
 * Os textos viram contornos (scripts/texto-em-curvas.mjs), sem depender de fontes instaladas.
 * Uso: npm run marca
 */
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';
import { textoEmCurvas } from './texto-em-curvas.mjs';

const root = new URL('../', import.meta.url).pathname;
const COR = { asfalto: '#0C0F0E', osso: '#F2F0EA', amarelo: '#F4CF1C', verde: '#3CCF7C', vermelho: '#E2382F', verdeEscuro: '#17A35A' };

/* ---------- Placa 33 ---------- */
const n = await textoEmCurvas('33', { peso: 900, tamanho: 100, espacamento: -3 });
const c = n.caixa;

function placa(tamanho, { fundo = null, margem = 0 } = {}) {
  const w = tamanho - margem * 2;
  const h = Math.round(w * 0.74);
  const y = (tamanho - h) / 2;
  const escala = (w * 0.76) / c.largura;
  const tx = margem + (w - c.largura * escala) / 2 - c.x * escala;
  const ty = y + (h - c.altura * escala) / 2 - c.y * escala;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${tamanho} ${tamanho}" width="${tamanho}" height="${tamanho}">${
    fundo ? `<rect width="${tamanho}" height="${tamanho}" fill="${fundo}"/>` : ''
  }<rect x="${margem}" y="${y.toFixed(2)}" width="${w}" height="${h}" rx="${(w * 0.13).toFixed(2)}" fill="${COR.amarelo}"/><path fill="${COR.asfalto}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${escala.toFixed(4)})" d="${n.d}"/></svg>`;
}

writeFileSync(`${root}public/favicon.svg`, placa(64));
await sharp(Buffer.from(placa(64))).resize(32, 32).png().toFile(`${root}public/favicon-32.png`);
await sharp(Buffer.from(placa(180, { fundo: COR.asfalto, margem: 26 }))).png().toFile(`${root}public/apple-touch-icon.png`);
console.log('✓ favicon.svg, favicon-32.png, apple-touch-icon.png');

/* ---------- Open Graph 1200×630 ---------- */
const W = 1200;
const H = 630;
// A foto (2560×1706) é reduzida e posicionada para o capacete ficar à direita do centro.
const escalaFoto = 0.56;
const fw = Math.round(2560 * escalaFoto);
const fh = Math.round(1706 * escalaFoto);
const fx = Math.round(780 - 1424 * escalaFoto); // centro do capacete em x = 780 (fx precisa ser ≤ 0)
const fy = Math.round(-60 * escalaFoto);

const enquadrar = (arquivo) =>
  sharp(`${root}${arquivo}`).resize(fw, fh).extract({ left: -fx, top: -fy, width: W, height: H }).png().toBuffer();
const foto = await enquadrar('marca/fotos/a-frente.jpg');
const recorte = await enquadrar('marca/recortes/a-frente-recorte.webp');

// "33" com as mesmas proporções da abertura do site (largura 1440 e topo 70, em pixels da foto)
const n33 = await textoEmCurvas('33', { peso: 900, tamanho: 100 });
const larg33 = 1440 * escalaFoto;
const esc33 = larg33 / n33.caixa.largura;
const x33 = fx + 1424 * escalaFoto - larg33 / 2 - n33.caixa.x * esc33;
const y33 = fy + 70 * escalaFoto - n33.caixa.y * esc33;

const nome1 = await textoEmCurvas('GABRIEL', { peso: 820, tamanho: 68, espacamento: -2 });
const nome2 = await textoEmCurvas('BRUNETTI', { peso: 820, tamanho: 68, espacamento: -2 });
const linha = await textoEmCurvas('PILOTO · KART F400 JÚNIOR', { arquivo: 'geist-mono.woff2', peso: 500, tamanho: 20, espacamento: 1 });

const camadaFundo = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${COR.asfalto}" stop-opacity="0.94"/>
      <stop offset="0.36" stop-color="${COR.asfalto}" stop-opacity="0.75"/>
      <stop offset="0.6" stop-color="${COR.asfalto}" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${COR.asfalto}" fill-opacity="0.22"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <path fill="${COR.osso}" transform="translate(${x33.toFixed(2)} ${y33.toFixed(2)}) scale(${esc33.toFixed(4)})" d="${n33.d}"/>
</svg>`;

const camadaTexto = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0.55" stop-color="${COR.asfalto}" stop-opacity="0"/>
      <stop offset="1" stop-color="${COR.asfalto}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#b)"/>
  <g transform="translate(64 64)">
    <rect width="56" height="41" rx="7" fill="${COR.amarelo}"/>
    <path fill="${COR.asfalto}" transform="translate(${(28 - (c.largura * 0.3) / 2 - c.x * 0.3).toFixed(2)} ${(20.5 - (c.altura * 0.3) / 2 - c.y * 0.3).toFixed(2)}) scale(0.3)" d="${n.d}"/>
  </g>
  <g transform="translate(64 470)"><path fill="${COR.osso}" d="${nome1.d}"/></g>
  <g transform="translate(64 540)"><path fill="${COR.osso}" d="${nome2.d}"/></g>
  <g transform="translate(64 584)">
    <rect y="-12" width="9" height="8" fill="${COR.verdeEscuro}"/><rect x="9" y="-12" width="9" height="8" fill="${COR.osso}"/><rect x="18" y="-12" width="9" height="8" fill="${COR.vermelho}"/>
    <path fill="${COR.verde}" transform="translate(40 0)" d="${linha.d}"/>
  </g>
</svg>`;

await sharp({ create: { width: W, height: H, channels: 3, background: COR.asfalto } })
  .composite([
    { input: foto, left: 0, top: 0 },
    { input: Buffer.from(camadaFundo), left: 0, top: 0 },
    { input: recorte, left: 0, top: 0 },
    { input: Buffer.from(camadaTexto), left: 0, top: 0 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(`${root}public/og.jpg`);
console.log('✓ og.jpg');
