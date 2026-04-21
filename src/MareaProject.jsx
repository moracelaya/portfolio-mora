import { useNavigate } from "react-router-dom";
import useIsMobile from "./useIsMobile";
import FadeInSection from "./FadeInSection";

const LABEL_STYLE = { fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", margin: 0 };
const BODY_STYLE = { fontSize: "20px", lineHeight: "1.5", fontWeight: 400, color: "#555" };
const TITLE_STYLE = { fontSize: "80px", fontWeight: 400, textTransform: "uppercase", margin: "0 0 60px", color: "#000", letterSpacing: "-0.02em" };
const BTN_STYLE = { fontSize: "16px", fontWeight: 400, background: "none", border: "1px solid #ccc", padding: "12px 24px", cursor: "pointer", color: "#000" };

export default function MareaProject() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const titleSize = isMobile ? "clamp(36px, 10vw, 60px)" : "80px";
  const bodySize = isMobile ? "16px" : "20px";
  const sectionPad = isMobile ? "40px 20px" : "80px 40px";
  const imgPad = isMobile ? "0 20px 40px" : "0 40px 80px";

  return (
    <div style={{ fontFamily: "'Helvetica', 'Helvetica Neue', Arial, sans-serif", backgroundColor: "#fff", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "16px 20px" : "20px 40px", backgroundColor: "#fff" }}>
        <button onClick={() => { navigate("/"); window.scrollTo(0,0); }} style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400, background: "none", border: "none", cursor: "pointer", padding: 0, color: "#000" }}>MORA CELAYA</button>
        {!isMobile && (
          <div style={{ display: "flex", gap: "32px" }}>
            {["WORK", "SERVICES", "ABOUT ME", "CONTACT"].map((l) => (<button key={l} onClick={() => { navigate("/"); window.scrollTo(0,0); }} style={{ fontSize: "20px", fontWeight: 400, background: "none", border: "none", cursor: "pointer", color: "#000" }}>{l}</button>))}
          </div>
        )}
      </nav>

      <section style={{ padding: isMobile ? "40px 20px 0" : "60px 40px 0" }}>
        <h1 style={{ fontSize: titleSize, fontWeight: 400, textTransform: "uppercase", margin: "0 0 24px", color: "#000", letterSpacing: "-0.02em" }}>MAREA</h1>
        <img src="/images/marea_hero.png" alt="Marea hero" style={{ width: "100%", display: "block" }} />
      </section>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>About the project</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Marea es una aplicación que propone una nueva forma de organizar el día: en lugar de basarse únicamente en el tiempo disponible, introduce una variable clave que suele ignorarse: la energía.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Si los usuarios pueden registrar fácilmente su nivel de energía y reciben sugerencias adaptadas, podrán planificar de forma más realista y reducir la frustración asociada a la productividad.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Marea busca alinear lo que hacemos con cómo nos sentimos.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <img src="/images/marea_imagen2.png" alt="Marea imagen" style={{ width: "100%", display: "block" }} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize }}>THE PROBLEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={{ ...LABEL_STYLE, lineHeight: "18px" }}>Planificar sin considerar la energía genera un desajuste constante.</p>
            <div>
              {[
                { label: "Expectativas irreales", text: "Se planifican tareas sin considerar el estado real del día." },
                { label: "Sensación de improductividad", text: "No cumplir con lo planificado se percibe como fracaso." },
                { label: "Cansancio y frustración", text: "Se fuerza el rendimiento incluso cuando no hay recursos energéticos." },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: "0.25px solid #ccc", paddingTop: "20px", paddingBottom: "20px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "8px" : "32px" }}>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0, width: isMobile ? "100%" : "220px", flexShrink: 0, fontWeight: 500, color: "#000" }}>{item.label}</p>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <img src="/images/marea_mockup.png" alt="Marea mockup" style={{ width: "100%", display: "block" }} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
            <img src="/images/marea_mockup2.png" alt="Marea mockup 2" style={{ width: "100%", display: "block" }} />
            <img src="/images/marea_mockup4.png" alt="Marea mockup 4" style={{ width: "100%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad, backgroundColor: "#f5f5f5" }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize, color: "#000" }}>USER PERSONA</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={{ ...LABEL_STYLE, lineHeight: "18px" }}>Marea está pensada para personas con alta autoexigencia y rutinas estructuradas.</p>
            <div style={{ paddingBottom: "28px" }}>
              <h3 style={{ fontSize: bodySize, fontWeight: 400, margin: "0 0 16px", color: "#000" }}>El profesional digital / creativo</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Trabaja con tareas que requieren foco mental","Tiene agendas cargadas y objetivos exigentes","Siente frustración cuando no rinde como espera","Busca formas más sostenibles de organizarse"].map((t) => (
                  <p key={t} style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize, lineHeight: 1 }}>THE OPPORTUNITY</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>Conectar dos mundos que hoy están separados.</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Muchas aplicaciones permiten registrar estados de ánimo o energía. Pero pocas ayudan a tomar decisiones a partir de esa información.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Existe una oportunidad en conectar cómo me siento con qué tengo que hacer.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <div style={{ backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "30px 0" : "60px 0" }}>
            <video src="/images/marea_landing.mp4" autoPlay loop muted playsInline style={{ width: isMobile ? "90%" : "60%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <h2 style={{ fontSize: titleSize, fontWeight: 400, textTransform: "uppercase", margin: 0, color: "#000", letterSpacing: "-0.02em", lineHeight: 1 }}>THE SOLUTION</h2>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>Marea es una app que ayuda a organizar la agenda en función de la energía real del usuario.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>No se trata de hacer más, sino de hacer mejor.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>La app permite registrar el estado energético y adaptar las tareas para lograr una planificación más realista y sostenible.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>Conclusion</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>Marea no busca optimizar el tiempo.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Busca redefinir la productividad desde un lugar más humano.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <section style={{ padding: isMobile ? "20px 20px 60px" : "40px 40px 80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => { navigate("/dreamsync"); window.scrollTo(0,0); }} style={BTN_STYLE}>← Preview Project</button>
          <button onClick={() => { navigate("/root"); window.scrollTo(0,0); }} style={BTN_STYLE}>Next Project →</button>
        </div>
      </section>

      <section style={{ backgroundColor: "#000", color: "#fff", paddingTop: "80px", paddingBottom: "40px", paddingLeft: isMobile ? "20px" : "40px", paddingRight: isMobile ? "20px" : "40px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
          <a href="mailto:moracelaya@gmail.com" style={{ fontSize: isMobile ? "36px" : "80px", fontWeight: 400, letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1, margin: 0, color: "#fff", textDecoration: "none" }}>LET'S TALK.</a>
          <svg width={isMobile ? "36" : "80"} height={isMobile ? "36" : "80"} viewBox="0 0 80 80" fill="none" style={{ marginBottom: "4px", flexShrink: 0 }}>
            <line x1="8" y1="8" x2="72" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <polyline points="30,72 72,72 72,30" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ paddingTop: "24px", display: "flex", gap: "24px" }}>
          {[{ label: "BEHANCE", href: "https://www.behance.net/moracelaya" }, { label: "LINKEDIN", href: "https://www.linkedin.com/in/moracelaya/" }, { label: "CV", href: "#" }].map((l) => (<a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ fontSize: "10px", fontWeight: 400, color: "#8F8A8A", textDecoration: "none", letterSpacing: "0.1em" }}>{l.label}</a>))}
        </div>
      </section>
    </div>
  );
}