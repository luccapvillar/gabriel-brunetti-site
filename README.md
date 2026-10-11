# Site — Gabriel Lima Brunetti

Site oficial do piloto **Gabriel Lima Brunetti** (#33, Kart F400 Júnior, Valparaíso de Goiás – GO): carreira, preparação e parcerias.

- **Briefing completo** (fatos, conceito, arquitetura, textos e pendências): [`docs/BRIEFING.md`](docs/BRIEFING.md)
- **Tecnologia:** [Astro](https://astro.build), site estático, sem frameworks de JavaScript.

## Como rodar

Requer **Node.js 22.12+**.

```bash
npm install
npm run midia    # gera as versões leves das fotos (marca/ → public/img/); aceita filtro: npm run midia -- celular
npm run marca    # gera favicon (placa 33) e imagem de compartilhamento (public/og.jpg)
npm run dev      # http://localhost:4321
npm run build    # gera o site final em dist/
```

## Pastas

| Pasta | O que tem |
| --- | --- |
| `marca/fotos/` | Fotos originais (as da BC51 Photos já sem marca d'água, por autorização do cliente; crédito mantido no site) |
| `marca/quadros/` | Quadros tirados do vídeo (capas e close do rosto) |
| `marca/recortes/` | Recorte do kart com fundo transparente (camada de profundidade da abertura) |
| `public/video/` | Filme completo e loop do perfil, já codificados para a web |
| `public/fonts/` | Fontes recortadas para o português (`npm run fontes`) |
| `docs/` | Briefing e decisões do projeto |

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Fatos, contatos, resultados e citações do filme | `src/data/gabriel.ts` |
| Seções da página (uma por arquivo) | `src/components/` |
| Cores, tipografia e botões | `src/styles/global.css` |
| Interações (menu, capacete, filme, galeria, mapa) | `src/scripts/site.ts` |
| Alinhamento foto / "33" / recorte da abertura | `scripts/coordenadas-abertura.mjs` |
| Endereço do site (canonical, Open Graph, sitemap) | `PUBLIC_SITE_URL` no `.env` (ver `.env.example`) |

Auditoria (out/2026): Lighthouse no celular 100 · 100 · 100 · 100; sem rolagem lateral em 375, 768, 1280 e 1920 px.
