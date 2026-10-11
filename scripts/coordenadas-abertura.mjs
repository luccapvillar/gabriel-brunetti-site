/**
 * Coordenadas da abertura, em pixels de marca/fotos/a-frente.jpg (2560×1706).
 * Usadas por quem gera as imagens (preparar-midia, preparar-marca) e pela página (Abertura.astro),
 * para que foto, "33" e recorte do piloto continuem alinhados.
 */
export const FOTO = { largura: 2560, altura: 1706 };

/** Capacete: x 1222–1626, y 180–560. */
export const CAPACETE = { centroX: 1424, topo: 180 };

/** Recorte da foto para o celular (3:4, centrado no capacete). */
export const CELULAR = { left: 700, top: 0, width: 1280, height: 1706 };

/** O "33": largura e topo em pixels da foto, centralizado no capacete. */
export const NUMERO_DESKTOP = { largura: 1440, topo: 190 };
export const NUMERO_CELULAR = { largura: 1110, topo: 60 };

/**
 * O recorte do piloto só precisa cobrir a faixa em que o "33" aparece (capacete e tronco),
 * então sai em retângulos menores que a foto, posicionados por cima dela.
 */
export const RECORTE_DESKTOP = { left: 600, top: 170, width: 1600, height: 830 };
export const RECORTE_CELULAR = { left: 700, top: 170, width: 1280, height: 830 };
