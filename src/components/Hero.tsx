import { motion } from "framer-motion";
import videoThumb from "@/assets/video-thumbnail.webp";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-[200px]" style={{
        background: "linear-gradient(to top, var(--bg-deep), transparent)",
        zIndex: 2
      }} />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-[60px] grid grid-cols-2 items-center min-h-screen gap-10">
        <div className="pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex items-center gap-3 text-[11px] font-medium tracking-[4px] uppercase mb-5"
            style={{ color: "var(--gold)" }}>
            <span className="w-7 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
            Plano DOC 365
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[clamp(40px,5vw,64px)] font-light leading-[1.08] mb-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
            Transforme sua saúde<br />
            em até <em className="italic" style={{ color: "var(--gold-light)" }}>12 meses</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="text-[20px] italic font-light mb-7"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold)" }}>
            Uma jornada completa de longevidade
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="text-[15px] font-light leading-[1.8] max-w-[440px] mb-11"
            style={{ color: "var(--text-muted-raw)" }}>
            Na Clínica Dr. Luciano Alves, nossa prioridade é promover a{" "}
            <strong className="font-normal" style={{ color: "var(--text-main)" }}>longevidade saudável e equilibrada</strong>,
            com serviços abrangentes e personalizados para cada paciente.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            href="#form"
            className="inline-flex items-center gap-3 px-10 py-4 text-[12px] font-medium tracking-[2.5px] uppercase no-underline cursor-pointer relative overflow-hidden transition-all group"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold-light)",
              background: "transparent",
              fontFamily: "'DM Sans', sans-serif"
            }}>
            <span className="absolute inset-0 bg-[rgba(201,168,76,0.08)] -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
            <span className="relative z-10 flex items-center gap-3">
              Agendar Consulta
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>
        </div>

        {/* Video Card */}
        <div className="flex items-center justify-center pt-20">
          <a href="https://youtu.be/S4pTTJH08cc" target="_blank" rel="noopener noreferrer"
            className="relative w-full max-w-[520px] rounded-md overflow-hidden cursor-pointer group"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>

            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-[1.5px] border-l-[1.5px] opacity-50 group-hover:opacity-100 group-hover:w-7 group-hover:h-7 transition-all z-[3]" style={{ borderColor: "var(--gold)" }} />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-[1.5px] border-r-[1.5px] opacity-50 group-hover:opacity-100 group-hover:w-7 group-hover:h-7 transition-all z-[3]" style={{ borderColor: "var(--gold)" }} />

            <img src={videoThumb} alt="Vídeo de apresentação" className="w-full aspect-video object-cover block transition-all duration-500 brightness-[0.82] group-hover:scale-[1.03] group-hover:brightness-[0.65]" />

            {/* Overlay gradient */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(7,13,31,0.88) 0%, rgba(7,13,31,0.2) 50%, transparent 100%)"
            }} />

            {/* Gold border */}
            <div className="absolute inset-0 rounded-md pointer-events-none transition-all group-hover:border-[rgba(201,168,76,0.6)]"
              style={{ border: "1px solid rgba(201,168,76,0.3)" }} />

            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-[1.08]"
              style={{
                border: "1.5px solid rgba(201,168,76,0.7)",
                background: "rgba(7,13,31,0.5)",
                backdropFilter: "blur(6px)"
              }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 5L15 10L7 15V5Z" fill="#c9a84c"/>
              </svg>
            </div>

            {/* Badge */}
            <div className="absolute bottom-5 left-6 right-6 flex flex-col gap-1 z-[2]">
              <span className="text-[10px] font-medium tracking-[2.5px] uppercase" style={{ color: "var(--gold)" }}>
                Assista a apresentação
              </span>
              <span className="text-[16px] font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
                Plano DOC 365 — Dr. Luciano
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
