const items = [
  "Dr. Luciano Alves Neves",
  "Saúde Integral",
  "Medicina Preventiva",
  "DOC 365",
  "Longevidade",
];

const MarqueeBanner = () => {
  const content = [...items, ...items, ...items, ...items].map((item, i) => (
    <span key={i} className="flex items-center gap-6 mx-6">
      <span className="text-[11px] font-medium tracking-[3px] uppercase" style={{ color: "var(--gold)" }}>
        {item}
      </span>
      <span className="text-[8px]" style={{ color: "var(--gold)" }}>✦</span>
    </span>
  ));

  return (
    <div className="w-full py-4 overflow-hidden" style={{
      background: "var(--surface)",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      borderBottom: "1px solid rgba(201,168,76,0.08)"
    }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {content}
      </div>
    </div>
  );
};

export default MarqueeBanner;
