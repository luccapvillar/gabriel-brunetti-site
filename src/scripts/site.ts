/**
 * Único script do site. Tudo aqui é melhoria progressiva: sem JS, o conteúdo continua completo.
 */
import { mesesDesdeInicio } from '../data/gabriel';

const $ = <T extends Element = HTMLElement>(sel: string, raiz: ParentNode = document) => raiz.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, raiz: ParentNode = document) => [...raiz.querySelectorAll<T>(sel)];
const semMovimento = matchMedia('(prefers-reduced-motion: reduce)');
const ponteiroFino = matchMedia('(pointer: fine)');

/* ---------- Cabeçalho: some ao descer, volta ao subir; menu do celular ---------- */
function cabecalho() {
  const el = $('[data-cabecalho]');
  const abertura = $('[data-abertura]');
  if (!el) return;
  let ultimo = scrollY;
  let pendente = false;

  const atualizar = () => {
    pendente = false;
    const y = scrollY;
    const limite = abertura ? abertura.offsetHeight * 0.6 : 200;
    el.classList.toggle('solido', y > 40);
    if (!el.classList.contains('aberto')) {
      el.classList.toggle('escondido', y > limite && y > ultimo + 2);
      if (y < ultimo - 2) el.classList.remove('escondido');
    }
    ultimo = y;
  };
  addEventListener('scroll', () => {
    if (!pendente) {
      pendente = true;
      requestAnimationFrame(atualizar);
    }
  }, { passive: true });
  atualizar();

  // Quem navega pelo teclado precisa ver o cabeçalho
  el.addEventListener('focusin', () => el.classList.remove('escondido'));

  const botao = $<HTMLButtonElement>('[data-menu-botao]');
  const menu = $('[data-menu]');
  const rotulo = $('[data-menu-rotulo]');
  if (!botao || !menu) return;

  const alternar = (abrir: boolean) => {
    botao.setAttribute('aria-expanded', String(abrir));
    if (rotulo) rotulo.textContent = abrir ? 'Fechar menu' : 'Abrir menu';
    menu.hidden = !abrir;
    el.classList.toggle('aberto', abrir);
    document.documentElement.style.overflow = abrir ? 'hidden' : '';
    if (abrir) $('a', menu)?.focus();
  };
  botao.addEventListener('click', () => alternar(botao.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if ((e.target as Element).closest('a[href^="#"]')) alternar(false);
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      alternar(false);
      botao.focus();
    }
  });
  matchMedia('(min-width: 1100px)').addEventListener('change', (e) => e.matches && alternar(false));
}

/* ---------- Link ativo no menu conforme a seção na tela ---------- */
function navAtiva() {
  const links = $$<HTMLAnchorElement>('.nav a[href^="#"]');
  const mapa = new Map(links.map((a) => [a.hash.slice(1), a]));
  const obs = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        links.forEach((a) => a.removeAttribute('aria-current'));
        mapa.get(e.target.id)?.setAttribute('aria-current', 'true');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  $$('main section[id]').forEach((s) => obs.observe(s));
}

/* ---------- Revelação suave e contadores ---------- */
function revelar() {
  const obs = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('visivel');
        obs.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  $$('[data-revelar]').forEach((el) => obs.observe(el));
}

function contadores() {
  // O número de meses é atualizado para a data de quem visita
  const meses = mesesDesdeInicio();
  $$('[data-meses]').forEach((el) => {
    el.dataset.contador = String(meses);
    el.textContent = String(meses);
  });

  if (semMovimento.matches) return;
  const obs = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        obs.unobserve(e.target);
        const el = e.target as HTMLElement;
        const alvo = Number(el.dataset.contador);
        const inicio = performance.now();
        const duracao = 900 + alvo * 20;
        const passo = (agora: number) => {
          const t = Math.min(1, (agora - inicio) / duracao);
          el.textContent = String(Math.round(alvo * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
      }
    },
    { threshold: 0.6 },
  );
  $$('[data-contador]').forEach((el) => obs.observe(el));
}

/* ---------- Abertura: o mouse desloca as camadas alguns pixels ---------- */
function abertura() {
  const el = $('[data-abertura]');
  if (!el || semMovimento.matches || !ponteiroFino.matches) return;
  let quadro = 0;
  el.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(quadro);
    quadro = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
      el.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
    });
  });
  el.addEventListener('pointerleave', () => {
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
  });
}

