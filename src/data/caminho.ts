/**
 * Prefixa um arquivo de public/ com a base do site.
 * Na raiz de um domínio a base é "/"; numa prévia em subpasta (ex.: GitHub Pages) é "/gabriel-brunetti-site/".
 */
export const caminho = (arquivo: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${arquivo.replace(/^\//, '')}`;
