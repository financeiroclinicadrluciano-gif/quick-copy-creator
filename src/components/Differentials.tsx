import { motion } from "framer-motion";
import { CheckSquare, Stethoscope, Mountain, Star, Heart } from "lucide-react";

const pillars = [
  {
    icon: CheckSquare,
    name: "Tecnologia Avançada",
    desc: "Protocolos modernos baseados nas mais recentes evidências científicas."
  },
  {
    icon: Stethoscope,
    name: "Acolhimento Humanizado",
    desc: "Cada paciente é único. Cuidado personalizado do início ao fim."
  },
  {
    icon: Mountain,
    name: "Ciência Fundamentada",
    desc: "Decisões baseadas em exames e análise real do seu organismo."
  },
  {
    icon: Star,
    name: "Compromisso Integral",
    desc: "Acompanhamento constante em todas as fases da transformação."
  },
  {
    icon: Heart,
    name: "Ética Sólida",
    desc: "Transparência e respeito em cada etapa do tratamento."
  }
];

const Differentials = () => {
  return (
    <section className="py-[88px] px-[60px]" style={{
      background: "var(--surface)",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      borderBottom: "1px solid rgba(201,168,76,0.08)"
    }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-3 text-[11px] font-medium tracking-[4px] uppercase mb-5" style={{ color: "var(--gold)" }}>
            <span className="w-7 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            Nossos Diferenciais
          </p>
          <h2 className="text-[clamp(32px,4vw,48px)] font-light leading-[1.15]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
            O que nos torna <em className="italic" style={{ color: "var(--gold-light)" }}>únicos</em>
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-[2px]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden text-center px-6 py-9 cursor-default transition-colors group hover:bg-[rgba(201,168,76,0.04)]"
              style={{ background: "var(--surface2)" }}>
              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-[20%] right-[20%] h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)" }} />

              <div className="mb-5 flex justify-center" style={{ color: "var(--gold)" }}>
                <pillar.icon size={28} strokeWidth={1.2} />
              </div>
              <p className="text-[17px] font-normal mb-2.5 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
                {pillar.name}
              </p>
              <p className="text-[12px] font-light leading-[1.7]" style={{ color: "var(--text-muted-raw)" }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
