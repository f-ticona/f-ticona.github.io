import { useEffect, useState } from "react";

/**
 * Devuelve el `href` de la sección visible para marcar `aria-current` en el
 * navbar. Sin scroll-spy, una página de 7 bloques deja al lector sin posición
 * (UX-001 §3.2).
 *
 * Se calcula por posición real de cada sección en vez de por intersección:
 * con secciones más altas que el viewport, un `IntersectionObserver` con
 * umbral fijo nunca alcanza el ratio y el ítem activo queda en blanco.
 */
export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = hrefs
      .map((href) => document.getElementById(href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const update = () => {
      const offset = 120;
      let current = "";

      for (const el of elements) {
        if (el.getBoundingClientRect().top <= offset) {
          current = `#${el.id}`;
        }
      }

      // Al llegar al final, la última sección queda activa aunque su tope
      // no cruce el offset.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (atBottom) {
        current = `#${elements[elements.length - 1].id}`;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [hrefs]);

  return active;
}
