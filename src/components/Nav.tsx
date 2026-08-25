import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-void/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-3" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-signal font-mono text-sm font-bold text-void">
            SM
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-ink sm:block">
            SAI MUKESH B
          </span>
        </a>

        <button
          className="rounded-md border border-line p-2 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-8 font-body text-sm text-mute md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-void px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5 font-body text-sm text-mute">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="hover:text-signal">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
