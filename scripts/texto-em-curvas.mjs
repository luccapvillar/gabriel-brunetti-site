/**
 * Converte um texto em contornos SVG (path) usando as fontes do site.
 * Serve para gerar imagens (favicon, Open Graph) sem depender de fontes instaladas na máquina.
 */
import { readFileSync } from 'node:fs';
import fontverter from 'fontverter';
import { Blob, Face, Font, Buffer, Variation, shape } from 'harfbuzzjs';

// Raiz do projeto: os scripts rodam a partir dela (npm run) e o build do Astro também.
const root = `${process.cwd()}/`;
const cache = new Map();

async function carregar(arquivo, peso) {
  const chave = `${arquivo}:${peso}`;
  if (!cache.has(chave)) {
    const sfnt = await fontverter.convert(readFileSync(`${root}public/fonts/${arquivo}`), 'sfnt');
    const face = new Face(new Blob(sfnt));
    const fonte = new Font(face);
    fonte.setVariations([new Variation('wght', peso)]);
    cache.set(chave, { face, fonte });
  }
  return cache.get(chave);
}

/**
 * @returns {{ d: string, largura: number, caixa: { x: number, y: number, largura: number, altura: number } }}
 *   path já em escala (tamanho em px), com a linha de base em y = 0 (o texto sobe para y negativo).
 *   `caixa` é a área ocupada pelos contornos (aproximada pelos pontos de controle).
 */
export async function textoEmCurvas(texto, { arquivo = 'mona-expandida.woff2', peso = 900, tamanho = 100, espacamento = 0 } = {}) {
  const { face, fonte } = await carregar(arquivo, peso);
  const escala = tamanho / face.upem;
  const buf = new Buffer();
  buf.addText(texto);
  buf.guessSegmentProperties();
  shape(fonte, buf);
  let x = 0;
  const partes = [];
  const xs = [];
  const ys = [];
  for (const g of buf.getGlyphInfosAndPositions()) {
    const caminho = fonte.glyphToPath(g.codepoint);
    if (caminho) {
      // Os contornos vêm em unidades da fonte com y para cima: inverte e escala.
      const transformado = caminho.replace(/(-?\d*\.?\d+)\s*,?\s*(-?\d*\.?\d+)/g, (_, a, b) => {
        const px = (x + (g.xOffset ?? 0) + Number(a)) * escala;
        const py = -(Number(b) + (g.yOffset ?? 0)) * escala;
        xs.push(px);
        ys.push(py);
        return `${px.toFixed(2)},${py.toFixed(2)}`;
      });
      partes.push(transformado);
    }
    x += (g.xAdvance ?? 0) + espacamento / escala;
  }
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  return {
    d: partes.join(''),
    largura: x * escala - espacamento,
    caixa: { x: x0, y: y0, largura: x1 - x0, altura: y1 - y0 },
  };
}
