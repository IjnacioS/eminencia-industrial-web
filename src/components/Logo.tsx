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
      <img
        src="/imagenes/logo-icono-v2.png"
        alt="Eminencia Industrial"
        className="h-12 w-auto md:h-16"
      />
      <span className="font-display leading-tight text-[#f3f0e8]">
        <span className="block text-sm font-bold tracking-tight md:text-lg">
          EMINENCIA
        </span>
        <span className="block text-sm font-bold tracking-tight text-[#e5d00e] md:text-lg">
          INDUSTRIAL
        </span>
      </span>
    </a>
  );
}