# Briefing — site oficial de Gabriel Lima Brunetti

Documento-mestre do projeto. Reúne **os fatos confirmados**, as decisões já tomadas, o conceito, a arquitetura e os textos. Quem continuar o trabalho deve ler este arquivo inteiro antes de escrever qualquer linha.

---

## 1. O pedido (resumo fiel do cliente)

Site **profissional, premium, moderno, dinâmico e altamente personalizado** que funcione ao mesmo tempo como:

1. site oficial do piloto;
2. apresentação profissional de carreira;
3. ferramenta de atração de patrocinadores.

Papéis a assumir: diretor de criação, especialista em branding esportivo, UX/UI sênior, especialista em automobilismo e em sites de atletas, copywriter, especialista em experiência para patrocinadores e desenvolvedor web sênior.

### Regras inegociáveis

- **Não inventar** fatos, resultados, títulos, estatísticas, patrocinadores ou experiências. O que não está na seção 2 não entra no site.
- **Zero conteúdo genérico.** Proibido: "Nascido para vencer", "Paixão pela velocidade", "Velocidade nas veias", "Acelerando rumo aos sonhos", "Mais que um piloto", "O limite é o céu" e qualquer frase parecida. Entre uma frase genérica e um dado real, sempre o dado real.
- **Não transformar o questionário em perguntas e respostas.** As respostas são matéria-prima para uma narrativa editorial. Desenvolver e contextualizar, sem alterar o significado.
- **Posicionamento:** piloto jovem (14 anos) construindo a carreira. Não apresentar como veterano. Destacar juventude, disciplina, evolução, preparação, competitividade, resultados, mentalidade, ambição e potencial de crescimento.
- **Comercial sem ser agressivo:** o empresário que nunca ouviu falar do Gabriel deve entender rápido *quem ele é → onde está → o que já fez → como se prepara → onde quer chegar → como entrar em contato*. Contato comercial fácil de achar, com pontos de contato estratégicos.
- **Design:** premium e contemporâneo, **não** um template de kart. Evitar excesso de bandeira quadriculada, carbono, fogo, neon, linhas de velocidade, efeitos gamer, vermelho genérico e decoração sem função. Transmitir *performance + precisão + competição + juventude + sofisticação + futuro*: uma marca esportiva profissional em construção.
- **Fotos** como parte da identidade (enquadramento, cortes, escala, sobreposição, profundidade, contraste, movimento, sequência narrativa), não como imagens soltas em cards. Não é obrigatório usar todas.
- **Movimento com propósito:** animações de entrada, scroll, parallax, microinterações, números animados, galeria interativa, timeline, transições, profundidade, cursor e escala, mas só quando melhoram a experiência. Rápido, preciso e sofisticado. Respeitar `prefers-reduced-motion`.
- **Mobile de verdade:** decisões de layout específicas para celular, tablet, notebook, desktop e telas grandes, e não apenas uma versão reduzida.
- **Performance:** imagens otimizadas, lazy loading, fontes, JS e CSS enxutos, estabilidade visual (CLS), acessibilidade. Sem bibliotecas desnecessárias.
- **SEO:** HTML semântico, headings corretos, meta description, Open Graph, favicon, acessibilidade e dados estruturados.
- **Processo:** 1) analisar → 2) definir conceito → 3) escrever conteúdo → 4) construir o site completo e funcional → 5) **auditar** como diretor de criação, patrocinador, fã de automobilismo, especialista em UX e desenvolvedor sênior (genericidade, estética, usabilidade, responsividade, performance, acessibilidade, conversão, hierarquia e conteúdo) e corrigir.
- **Pergunta final para cada parte:** "Isso poderia estar no site de qualquer outro piloto?" Se sim, tornar específico usando os dados e as fotos do Gabriel.

---

## 2. Fatos confirmados (fonte oficial)

Veio do questionário respondido pelo piloto e das correções enviadas depois pelo cliente.

