interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  id?: string;
}

/**
 * Encabezado de sección: eyebrow + h2 + bajada.
 * Único lugar donde se define el ritmo del encabezado (UX-001 §11.1).
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : ""}>
      <span className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-4 block">
        {eyebrow}
      </span>
      <h2
        id={id}
        className="font-source-code font-semibold text-blanco-roto-50 leading-[1.15] tracking-[-1.5px] mb-4"
        style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)" }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`text-gris-neutro-300 text-lg leading-[1.7] max-w-[600px] ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