/* ---------- Perfil: loop do rosto toca só quando visível ---------- */
function loopPerfil() {
  const video = $<HTMLVideoElement>('[data-loop]');
  const botao = $<HTMLButtonElement>('[data-loop-botao]');
  const rotulo = $('[data-loop-rotulo]');
  if (!video || !botao) return;
  let pausadoPeloUsuario = semMovimento.matches;
  botao.hidden = false;

  const atualizarBotao = () => {
    botao.setAttribute('aria-pressed', String(pausadoPeloUsuario));
    if (rotulo) rotulo.textContent = pausadoPeloUsuario ? 'Tocar vídeo' : 'Pausar vídeo';
  };
  atualizarBotao();

  botao.addEventListener('click', () => {
    pausadoPeloUsuario = !pausadoPeloUsuario;
    atualizarBotao();
    if (pausadoPeloUsuario) video.pause();
    else video.play().catch(() => {});
  });

  new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting && !pausadoPeloUsuario) {
        video.preload = 'auto';
        video.play().catch(() => {});
      } else video.pause();
    },
    { threshold: 0.25 },
  ).observe(video);
}

/* ---------- Capacete: 4 ângulos com arrasto, teclado e botões ---------- */
function capacete() {
  const raiz = $('[data-capacete]');
  if (!raiz) return;
  const palco = $('[data-capacete-palco]', raiz)!;
  const fotos = $$('.visor__foto', palco);
  const botoes = $$<HTMLButtonElement>('[data-capacete-ir]', raiz);
  const nota = $('[data-capacete-nota]', raiz);
  const dados: { rotulo: string; nota: string }[] = JSON.parse($('[data-capacete-notas]', raiz)?.textContent || '[]');
  const total = fotos.length;
  let atual = 0;

  const ir = (i: number) => {
    atual = ((i % total) + total) % total;
    fotos.forEach((f, n) => f.classList.toggle('ativa', n === atual));
    botoes.forEach((b, n) => b.setAttribute('aria-pressed', String(n === atual)));
    palco.setAttribute('aria-valuenow', String(atual + 1));
    palco.setAttribute('aria-valuetext', dados[atual]?.rotulo ?? '');
    if (nota) nota.textContent = dados[atual]?.nota ?? '';
  };
  const girar = (i: number) => {
    raiz.classList.add('girou');
    ir(i);
  };

  botoes.forEach((b) => b.addEventListener('click', () => girar(Number(b.dataset.capaceteIr))));
  $('[data-capacete-anterior]', raiz)?.addEventListener('click', () => girar(atual - 1));
  $('[data-capacete-proximo]', raiz)?.addEventListener('click', () => girar(atual + 1));
  palco.addEventListener('keydown', (e) => {
    const mapa: Record<string, number> = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 };
    if (e.key in mapa) {
      e.preventDefault();
      girar(atual + mapa[e.key]);
    } else if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      girar(e.key === 'Home' ? 0 : total - 1);
    }
  });

  // Arrastar: cada ~1/6 da largura do palco troca um ângulo (sem dar a volta, como girar um objeto)
  let inicioX = 0;
  let inicioIndice = 0;
  let arrastando = false;
  palco.addEventListener('pointerdown', (e) => {
    arrastando = true;
    inicioX = e.clientX;
    inicioIndice = atual;
    palco.setPointerCapture(e.pointerId);
  });
  palco.addEventListener('pointermove', (e) => {
    if (!arrastando) return;
    const passo = palco.clientWidth / 6;
    const delta = Math.round((inicioX - e.clientX) / passo);
    const alvo = Math.max(0, Math.min(total - 1, inicioIndice + delta));
    if (alvo !== atual) girar(alvo);
  });
  const soltar = () => (arrastando = false);
  palco.addEventListener('pointerup', soltar);
  palco.addEventListener('pointercancel', soltar);
}

/* ---------- Trajetória: etapa atual troca a foto fixa (desktop) ---------- */
function trajetoria() {
  const etapas = $$('[data-etapa]');
  const fotos = $$('[data-etapa-foto]');
  if (!etapas.length) return;
  const obs = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        const i = Number((e.target as HTMLElement).dataset.etapa);
        etapas.forEach((el, n) => el.classList.toggle('atual', n <= i));
        fotos.forEach((f, n) => f.classList.toggle('ativa', n === i));
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  etapas.forEach((el) => obs.observe(el));
}

