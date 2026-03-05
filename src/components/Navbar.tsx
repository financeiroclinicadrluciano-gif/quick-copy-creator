import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[60px] py-[18px]"
      style={{
        background: "rgba(7,13,31,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(201,168,76,0.08)"
      }}>
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 no-underline">
        <img src={logoIcon} alt="Logo" className="h-[38px] w-auto brightness-[0.85] invert-0" style={{ filter: "brightness(0.7) contrast(1.2)" }} />
        <div className="text-[13px] font-normal leading-tight" style={{ color: "var(--text-main)" }}>
          Dr.<br />
          <span className="text-[14px]">Luciano Alves Neves</span>
        </div>
      </a>

      {/* Center links */}
      <ul className="flex items-center gap-10 list-none absolute left-1/2 -translate-x-1/2">
        <li>
          <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline pb-1 transition-colors"
            style={{ color: "var(--text-main)", borderBottom: "1px solid var(--gold)" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-[12px] font-medium tracking-[2px] uppercase no-underline transition-colors hover:text-[var(--gold-light)]"
            style={{ color: "var(--text-muted-raw)" }}>
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
