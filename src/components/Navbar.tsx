const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[60px] py-[22px]"
      style={{
        background: "rgba(7,13,31,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(201,168,76,0.08)"
      }}>
      <a href="#" className="flex items-center gap-3 no-underline">
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <path d="M20 4C20 4 8 10 8 22C8 28.627 13.373 34 20 34C26.627 34 32 28.627 32 22C32 10 20 4 20 4Z" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
          <path d="M20 14V26M14 20H26" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div className="text-[13px] font-normal leading-tight" style={{ color: "var(--text-main)" }}>
          Dr. Luciano Alves Neves
          <span className="block text-[11px] font-light tracking-wider" style={{ color: "var(--text-muted-raw)" }}>Natuá MedSpa</span>
        </div>
      </a>
      <ul className="flex items-center gap-9 list-none">
        <li><a href="#" className="text-[13px] font-normal tracking-wide no-underline transition-colors hover:text-[var(--gold-light)]" style={{ color: "var(--text-muted-raw)" }}>Home</a></li>
        <li><a href="#" className="text-[13px] font-normal tracking-wide no-underline" style={{ color: "var(--gold-light)" }}>Plano DOC 365</a></li>
        <li><a href="#" className="text-[13px] font-normal tracking-wide no-underline transition-colors hover:text-[var(--gold-light)]" style={{ color: "var(--text-muted-raw)" }}>Blogs</a></li>
        <li>
          <a href="https://wa.me/5541992790960" target="_blank" rel="noopener noreferrer"
            className="text-[12px] font-normal tracking-[1.5px] uppercase no-underline px-6 py-2.5 transition-all hover:bg-[rgba(201,168,76,0.06)]"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "var(--gold-light)",
              borderRadius: "2px"
            }}>
            Entre em contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
