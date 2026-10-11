# Site — Gabriel Lima Brunetti

Site oficial do piloto **Gabriel Lima Brunetti** (#33, Kart F400 Júnior, Valparaíso de Goiás – GO): carreira, preparação e parcerias.

- **Briefing completo** (fatos, conceito, arquitetura, textos e pendências): [`docs/BRIEFING.md`](docs/BRIEFING.md)
- **Tecnologia:** [Astro](https://astro.build), site estático, sem frameworks de JavaScript.

## Como rodar

Requer **Node.js 22.12+**.

```bash
npm install
npm run midia    # gera as versões leves das fotos (marca/ → public/img/)
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