/* ---------- Filme: capítulos e player ---------- */
function filme() {
  const video = $<HTMLVideoElement>('[data-filme]');
  const capa = $<HTMLButtonElement>('[data-filme-play]');
  const secao = $('#filme');
  const progresso = $('[data-filme-progresso]');
  const capitulos = $$('[data-capitulo]');
  if (!video || !secao) return;
  // Enquanto a capa estiver à vista, os controles nativos ficam escondidos atrás dela
  video.controls = false;
  const mostrarControles = () => {
    if (capa) capa.hidden = true;
    video.controls = true;
  };

  const tocar = (inicio?: number) => {
    mostrarControles();
    if (inicio !== undefined) {
      if (video.readyState === 0) video.preload = 'auto';
      video.currentTime = inicio;
    }
    video.play().catch(() => {});
  };

  capa?.addEventListener('click', () => {
    tocar();
    video.focus();
  });
  video.addEventListener('play', () => {
    mostrarControles();
    secao.classList.add('tocando');
  });
  video.addEventListener('pause', () => secao.classList.remove('tocando'));
  video.addEventListener('timeupdate', () => {
    const t = video.currentTime;
    progresso?.style.setProperty('--progresso', String(t / (video.duration || 125)));
    let ativo = -1;
    capitulos.forEach((c, i) => {
      if (t >= Number(c.dataset.capitulo)) ativo = i;
    });
    capitulos.forEach((c, i) => c.classList.toggle('atual', i === ativo));
  });

  // "Ouvir no filme": funciona no capítulo e em qualquer outro ponto do site (ex.: perfil)
  document.addEventListener('click', (e) => {
    const gatilho = (e.target as Element).closest<HTMLElement>('[data-tocar]');
    if (!gatilho) return;
    e.preventDefault();
    const inicio = Number(gatilho.dataset.tocar);
    const player = $('[data-player]')!;
    const r = player.getBoundingClientRect();
    if (r.top < 0 || r.bottom > innerHeight) {
      player.scrollIntoView({ behavior: semMovimento.matches ? 'auto' : 'smooth', block: 'center' });
    }
    tocar(inicio);
  });
}

/* ---------- Galeria: arrasto, setas, cursor "Arraste" e lightbox ---------- */
function galeria() {
  const raiz = $('[data-galeria]');
  const lista = $('[data-galeria-lista]');
  if (!raiz || !lista) return;
  const botoes = $$<HTMLButtonElement>('[data-abrir]', lista);

  const deslocar = (dir: number) => {
    const item = lista.querySelector('li');
    const passo = item ? item.getBoundingClientRect().width + 16 : lista.clientWidth * 0.8;
    lista.scrollBy({ left: dir * passo, behavior: semMovimento.matches ? 'auto' : 'smooth' });
  };
  $('[data-galeria-anterior]')?.addEventListener('click', () => deslocar(-1));
  $('[data-galeria-proximo]')?.addEventListener('click', () => deslocar(1));

  // Arrasto com o mouse (no toque, o rolar nativo já resolve)
  let x0 = 0;
  let s0 = 0;
  let moveu = false;
  let segurando = false;
  lista.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    segurando = true;
    moveu = false;
    x0 = e.clientX;
    s0 = lista.scrollLeft;
  });
  addEventListener('pointermove', (e) => {
    if (!segurando) return;
    const dx = e.clientX - x0;
    if (!moveu && Math.abs(dx) > 6) {
      moveu = true;
      raiz.classList.add('arrastando');
    }
    if (moveu) lista.scrollLeft = s0 - dx;
  });
  addEventListener('pointerup', () => {
    if (!segurando) return;
    segurando = false;
    if (moveu) {
      // Solta e deixa o snap assentar na foto mais próxima
      requestAnimationFrame(() => raiz.classList.remove('arrastando'));
    }
  });

  // Rótulo "Arraste" seguindo o cursor
  const cursor = $('[data-cursor]', raiz);
  if (cursor && ponteiroFino.matches && !semMovimento.matches) {
    lista.addEventListener('pointerenter', () => raiz.classList.add('cursor-ativo'));
    lista.addEventListener('pointerleave', () => raiz.classList.remove('cursor-ativo'));
    lista.addEventListener('pointermove', (e) => {
      cursor.style.transform = `translate(${e.clientX - 44}px, ${e.clientY - 44}px)`;
    });
  }

  // Lightbox
  const dialog = $<HTMLDialogElement>('[data-lightbox]');
  if (!dialog) return;
  const img = $<HTMLImageElement>('[data-lightbox-img]', dialog)!;
  const contagem = $('[data-lightbox-contagem]', dialog)!;
  const alt = $('[data-lightbox-alt]', dialog)!;
  const credito = $('[data-lightbox-credito]', dialog)!;
  let atual = 0;
  let origem: HTMLElement | null = null;

  const mostrar = (i: number) => {
    atual = (i + botoes.length) % botoes.length;
    const b = botoes[atual];
    img.srcset = b.dataset.srcset || '';
    img.sizes = '100vw';
    img.src = b.dataset.src || '';
    img.alt = b.dataset.alt || '';
    contagem.textContent = `${String(atual + 1).padStart(2, '0')} / ${String(botoes.length).padStart(2, '0')}`;
    alt.textContent = b.dataset.alt || '';
    credito.textContent = b.dataset.credito || '';
  };

  botoes.forEach((b, i) =>
    b.addEventListener('click', (e) => {
      if (raiz.classList.contains('arrastando')) return e.preventDefault();
      origem = b;
      mostrar(i);
      dialog.showModal();
    }),
  );
  $('[data-lightbox-fechar]', dialog)?.addEventListener('click', () => dialog.close());
  $('[data-lightbox-anterior]', dialog)?.addEventListener('click', () => mostrar(atual - 1));
  $('[data-lightbox-proximo]', dialog)?.addEventListener('click', () => mostrar(atual + 1));
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') mostrar(atual + 1);
    if (e.key === 'ArrowLeft') mostrar(atual - 1);
  });
  // Clique fora da foto fecha
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => origem?.focus());

  // Gesto: deslizar para os lados troca a foto
  let toqueX = 0;
  let toqueY = 0;
  dialog.addEventListener('touchstart', (e) => {
    toqueX = e.touches[0].clientX;
    toqueY = e.touches[0].clientY;
  }, { passive: true });
  dialog.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - toqueX;
    const dy = e.changedTouches[0].clientY - toqueY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) mostrar(atual + (dx < 0 ? 1 : -1));
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) dialog.close();
  });
}

