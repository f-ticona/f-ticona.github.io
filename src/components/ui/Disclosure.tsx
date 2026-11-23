import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DisclosureProps {
  id: string;
  collapsedLabel: string;
  expandedLabel: string;
  children: ReactNode;
}

/**
 * Control de divulgación que NO desmonta el contenido: el panel permanece en el
 * DOM y se oculta con el atributo `hidden` (UX-001 §7.2). Así el Ctrl+F del
 * navegador encuentra los cursos con el panel cerrado y `aria-controls` nunca
 * apunta a un nodo inexistente.
 */
export function Disclosure({
  id,
  collapsedLabel,
  expandedLabel,
  children,
}: DisclosureProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 min-h-11 px-4 py-2.5 rounded-xl border border-tinta-700 text-sm text-abisal-400 hover:border-abisal-500 hover:text-abisal-300 transition-colors duration-300"
      >
        {open ? expandedLabel : collapsedLabel}
        {open ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
      </button>
      <div id={id} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
