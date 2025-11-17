import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#servicios", label: "Clases" },
    { href: "#entrenadores", label: "Entrenadores" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold text-xl tracking-tight">
          <span className="bg-gradient-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent">Padel</span>
          <span className="ml-1 text-gray-900">Academy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-emerald-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition-colors">
            Reserva ahora
          </a>
        </div>

        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-full hover:bg-black/5">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-emerald-600">
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700">
              Reserva ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
