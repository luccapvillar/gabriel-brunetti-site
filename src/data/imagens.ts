/**
 * Lê as versões geradas por `npm run midia` (public/img/<nome>-<largura>.avif|webp)
 * e devolve srcset e dimensões reais, para o HTML não sofrer saltos de layout (CLS).
 */
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

// Caminho a partir da raiz do projeto (import.meta.url muda depois do build)
const pasta = join(process.cwd(), 'public/img');
const arquivos = readdirSync(pasta);
const cache = new Map<string, Promise<Imagem>>();

export interface Imagem {
  larguras: number[];
  largura: number;
  altura: number;
  srcset: (formato: 'avif' | 'webp') => string;
  src: (largura?: number) => string;
}

async function ler(nome: string): Promise<Imagem> {
  const padrao = new RegExp(`^${nome.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(\\d+)\\.webp$`);
  const larguras = arquivos
    .map((f) => f.match(padrao)?.[1])
    .filter(Boolean)
    .map(Number)
    .sort((a, b) => a - b);
  if (!larguras.length) throw new Error(`Imagem "${nome}" não encontrada em public/img. Rode npm run midia.`);
  const maior = larguras.at(-1)!;
  const { width = maior, height = maior } = await sharp(join(pasta, `${nome}-${maior}.webp`)).metadata();
  return {
    larguras,
    largura: width,
    altura: height,
    srcset: (formato) => larguras.map((l) => `/img/${nome}-${l}.${formato} ${l}w`).join(', '),
    src: (largura = 1024) => `/img/${nome}-${larguras.find((l) => l >= largura) ?? maior}.webp`,
  };
}

export function imagem(nome: string) {
  if (!cache.has(nome)) cache.set(nome, ler(nome));
  return cache.get(nome)!;
}
