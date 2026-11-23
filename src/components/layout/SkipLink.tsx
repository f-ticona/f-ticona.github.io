/**
 * Primer elemento enfocable de la página. Visible solo al recibir foco por
 * teclado; apunta al `main` (UX-001 §10.2).
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:inline-flex focus:items-center focus:px-4 focus:py-3 focus:rounded-xl focus:bg-abisal-500 focus:text-tinta-900 focus:font-medium"
    >
      Saltar al contenido
    </a>
  );
}
