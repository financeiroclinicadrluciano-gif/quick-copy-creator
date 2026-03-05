import { useState, useEffect } from "react";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (scrolled) {
    return (
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500"
        style={{
          background: "rgba(7,13,31,0.85)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <img src={logoIcon} alt="Logo" className="h-[28px] w-auto" style={{ filter: "brightness(0.7) contrast(1.2)" }} />
        <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline transition-colors hover:text-[var(--gold-light)]"
          style={{ color: "var(--text-muted-raw)" }}>
          Home
        </a>
        <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline pb-0.5 transition-colors"
          style={{ color: "var(--text-main)", borderBottom: "1px solid var(--gold)" }}>
          DOC365
        </a>
        <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline transition-colors hover:text-[var(--gold-light)]"
          style={{ color: "var(--text-muted-raw)" }}>
          Blog
        </a>
        <a href="https://wa.me/5541992790960" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-medium tracking-[2px] uppercase no-underline px-5 py-2 rounded-full transition-all"
          style={{
            border: "1px solid rgba(201,168,76,0.4)",
            color: "var(--gold-light)",
          }}>
          Agendar
        </a>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[60px] py-[18px]"
      style={{ background: "transparent" }}>
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 no-underline">
        <img src={logoIcon} alt="Logo" className="h-[38px] w-auto" style={{ filter: "brightness(0.7) contrast(1.2)" }} />
        <div className="text-[13px] font-normal leading-tight" style={{ color: "var(--text-main)" }}>
          Dr.<br />
          <span className="text-[14px]">Luciano Alves Neves</span>
        </div>
      </a>

      {/* Center links */}
      <ul className="flex items-center gap-10 list-none absolute left-1/2 -translate-x-1/2">
        <li>
          <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline transition-colors hover:text-[var(--gold-light)]"
            style={{ color: "var(--text-muted-raw)" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline pb-1 transition-colors"
            style={{ color: "var(--text-main)", borderBottom: "1px solid var(--gold)" }}>
            DOC365
          </a>
        </li>
        <li>
          <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline transition-colors hover:text-[var(--gold-light)]"
            style={{ color: "var(--text-muted-raw)" }}>
            Blog
          </a>
        </li>
      </ul>

      {/* CTA button */}
      <a href="https://wa.me/5541992790960" target="_blank" rel="noopener noreferrer"
        className="text-[11px] font-medium tracking-[2px] uppercase no-underline px-7 py-3 rounded-full transition-all hover:shadow-lg"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 100%)",
          border: "1px solid rgba(201,168,76,0.4)",
          color: "var(--gold-light)",
        }}>
        Entre em contato
      </a>
    </nav>
  );
};

export default Navbar;