| Campo | Valor |
| --- | --- |
| Nome completo | Gabriel Lima Brunetti |
| Idade | 14 anos e 10 meses (em 11/10/2026). Data de nascimento exata **não informada** |
| Cidade | Valparaíso de Goiás (GO), no Entorno do Distrito Federal |
| Telefone | (61) 99921-8444, **com WhatsApp** (confirmado pelo cliente em 11/10/2026) |
| E-mail | gabrielbruneti098@gmail.com (com **um** "t" em "bruneti", exatamente assim) |
| Instagram | @gabriellbrunetti_ (com **dois** "l") |
| Número | 33 (placa amarela, visível em todas as fotos) |
| Categoria | **Kart F400 Júnior**. O "F4J" da placa é a sigla da F400 Júnior |
| Estilo de pilotagem | Limpo e conservador, com boa noção de ultrapassagem (definição do próprio Gabriel) |
| Referência | Max Verstappen, principalmente pela mentalidade |
| Motivação inicial | Influência do pai |
| Início dos treinamentos | Outubro do ano passado → **outubro de 2025** (deduzido da data de hoje; ver pendências) |
| Competições atuais | Campeonato Brasiliense e Campeonato Brasileiro |
| Campeonatos já disputados | BKS e Circuito Paulista |
| Resultados de destaque | **3 segundos lugares** (o questionário dizia 4; o cliente corrigiu para 3): 2ª etapa, no Kartódromo Ayrton Senna (Brasília); 3ª etapa, no Kartódromo Ayrton Senna (Brasília); 5ª etapa, no Kartódromo Brasília Kart (Brasília). São do BKS (resposta à pergunta sobre os resultados no BKS). Ano **não informado** |
| Preparação | Academia 5× por semana · kart 2× por semana · simulador toda semana (frequência exata do simulador não informada; usar "toda semana", nunca "1×") |
| Equipe e pessoas no projeto | Equipe **Dibo Racing** e os pais |
| Patrocinadora | **Brunetti Odontologia**, autorizada a aparecer no site. O nome está nas laterais e no bico do kart. Não há arquivo de logo: usar o nome em texto |
| Objetivo principal | Evoluir como piloto |
| Objetivo de longo prazo | Chegar à Stock Car |
| Plano | Competir em diferentes estados do Brasil |
| Logo/assinatura do piloto | Não existe. Usar a identidade visual do capacete e do kart (ver seção 5) |

### Autorizações do cliente

- Pode **remover a marca d'água** do fotógrafo (BC51 Photos). Isso já foi feito cortando a borda de baixo, sem retoque. Manter o crédito "Foto: BC51 Photos" na legenda dessas três fotos.
- Pode **usar o que o Gabriel fala no vídeo** (transcrição na seção 4).
- Brunetti Odontologia **pode aparecer** como patrocinadora.

### O que NÃO sabemos (não inventar)

O ano dos resultados do BKS, a data de nascimento, o domínio do site, audiência e números de seguidores, cotas e valores de patrocínio, quem tirou as fotos sem marca d'água, a ordem cronológica entre BKS e Circuito Paulista, especificações técnicas do motor e da categoria, e se o número 33 tem relação com o Verstappen (que usou o 33 até 2021). Esta última seria uma ótima história, mas **só entra se o cliente confirmar**.

---

## 3. Material disponível

### Fotos (`marca/fotos/`, todas reais e de alta resolução)

