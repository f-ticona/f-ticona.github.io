import { ArrowUpRight } from "lucide-react";
import type { ContactChannel } from "../../data/siteData";

/**
 * Tile de contacto: enlace real (nunca div con onClick), objetivo táctil de
 * ≥ 88×88 px y texto oculto que avisa cuando abre en otra pestaña.
 */
export function ContactTile({ channel }: { channel: ContactChannel }) {
  const Icon = channel.icon;

  return (
    <a
      href={channel.href}
      {...(channel.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex min-h-[88px] flex-col justify-between gap-4 rounded-2xl border border-tinta-700 bg-tinta-900 p-5 transition-colors duration-300 hover:border-abisal-500/60"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-abisal-500/10">
          <Icon size={20} className="text-abisal-400" aria-hidden="true" />
        </span>
        <ArrowUpRight
          size={18}
          aria-hidden="true"
          className="text-gris-neutro-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <div>
        <span className="block text-xs uppercase tracking-[2px] text-gris-neutro-200 mb-1">
          {channel.label}
        </span>
        <span className="block text-blanco-roto-50 break-words">
          {channel.value}
        </span>
        <span className="mt-1 block text-xs text-gris-neutro-300">
          {channel.hint}
        </span>
        {channel.external && (
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        )}
      </div>
    </a>
  );
}
