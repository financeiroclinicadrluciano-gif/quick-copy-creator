import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, MapPin } from "lucide-react";

const Consultation = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", objetivo: "", investimento: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar uma consulta.\n\nNome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nObjetivo: ${form.objetivo}\nInvestimento: ${form.investimento}`;
    window.open(`https://wa.me/5541992790960?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="max-w-[1200px] mx-auto py-24 px-[60px] grid grid-cols-2 gap-16 items-start">
      {/* Left */}
      <div>
        <p className="flex items-center gap-3 text-[11px] font-medium tracking-[4px] uppercase mb-5" style={{ color: "var(--gold)" }}>
          <span className="w-7 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
          Atendimento
        </p>
        <h2 className="text-[clamp(32px,4vw,48px)] font-light leading-[1.15] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
          Consulta <em className="italic" style={{ color: "var(--gold-light)" }}>online</em><br />e presencial
        </h2>
        <p className="text-[14px] font-light leading-[1.9] mb-8" style={{ color: "var(--text-muted-raw)" }}>
          Solicitamos os exames de sangue antes da primeira consulta para que já possamos recomendar um{" "}
          <strong className="font-normal" style={{ color: "var(--text-main)" }}>tratamento personalizado</strong>.
        </p>

        <div className="flex flex-col gap-5">
          {[
            { icon: Monitor, title: "Consulta Online", desc: "Comodidade do atendimento online proporcionando acesso fácil, eficiente e cuidados de saúde personalizados onde quer que esteja." },
            { icon: MapPin, title: "Consulta Presencial", desc: "Entendemos a importância do contato pessoal no cuidado com a saúde. Agende sua consulta presencial em nossa clínica." }
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-5 items-start p-8 rounded transition-all group hover:translate-x-1"
              style={{
                background: "var(--surface)",
                border: "1px solid rgba(201,168,76,0.1)"
              }}>
              <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--gold)" }}>
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[20px] font-normal mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
                  {item.title}
                </p>
                <p className="text-[13px] font-light leading-[1.75]" style={{ color: "var(--text-muted-raw)" }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right - Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded p-11"
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(201,168,76,0.12)"
        }}>
        <h3 className="text-[28px] font-light mb-1.5"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--text-main)" }}>
          Agende sua <em className="italic" style={{ color: "var(--gold-light)" }}>consulta</em>
        </h3>
        <p className="text-[13px] font-light mb-8 leading-relaxed" style={{ color: "var(--text-muted-raw)" }}>
          Preencha abaixo e entraremos em contato.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Nome Completo", key: "nome", type: "text", placeholder: "Seu nome" },
            { label: "E-mail", key: "email", type: "email", placeholder: "seu@email.com" },
            { label: "Telefone", key: "telefone", type: "tel", placeholder: "(XX) 00000-0000" }
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-[11px] font-medium tracking-[1.5px] uppercase mb-2" style={{ color: "var(--text-muted-raw)" }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-4 py-3 text-[14px] font-light outline-none transition-colors rounded-sm"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  color: "var(--text-main)"
                }}
              />
            </div>
          ))}

          {[
            { label: "Qual seu objetivo?", key: "objetivo", options: ["Selecione...", "Perda de peso", "Hipertrofia", "Longevidade", "Check-up completo", "Outro"] },
            { label: "Quanto já investiu em saúde?", key: "investimento", options: ["Selecione...", "Primeira vez", "Até R$ 5.000", "R$ 5.000 - R$ 15.000", "Acima de R$ 15.000"] }
          ].map((sel) => (
            <div key={sel.key}>
              <label className="block text-[11px] font-medium tracking-[1.5px] uppercase mb-2" style={{ color: "var(--text-muted-raw)" }}>
                {sel.label}
              </label>
              <select
                value={form[sel.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [sel.key]: e.target.value })}
                className="w-full px-4 py-3 text-[14px] font-light outline-none transition-colors rounded-sm appearance-none cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  color: "var(--text-main)"
                }}>
                {sel.options.map((o) => (
                  <option key={o} value={o === "Selecione..." ? "" : o} style={{ background: "var(--navy)", color: "var(--text-main)" }}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button type="submit" className="shiny-cta-gold w-full mt-2 !py-4">
            <span>Enviar Solicitação →</span>
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Consultation;