/* ---------- Mapa de exposição ---------- */
function mapa() {
  const raiz = $('[data-mapa]');
  if (!raiz) return;
  const pontos = $$<HTMLButtonElement>('[data-ponto]', raiz);
  const itens = $$('[data-ponto-item]');
  const secao = raiz.closest('section');

  const ativar = (i: number) => {
    secao?.classList.add('mapa-tocado');
    pontos.forEach((p, n) => p.setAttribute('aria-expanded', String(n === i)));
    itens.forEach((it, n) => it.classList.toggle('ativo', n === i));
  };
  pontos.forEach((p, i) => {
    p.addEventListener('click', () => ativar(p.getAttribute('aria-expanded') === 'true' ? -1 : i));
    p.addEventListener('mouseenter', () => ponteiroFino.matches && ativar(i));
  });
  itens.forEach((it, i) => it.addEventListener('mouseenter', () => ponteiroFino.matches && ativar(i)));

  new IntersectionObserver(([e]) => secao?.classList.toggle('mapa-visivel', e.isIntersecting), { threshold: 0.3 }).observe(raiz);
}

/* ---------- Copiar e-mail ---------- */
function copiar() {
  $$<HTMLButtonElement>('[data-copiar]').forEach((b) => {
    const rotulo = $('[data-copiar-rotulo]', b);
    const aviso = $('[data-copiar-aviso]');
    b.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copiar || '');
        if (rotulo) rotulo.textContent = 'E-mail copiado';
        if (aviso) aviso.textContent = 'E-mail copiado.';
        setTimeout(() => rotulo && (rotulo.textContent = 'Copiar e-mail'), 2400);
      } catch {
        location.href = `mailto:${b.dataset.copiar}`;
      }
    });
  });
}

/* ---------- CTA flutuante (celular): depois da abertura, some perto do contato ---------- */
function ctaFlutuante() {
  const abertura = $('[data-abertura]');
  const fim = $$('#parcerias, #contato, footer');
  if (!abertura) return;
  let passouAbertura = false;
  const visiveis = new Set<Element>();
  const atualizar = () => document.body.classList.toggle('cta-visivel', passouAbertura && visiveis.size === 0);
  new IntersectionObserver(([e]) => {
    passouAbertura = !e.isIntersecting && e.boundingClientRect.top < 0;
    atualizar();
  }).observe(abertura);
  const obs = new IntersectionObserver((entradas) => {
    for (const e of entradas) e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target);
    atualizar();
  });
  fim.forEach((el) => obs.observe(el));
}

cabecalho();
navAtiva();
revelar();
contadores();
abertura();
loopPerfil();
capacete();
trajetoria();
filme();
galeria();
mapa();
copiar();
ctaFlutuante();
