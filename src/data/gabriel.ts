/**
 * Fatos do site — todos vêm de docs/BRIEFING.md (seção 2).
 * Não acrescente nada que não esteja confirmado pelo cliente.
 */

export const NOME_COMPLETO = 'Gabriel Lima Brunetti';
export const NOME = 'Gabriel Brunetti';
export const NUMERO = '33';
export const CATEGORIA = 'Kart F400 Júnior';
/**
 * Nascimento: 7 de março (informado pelo cliente). O ano 2012 é deduzido da idade confirmada
 * (14 anos em outubro de 2026, com o aniversário de março já passado).
 */
export const NASCIMENTO = { ano: 2012, mes: 3, dia: 7 };

/** Idade na data informada; o site calcula na geração e atualiza no navegador (data-idade). */
export function idadeEm(hoje = new Date()) {
  const fezAniversario =
    hoje.getMonth() + 1 > NASCIMENTO.mes || (hoje.getMonth() + 1 === NASCIMENTO.mes && hoje.getDate() >= NASCIMENTO.dia);
  return hoje.getFullYear() - NASCIMENTO.ano - (fezAniversario ? 0 : 1);
}
export const IDADE = idadeEm();
export const CIDADE = 'Valparaíso de Goiás';
export const UF = 'GO';
export const EQUIPE = 'Dibo Racing';
export const PATROCINADORA = 'Brunetti Odontologia';

/** Primeiro treino: outubro de 2025 (pendência 4). Mês com índice de calendário (1 = janeiro). */
export const INICIO = { ano: 2025, mes: 10 };

/** Meses inteiros desde o primeiro treino até a data informada. */
export function mesesDesdeInicio(hoje = new Date()) {
  return (hoje.getFullYear() - INICIO.ano) * 12 + (hoje.getMonth() + 1 - INICIO.mes);
}

const TELEFONE_NUMEROS = '5561999218444';
export const contato = {
  email: 'gabrielbruneti098@gmail.com',
  telefone: '(61) 99921-8444',
  telefoneLink: `tel:+${TELEFONE_NUMEROS}`,
  instagram: '@gabriellbrunetti_',
  instagramUrl: 'https://www.instagram.com/gabriellbrunetti_/',
  emailPatrocinio: `mailto:gabrielbruneti098@gmail.com?subject=${encodeURIComponent('Patrocínio — Gabriel Brunetti #33')}`,
  whatsapp: `https://wa.me/${TELEFONE_NUMEROS}?text=${encodeURIComponent('Olá! Vim pelo site do Gabriel Brunetti e quero conversar sobre patrocínio.')}`,
};

/** Os três resultados são de etapas do BKS 2026 (não do campeonato inteiro). */
export const ANO_RESULTADOS = 2026;
export const resultados = [
  { etapa: '2ª etapa', campeonato: 'BKS', local: 'Kartódromo Ayrton Senna', cidade: 'Brasília', posicao: 2 },
  { etapa: '3ª etapa', campeonato: 'BKS', local: 'Kartódromo Ayrton Senna', cidade: 'Brasília', posicao: 2 },
  { etapa: '5ª etapa', campeonato: 'BKS', local: 'Kartódromo Brasília Kart', cidade: 'Brasília', posicao: 2 },
];

export const campeonatos = {
  atuais: ['Campeonato Brasiliense', 'Campeonato Brasileiro'],
  disputados: ['BKS', 'Circuito Paulista'],
};

/** Trechos do filme (seção 4 do briefing). Cortes marcados com […]. Tempos em segundos. */
export const capitulos = [
  {
    id: 'tomada-de-tempo',
    inicio: 91,
    titulo: 'A tomada de tempo',
    citacao:
      'Na minha opinião, o momento mais difícil em um fim de semana de corrida é a tomada de tempo, porque é onde você tem que extrair todo o potencial do kart, do equipamento, pra você conseguir largar bem.',
    ligacao: 'Ligado à referência: o foco que ele admira no Verstappen.',
  },
  {
    id: 'antes-da-largada',
    inicio: 100,
    titulo: 'Antes da largada',
    // "fica pensando": confirmado pelo cliente (as transcrições automáticas divergiam neste ponto).
    citacao:
      'Antes da largada, você fica pensando principalmente em onde você está largando, em como você pode progredir dentro da corrida, qual a melhor posição que você deve estar, onde você pode fazer uma ultrapassagem.',
    ligacao: 'Ligado ao estilo: boa noção de ultrapassagem.',
  },
  {
    id: 'na-lideranca',
    inicio: 110,
    titulo: 'Na liderança',
    citacao:
      '[…] quando você está em primeiro, você tem que conduzir os karts que estão atrás de você […] porque senão você leva uma punição, e a punição no kart é severa. Você leva a punição e cai três posições, quatro posições.',
    ligacao: 'Ligado ao estilo: pilotagem limpa e conservadora.',
  },
];

export const formatarTempo = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
