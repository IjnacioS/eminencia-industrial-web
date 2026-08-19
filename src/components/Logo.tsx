// Logo.tsx — Logotipo de Eminencia Industrial
// Utilizado en el Header (barra superior) y Footer (pie de página).

export function Logo() {
  return (
    <a
      href="#inicio"
      className="focus-ring flex items-center gap-3"
      aria-label="Eminencia Industrial, volver al inicio"
      data-testid="link-logo"
    >
      <span className="flex h-9 w-9 items-center justify-center bg-[#e5d00e] text-[#17212c] font-display text-sm font-bold">
        EI
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-[#f3f0e8]">
        EMINENCIA <span className="text-[#e5d00e]">INDUSTRIAL</span>
      </span>
    </a>
  );
}