| Arquivo | O que mostra | Uso pensado |
| --- | --- | --- |
| `a-frente.jpg` (2560×1706) | Frente/três-quartos, nítida, cores vivas; Gabriel à frente de um adversário (azul, desfocado). Kart atual: F4J, Dibo, Brunetti Odontologia | **Abertura (hero)** |
| `frente-reta.jpg` (BC51) | Frente na reta, céu nublado com muito espaço vazio em cima; carenagem verde e branca de uma fase anterior | Trajetória / galeria |
| `lateral-movimento.jpg` (BC51) | Panning lateral, fundo borrado, kart nítido com a placa "33 F4J" | Seção de resultados (movimento horizontal) |
| `curva-roda-no-ar.jpg` (BC51, vertical) | Carenagem preta, kart inclinado com a roda interna no ar, céu azul | Trajetória (fase inicial) / destaque vertical no celular |
| `frente-04.jpg` | Gabriel à frente, #04 cortado à esquerda, kart ao fundo, grama em primeiro plano | Galeria |
| `curva-cabeca-baixa.jpg` | Close na curva, cabeça baixa, esforço; carenagem marcada de uso | Preparação |
| `disputa-235.jpg` | Lado a lado com o #235 ("Mini"), teleobjetiva com barreira em primeiro plano | **Estilo de pilotagem / ultrapassagem** |
| `motor-curva.jpg` | Curva à esquerda, motor vermelho visível, boxes ao fundo | Galeria |
| `zebra.jpg` | Curva à direita sobre a zebra, kart inteiro visível (bico, painel, laterais, capacete, macacão) | **Mapa de exposição para patrocinadores** |
| `pelotao.jpg` | Gabriel no meio do pelotão (#8/62, 18, 04, 9, 577...), vários capacetes | Seção "em pista" / competição |
| `pelotao-577.jpg` | Pelotão com o #577 e um kart Bravar | Galeria |
| `capacete-frente.jpg` (1600×1066) | Capacete de frente: "GABRIEL" no topo, faixa da viseira Artmix + Dibo | **Seção do capacete** (visualizador de 4 ângulos) |
| `capacete-tres-quartos.jpg` | Três-quartos frontal esquerdo | idem |
| `capacete-lateral.jpg` | Lateral/traseira esquerda: "GABRIEL A+" na lateral | idem |
| `capacete-traseira.jpg` | Traseira | idem |

As 4 fotos do capacete têm o mesmo fundo (pista desfocada, céu azul) e o mesmo enquadramento, o que permite a ilusão de rotação ao trocar entre elas (frente → três-quartos → lateral → traseira).

### Recorte (`marca/recortes/a-frente-recorte.webp`)

Kart e piloto de `a-frente.jpg` recortados com fundo transparente (BiRefNet). O contorno foi conferido e está limpo, sem o adversário de trás. Tem **exatamente o mesmo tamanho e enquadramento** da foto. Serve para criar profundidade na abertura: foto → **"33" gigante** → recorte por cima. O capacete fica entre os dois "3" e o número parece estar atrás do piloto.

### Vídeo (`public/video/`)

- `gabriel-brunetti-filme.mp4`: filme completo (2min05s, 1024×576, H.264 + AAC, faststart, 13,8 MB). Minidocumentário com cores de cinema. Usar com `preload="none"` e capa.
- `perfil-loop.mp4`: loop mudo de 6,5 s (00:26–00:32,5), recorte 4:5. Gabriel vestindo e fechando o macacão, **com o rosto visível**. As fotos nunca mostram o rosto; o vídeo é o único lugar em que ele aparece sem capacete.
- Capas e quadros (`marca/quadros/`): `filme-poster.jpg` (00:40,6: olhos dentro do capacete), `perfil-loop-poster.jpg` e `rosto.jpg` (00:11,6: close do rosto, sério, olhando para o lado).

Decupagem do filme: 00:00–00:44 preparação (paddock, balança, macacão, balaclava, capacete); 00:45–01:20 pista (drone, curvas, disputas); 01:21–01:26 bandeirada; 01:26–01:30 conversa com a equipe e hidratação; **01:31–02:05 Gabriel fala para a câmera no box da Dibo**, intercalado com imagens de drone.

Comando de codificação usado (para refazer a partir do `.mov` original, que não está no repositório):

```bash
ffmpeg -i original.mov -vf "hqdn3d=3:3:9:9" -c:v libx264 -profile:v high -preset slower -crf 29 -tune film -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/video/gabriel-brunetti-filme.mp4
ffmpeg -ss 26.0 -to 32.5 -i original.mov -an -vf "crop=460:576:272:0,hqdn3d=2:2:8:8" -c:v libx264 -profile:v high -preset slower -crf 29 -pix_fmt yuv420p -g 60 -movflags +faststart public/video/perfil-loop.mp4
```

---

## 4. A fala do Gabriel (transcrição do vídeo)

Transcrita com Whisper `medium` e conferida com `large-v3`. Os tempos são do filme (`gabriel-brunetti-filme.mp4`).

| Tempo | Trecho |
| --- | --- |
| 1:31 | "Na minha opinião, o momento mais difícil em um fim de semana de corrida é a tomada de tempo, porque é onde você tem que extrair todo o potencial do kart, do equipamento, pra você conseguir largar bem." |
| 1:40 | "Antes da largada, você [fica / tem que estar] pensando principalmente em onde você está largando, em como você pode progredir dentro da corrida, qual a melhor posição que você deve estar, onde você pode fazer uma ultrapassagem." |
| 1:50 | "E é isso, quando você está em primeiro, você tem que conduzir os karts que estão atrás de você, você tem que conduzir bem o pelotão quando você está em primeiro, porque senão você leva uma punição, e a punição no kart é severa. Você leva a punição e cai três posições, quatro posições." |

**Atenção:** no trecho de 1:40, os dois modelos discordam ("fica pensando" × "tem que estar pensando"). Nesse ponto, citar só a parte em que concordam, por exemplo: *"[…] pensando principalmente em onde você está largando, em como você pode progredir dentro da corrida […] onde você pode fazer uma ultrapassagem."* Também é possível pedir ao cliente que ouça e confirme. Cortes nas citações sempre marcados com […].

Ligações com os fatos, sem inventar: a fala sobre "conduzir bem o pelotão" para não levar punição conversa com o estilo "limpo e conservador"; a fala sobre onde fazer a ultrapassagem conversa com "boa noção de ultrapassagem"; e a fala inteira mostra a *mentalidade* que ele admira no Verstappen.

---

## 5. Conceito

### Ideia central: "Linha limpa"

O Gabriel define a própria pilotagem como **limpa e conservadora, com boa noção de ultrapassagem**. O site faz o mesmo: layout limpo, contido e preciso, com **poucos momentos de impacto, bem escolhidos** (a "ultrapassagem"): o 33 gigante atrás dele na abertura, os 3 segundos lugares, o capacete girando e a Stock Car no horizonte. A **linha** (o traçado) é o fio condutor: uma linha fina percorre a trajetória do primeiro treino até a Stock Car. É uma linha só, e não "linhas de velocidade".

O tom é sério, calmo e seguro, como o Gabriel nos closes do vídeo. Nada de gritaria visual.

### Identidade visual (tirada do capacete e do kart)

| Token | Hex sugerido | Origem / uso |
| --- | --- | --- |
| Asfalto (fundo escuro) | `#0C0F0E` | Seções escuras, texto sobre claro |
| Asfalto 2 | `#141917` | Superfícies elevadas |
| Osso (fundo claro) | `#F2F0EA` | Seções claras editoriais, texto sobre escuro |
| Verde 33 | `#17A35A` (preenchimento) / `#3CCF7C` (texto sobre escuro) | Verde do capacete e do kart: botões, destaques |
| Verde profundo | `#0B3D26` | Seção de parcerias |
| Vermelho capacete | `#E2382F` | **Micro-acento** apenas (terço da faixa tricolor, detalhes) |
| Amarelo placa | `#F4CF1C` | **Só** na placa "33" (elemento de marca) |

- **Faixa tricolor** verde/branco/vermelho (como as listras do topo do capacete): pequena, ao lado dos rótulos das seções.
- **Placa 33:** retângulo amarelo arredondado com "33" preto, como a placa real da F400. Funciona como assinatura no cabeçalho, no favicon e em pontos-chave. Substitui a logo que ele não tem.
- **Tipografia** (já recortada em `public/fonts/`, CSS em `src/styles/fontes.css`):
  - `Mona Expandida`: Mona Sans com largura 125, pesos 500–900. Títulos e números grandes; H1 em caixa alta.
  - `Mona Texto`: Mona Sans com largura 100, pesos 380–700. Textos.
  - `Geist Mono`: pesos 400–600. Rótulos técnicos, dados e tempos (estética de folha de cronometragem = precisão).
- Cantos quase retos, linhas finas no lugar de sombras, botões em pílula.
- Alternância de seções escuras e claras para dar ritmo editorial.

### Movimento (todo com propósito)

- **Abertura:** a foto assenta (escala 1,06 → 1), o "33" sobe por trás do piloto e o nome entra com máscara. No desktop, o mouse desloca as camadas alguns pixels (profundidade). No scroll, as camadas se movem em velocidades diferentes.
- **Resumo:** o texto acende palavra por palavra no scroll (CSS `animation-timeline: view()`, sem JS; sem suporte, fica estático).
- **Contadores** nos números reais (3 segundos lugares, 5× academia, 2× kart, meses de treino).
- **Trajetória:** linha que se preenche com o scroll; no desktop, foto fixa que troca a cada etapa.
- **Capacete:** visualizador de 4 ângulos (arrastar ou setas; no celular, deslizar), com indicador do ângulo.
- **Filme:** as citações funcionam como capítulos. "Ouvir no filme ▶ 1:31" leva ao player e toca a partir daquele ponto.
- **Galeria:** faixa horizontal com arrasto e snap, rótulo "Arraste" seguindo o cursor no desktop e lightbox com teclado e gesto.
- **Mapa de exposição:** pontos clicáveis sobre a foto `zebra.jpg`; no celular, pontos numerados com a lista embaixo.
- **Cabeçalho:** some ao descer e volta ao subir.
- **CTA flutuante:** no celular, depois da abertura, some perto da seção de contato.
- Tudo desligado com `prefers-reduced-motion`.

---

## 6. Arquitetura (página única)

Ordem pensada para o patrocinador: quem ele é → onde está → o que já fez → como se prepara → como pensa → onde quer chegar → como entrar em contato.

1. **Abertura (hero).** Desktop: tela dividida, com a coluna de texto à esquerda (fundo asfalto) e o painel da foto à direita (foto + "33" gigante + recorte). Celular: a foto vem primeiro (crop 3:4 centrado no capacete), com o nome grande logo abaixo. Faixa de dados no rodapé da abertura, 4 células (2×2 no celular).
2. **Resumo.** Um parágrafo editorial grande e 3 números.
3. **01 Perfil.** Quem pilota o #33: texto, ficha técnica (mono), loop do vídeo com o rosto, estilo de pilotagem (com a foto `disputa-235`), referência (Verstappen) e origem (o pai).
4. **02 Capacete / identidade.** Visualizador de 4 ângulos e as cores que viram a paleta do site.
5. **03 Trajetória.** Etapas de 01 a 04 (passado → hoje). Termina apontando para o "Próximo passo".
6. **04 Resultados.** "3× 2º" em destaque, tabela tipo folha de cronometragem (etapa, local, resultado), campeonatos (atuais e já disputados) e categoria.
7. **05 Preparação.** A semana: academia 5×, kart 2×, simulador toda semana.
8. **06 Como ele pensa a corrida + Filme.** Citações com capítulos e o player.
9. **Galeria.** Todas as fotos que valem a pena, com créditos.
10. **07 Próximo passo.** Evoluir agora → competir em outros estados → Stock Car.
11. **08 Parcerias.** Por que entrar agora (só fatos), patrocinadora atual (Brunetti Odontologia), mapa de exposição e CTA.
12. **Contato.** E-mail grande (com botão de copiar), telefone/WhatsApp e Instagram.
13. **Rodapé.**

Navegação (desktop): Perfil · Trajetória · Resultados · Preparação · Filme · Parcerias · botão **Contato/Patrocínio**. Celular: menu em tela cheia com os links e os contatos.

---

## 7. Textos (rascunho aprovado internamente; ajustar só para melhorar, nunca para inventar)

**Abertura**
- Sobretítulo (mono): `Piloto · Kart F400 Júnior · Nº 33`
- H1: **Gabriel Brunetti**
- Texto: "14 anos, de Valparaíso de Goiás. Corre na F400 Júnior com a equipe Dibo Racing, disputa o Campeonato Brasiliense e o Campeonato Brasileiro e tem um objetivo de longo prazo: a Stock Car."
- Botões: "Ver a trajetória" · "Parcerias e patrocínio"
- Faixa de dados: Categoria — Kart F400 Júnior · Temporada — Brasiliense e Brasileiro · Destaque — 3× 2º lugar no BKS · Objetivo — Stock Car

**Resumo**
- "Gabriel começou a treinar em outubro de 2025. Desde então, terminou em segundo lugar em três etapas do BKS, correu o Circuito Paulista e chegou ao Campeonato Brasileiro, com academia cinco vezes por semana, kart duas vezes e simulador toda semana."
- Números: [N] meses desde o primeiro treino (calculado a partir de 10/2025) · 3 segundos lugares no BKS · 4 campeonatos disputados (BKS, Circuito Paulista, Brasiliense e Brasileiro)

**Perfil**
- H2: "Quem pilota o #33"
- "Gabriel Lima Brunetti tem 14 anos e é de Valparaíso de Goiás, no Entorno do Distrito Federal. Chegou ao automobilismo pela influência do pai, começou a treinar em outubro de 2025 e hoje corre com a equipe Dibo Racing, acompanhado de perto pelos pais."
- Ficha: Nome — Gabriel Lima Brunetti · Idade — 14 anos · Cidade — Valparaíso de Goiás (GO) · Número — 33 · Categoria — Kart F400 Júnior · Equipe — Dibo Racing · Treina desde — outubro de 2025 · Referência — Max Verstappen
- Estilo: "Como ele define a própria pilotagem: **limpa e conservadora, com boa noção de ultrapassagem.**" (sem aspas de citação, porque não é literal)
- Referência: "Max Verstappen é a principal referência de Gabriel, principalmente pela mentalidade."

**Capacete**
- "Verde, branco e vermelho no capacete; verde e branco no kart; o 33 na placa amarela. É assim que Gabriel é reconhecido na pista, e é daí que saem as cores deste site."

**Trajetória**
- 01 Ponto de partida — "A influência do pai": foi pelo pai que o automobilismo entrou na vida de Gabriel.
- 02 Outubro de 2025 — "Primeiros treinos": Gabriel começa a treinar.
- 03 Primeiros campeonatos — "BKS e Circuito Paulista": no BKS, termina em 2º lugar na 2ª, na 3ª e na 5ª etapa. Também disputa o Circuito Paulista.
- 04 Temporada atual — "Brasiliense e Brasileiro": na F400 Júnior, com a Dibo Racing.
- → "Próximo passo" (link para a seção 07)

**Resultados** (tabela tipo cronometragem)

| Etapa | Local | Resultado |
| --- | --- | --- |
| 2ª etapa · BKS | Kartódromo Ayrton Senna · Brasília | 2º |
| 3ª etapa · BKS | Kartódromo Ayrton Senna · Brasília | 2º |
| 5ª etapa · BKS | Kartódromo Brasília Kart · Brasília | 2º |

Campeonatos: temporada atual — Campeonato Brasiliense e Campeonato Brasileiro; já disputados — BKS e Circuito Paulista.

**Preparação**
- H2 sugerido: "O que acontece entre uma corrida e outra"
- Academia — 5× por semana · Kart — 2× por semana · Simulador — toda semana
- Explicações curtas e neutras sobre a função de cada frente (preparo físico, tempo de pista, repetição de traçado), **sem** inventar detalhes da rotina (dias, horários, local do simulador etc.).

**Como ele pensa a corrida + Filme**
- H2: "Como Gabriel pensa uma corrida"
- Ligação: "A referência dele é o Verstappen, principalmente pela mentalidade. No filme, Gabriel explica com as próprias palavras o que passa pela cabeça dele num fim de semana de corrida."
- 3 capítulos: 1:31 "A tomada de tempo" · 1:40 "Antes da largada" · 1:50 "Na liderança" (citações da seção 4)
- Player: "Do box à bandeirada", 2:05, "Assistir com som"

**Próximo passo**
- "O objetivo de agora é evoluir como piloto. O de longo prazo tem nome: Stock Car."
- Rota: Agora — Evoluir como piloto (F400 Júnior, Brasiliense e Brasileiro) → Próximo — Competir em diferentes estados do Brasil → Longo prazo — Stock Car

**Parcerias**
- H2: "Uma marca no #33 desde as primeiras temporadas"
- Por que agora (só fatos): duas competições na temporada · 2º lugar em três etapas do BKS · academia 5×, kart 2× e simulador toda semana · plano de correr em diferentes estados · estrutura com a Dibo Racing e os pais
- Patrocinadora atual: **Brunetti Odontologia**
- Mapa de exposição (foto `zebra.jpg`): painel frontal (acima do número), bico/carenagem frontal, laterais (junto da placa 33), capacete, macacão, e no digital: Instagram e este site. "Espaços e formatos são definidos em conversa."
- CTA: e-mail com assunto pronto ("Patrocínio — Gabriel Brunetti #33") e WhatsApp com a mensagem "Olá! Vim pelo site do Gabriel Brunetti e quero conversar sobre patrocínio."
- **Não** prometer "apresentação comercial/mídia kit" (não existe).

**Contato**: "Patrocínio, imprensa e parcerias", com e-mail, telefone/WhatsApp e Instagram.

---

## 8. Técnica

- **Astro 7** (mesma base do site da Villar), site estático, **sem frameworks de JS**: um único script pequeno, CSS embutido (`inlineStylesheets: 'always'`) e HTML comprimido.
- `npm run midia` (`scripts/preparar-midia.mjs`): gera `public/img/<nome>-<largura>.avif|webp` (640/1024/1600/2400, sem ampliar) a partir de `marca/fotos`, `marca/quadros` e `marca/recortes`, e gera os recortes de celular da abertura (`a-frente-celular`, `a-frente-recorte-celular`, ambos na área x=700, largura 1280, altura total).
- `npm run fontes` (`scripts/preparar-fontes.mjs`): já rodado. As três fontes somam ~70 KB.
- Componente de foto: `<picture>` com AVIF e WebP, `srcset` lido dos arquivos gerados, `width`/`height` reais (sem CLS), `loading="lazy"` fora da abertura e `fetchpriority="high"` na foto da abertura.
- SEO: título "Gabriel Brunetti #33 — Piloto de Kart F400 Júnior | Site oficial"; description com fatos; Open Graph 1200×630 (gerar a partir da abertura); JSON-LD `Person` (+ `WebSite`); favicon com a placa 33; `PUBLIC_SITE_URL` em `.env`. Sem domínio definido, não gerar canonical/sitemap com domínio inventado.
- Meta: Lighthouse 100/100/100/100 no celular, como no site da Villar.
- Acessibilidade: contraste AA, foco visível, navegação por teclado (lightbox, capacete, mapa), `alt` descritivos, vídeo com controles e sem autoplay com som.

---

## 9. Pendências para confirmar com o cliente

1. ~~O telefone (61) 99921-8444 tem WhatsApp?~~ **Confirmado: sim.** Os botões de patrocínio levam para o WhatsApp.
2. Data de nascimento (para a idade se atualizar sozinha; hoje está fixa em "14 anos").
3. Ano dos três segundos lugares no BKS.
4. "Outubro do ano passado" = outubro de 2025?
5. O número 33 tem relação com o Verstappen?
6. Domínio do site.
7. O trecho "fica pensando" × "tem que estar pensando" (vídeo, 1:40).
8. Como o Gabriel tem 14 anos, vale considerar se o contato público deve ser de um dos pais.
