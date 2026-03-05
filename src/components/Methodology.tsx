import { motion } from "framer-motion";

const timelineItems = [
  {
    num: "1",
    label: "Primeiros 3 meses",
    title: "Perda de Peso Rápida e Segura",
    desc: "Redução do aspecto, controle do carboidrato e tratamento de inflamações com medicamentos modernos e personalizados."
  },
  {
    num: "2",
    label: "Próximos 3 meses",
    title: "Melhoria no Metabolismo",
    desc: "Preparação do corpo para conquistar resultados e melhorar o desempenho esportivo."
  },
  {
    num: "3",
    label: "Próximos 4 meses",
    title: "Hipertrofia Muscular",
    desc: "Foco em hipertrofia muscular, condicionamento físico e desempenho esportivo."
  },
  {
    num: "4",
    label: "",
    title: "Manutenção dos Resultados",
    desc: "Alta médica com exames monitorados a cada 6 meses, consolidação e estilo saudável definitivamente."
  }
];

const Methodology = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-[60px] grid grid-cols-2 gap-20 items-center">
      {/* Left - Text */}
      <div>
        <p className="flex items-center gap-3 text-[11px] font-medium tracking-[4px] uppercase mb-5" style={{ color: "var(--gold)" }}>
          <span className="w-7 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
          A Metodologia
        </p>
        <h2 className="text-[clamp(32px,4vw,48px)] font-light leading-[1.15] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
          Bases sólidas para uma<br />vida <em className="italic" style={{ color: "var(--gold-light)" }}>longa e plena</em>
        </h2>
        <div className="text-[14px] font-light leading-[1.9] space-y-4" style={{ color: "var(--text-muted-raw)" }}>
          <p>
            Nossa abordagem é única e focada em criar <strong className="font-normal" style={{ color: "var(--text-main)" }}>bases sólidas para uma vida longa e plena</strong>, indo além de simples soluções de problemas pontuais.
          </p>
          <p>
            Liderada pelo Dr. Luciano e uma equipe especializada, nossa clínica oferece um programa de longevidade que inclui desde a <strong className="font-normal" style={{ color: "var(--text-main)" }}>otimização da saúde física e mental</strong>, até práticas nutricionais e estratégias de prevenção.
          </p>
          <p>
            Nosso objetivo é ajudar você a <strong className="font-normal" style={{ color: "var(--text-main)" }}>manter a vitalidade e o bem-estar</strong> ao longo dos anos, reduzindo o risco de doenças e promovendo uma vida mais ativa e produtiva.
          </p>
        </div>
      </div>

      {/* Right - Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative rounded p-10"
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(201,168,76,0.12)"
        }}>
        <p className="text-center text-[13px] font-normal tracking-[3px] uppercase mb-9"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)" }}>
          As 4 etapas do plano
        </p>

        <div className="flex flex-col relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--gold), rgba(201,168,76,0.1))" }} />

          {timelineItems.map((item, i) => (
            <div key={i} className={`flex gap-5 relative ${i < timelineItems.length - 1 ? "pb-7" : ""}`}>
              <div className="w-[38px] h-[38px] flex-shrink-0 rounded-full flex items-center justify-center relative z-[1] text-[18px] font-semibold leading-none text-center"
                style={{
                  border: "1.5px solid var(--gold)",
                  background: "var(--bg-deep)",
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "var(--gold-light)"
                }}>
                {item.num}
              </div>
              <div className="pt-1.5 flex-1">
                {item.label && (
                  <p className="text-[10px] font-medium tracking-[2px] uppercase mb-1" style={{ color: "var(--gold)" }}>
                    {item.label}
                  </p>
                )}
                <p className="text-[17px] font-normal mb-1.5 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
                  {item.title}
                </p>
                <p className="text-[12.5px] font-light leading-[1.7]" style={{ color: "var(--text-muted-raw)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Methodology;
