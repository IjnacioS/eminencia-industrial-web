// Header.tsx — Barra de navegación superior completa
// Incluye la barra superior de información rápida (Topbar) y el menú principal (Navbar).

import { Menu, MessageCircle, X } from 'lucide-react';
import { navItems } from '../data';
import { whatsappLink } from '../helpers';
import { Logo } from './Logo';
import { Topbar } from './Topbar';

interface HeaderProps {
  open: boolean;
  onToggle: () => void;
}

export function Header({ open, onToggle }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#17212c]/95 backdrop-blur-md">
      {/* 1. Barra superior de contacto rápido (Interactiva) */}
      <Topbar />

      {/* 2. Barra de navegación principal */}
      <div className="section-shell relative flex min-h-[70px] items-center justify-center md:justify-between">
        <Logo />

        {/* Menú de navegación (desktop y móvil) */}
        <nav
          className={`${open ? 'flex' : 'hidden'
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#17212c] p-4 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          aria-label="Navegación principal"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={open ? onToggle : undefined}
              className="focus-ring px-2 py-3 text-[10px] font-semibold uppercase tracking-[.1em] text-[#bdc4c9] transition-colors hover:text-[#e5d00e] md:px-0 md:py-2"
              data-testid={`link-nav-${id}`}
            >
              {label}
            </a>
          ))}

          {/* Botón directo a WhatsApp en el menú */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={open ? onToggle : undefined}
            className="mt-2 flex items-center justify-center gap-2 bg-[#e5d00e] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.1em] text-[#17212c] transition-transform hover:-translate-y-0.5 md:mt-0"
            data-testid="link-header-whatsapp"
          >
            <MessageCircle size={15} /> WhatsApp
          </a>
        </nav>

        {/* Botón menú hamburguesa en mobile */}
        <button
          type="button"
          onClick={onToggle}
          className="focus-ring absolute right-0 flex h-11 w-11 items-center justify-center text-[#f3f0e8] md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
