// Recorta as fontes variáveis para os caracteres do português e só para os
// eixos usados no site. Gera public/fonts/*.woff2 e src/styles/fontes.css.
// Rode com: npm run fontes
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import subsetFont from 'subset-font';

const BASICO = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('');
const PORTUGUES = 'áàâãäéèêëíìîïóòôõöúùûüçñÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ';
const SIMBOLOS = 'ºª°×·•–—‘’“”…←→↑↓↗▶■●©®™€¹²³½';
const TEXTO = BASICO + PORTUGUES + SIMBOLOS;

const MONA = 'node_modules/@fontsource-variable/mona-sans/files/mona-sans-latin-wdth-normal.woff2';
const GEIST_MONO = 'node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2';

// Cada saída vira uma @font-face. Ajuste os eixos se o CSS passar a usar outros valores.
const SAIDAS = [
  {
    arquivo: 'mona-expandida.woff2',
    origem: MONA,
    familia: 'Mona Expandida',
    eixos: { wdth: 125, wght: { min: 500, max: 900 } },
    peso: '500 900',
  },
  {
    arquivo: 'mona-texto.woff2',
    origem: MONA,
    familia: 'Mona Texto',
    eixos: { wdth: 100, wght: { min: 380, max: 700 } },
    peso: '380 700',
  },
  {
    arquivo: 'geist-mono.woff2',
    origem: GEIST_MONO,
    familia: 'Geist Mono',
    eixos: { wght: { min: 400, max: 600 } },
    peso: '400 600',
  },
];

await mkdir('public/fonts', { recursive: true });
let css = '/* Gerado por scripts/preparar-fontes.mjs — não edite à mão. */\n';
for (const s of SAIDAS) {
  const original = await readFile(s.origem);
  const recortada = await subsetFont(original, TEXTO, { targetFormat: 'woff2', variationAxes: s.eixos });
  await writeFile(`public/fonts/${s.arquivo}`, recortada);
  console.log(`${s.arquivo}: ${(original.length / 1024).toFixed(0)} KB → ${(recortada.length / 1024).toFixed(0)} KB`);
  css += `@font-face {\n  font-family: '${s.familia}';\n  src: url('/fonts/${s.arquivo}') format('woff2');\n  font-weight: ${s.peso};\n  font-style: normal;\n  font-display: swap;\n}\n`;
}
await writeFile('src/styles/fontes.css', css);
