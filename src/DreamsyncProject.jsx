import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useIsMobile from "./useIsMobile";
import FadeInSection from "./FadeInSection";

const LABEL_STYLE = { fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", margin: 0 };
const BODY_STYLE = { fontSize: "20px", lineHeight: "1.5", fontWeight: 400, color: "#555" };
const TITLE_STYLE = { fontSize: "80px", fontWeight: 400, textTransform: "uppercase", margin: "0 0 60px", color: "#000", letterSpacing: "-0.02em" };
const BTN_STYLE = { fontSize: "16px", fontWeight: 400, background: "none", border: "1px solid #ccc", padding: "12px 24px", cursor: "pointer", color: "#000" };

export default function DreamsyncProject() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
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
        <h1 style={{ fontSize: titleSize, fontWeight: 400, textTransform: "uppercase", margin: "0 0 24px", color: "#000", letterSpacing: "-0.02em" }}>DREAMSYNC</h1>
        <div style={{ position: "relative", overflow: "hidden" }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <img src="/images/dreamsync_hero.png" alt="Dreamsync hero" style={{ width: "100%", display: "block", transform: hovered ? "scale(1.03)" : "scale(1)", transition: "transform 0.5s ease" }} />
        </div>
      </section>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>About the project</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Cada noche soñamos. Creamos escenas, emociones y narrativas complejas. Pero al despertar, casi todo desaparece.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Lo que experimentamos durante horas queda reducido a fragmentos difusos: difíciles de recordar, imposibles de compartir.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Hoy, no existe una forma de registrar o explorar los sueños de manera objetiva.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: isMobile ? "0 20px 0" : "0 40px 0" }}>
          <img src="/images/dreamsync_image.png" alt="Dreamsync image" style={{ width: "100%", display: "block" }} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <img src="/images/dreamsync_4.png" alt="Dreamsync 4" style={{ width: "100%", display: "block" }} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize }}>THE PROBLEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={{ ...LABEL_STYLE, lineHeight: "18px" }}>Los sueños contienen información valiosa, pero presentan tres grandes limitaciones:</p>
            <div>
              {[
                { label: "Efímeros", text: "Se desvanecen rápidamente y no pueden ser recuperados con precisión." },
                { label: "Intransferibles", text: "No existe una forma de comunicarlos sin perder su complejidad." },
                { label: "Subjetivos", text: "Su interpretación depende completamente de cada persona." },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: "0.25px solid #ccc", paddingTop: "20px", paddingBottom: "20px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "8px" : "32px" }}>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0, width: isMobile ? "100%" : "180px", flexShrink: 0, fontWeight: 500, color: "#000" }}>{item.label}</p>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>{item.text}</p>
                </div>
              ))}
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "20px 0 0" }}>Esto limita su potencial.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <div style={{ backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "30px 0" : "60px 0" }}>
            <video src="/images/dreamsync_landing.mp4" autoPlay loop muted playsInline style={{ width: isMobile ? "90%" : "60%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad, backgroundColor: "#f5f5f5" }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize, color: "#000" }}>USER PERSONA</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={{ ...LABEL_STYLE, lineHeight: "18px" }}>DreamSync nace para dos perfiles, con un mismo interés: el mundo onírico.</p>
            <div>
              {[
                { title: "La Exploradora Creativa", desc: "Busca transformar sus sueños en algo tangible.", quote: "Mis sueños son materia prima, solo necesito una forma de traerlos al mundo." },
                { title: "El Investigador de la Mente", desc: "Busca comprender y analizar lo que sucede durante el sueño.", quote: "Entender cómo soñamos es el primer paso para entender quiénes somos." }
              ].map((p, i) => (
                <div key={p.title} style={{ borderTop: i === 0 ? "none" : "0.25px solid #ccc", paddingTop: "28px", paddingBottom: "28px" }}>
                  <h3 style={{ fontSize: bodySize, fontWeight: 400, margin: "0 0 16px", color: "#000" }}>{p.title}</h3>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>{p.desc}</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.5", color: "#888", margin: 0, fontStyle: "italic" }}>"{p.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize, lineHeight: 1 }}>THE OPPORTUNITY</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>¿Cómo diseñar una herramienta que permita explorar los sueños?</p>
            <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Existe una oportunidad en crear un sistema que traduzca la actividad cerebral en una interfaz visual interpretable.</p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
            <img src="/images/dreamsync_mockup.png" alt="Dreamsync mockup" style={{ width: "100%", display: "block" }} />
            <img src="/images/dreamsync_mockup2.png" alt="Dreamsync mockup 2" style={{ width: "100%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <h2 style={{ fontSize: titleSize, fontWeight: 400, textTransform: "uppercase", margin: 0, color: "#000", letterSpacing: "-0.02em", lineHeight: 1 }}>THE SOLUTION</h2>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>DreamSync es una plataforma que registra, decodifica y traduce la actividad cerebral durante el sueño en representaciones visuales reproducibles.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Un puente entre neurociencia, inteligencia artificial y exploración interior.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>Conclusion</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>DreamSync no busca solo mostrar sueños.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Propone una nueva forma de observar la mente humana.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <section style={{ padding: isMobile ? "20px 20px 60px" : "40px 40px 80px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={() => { navigate("/marea"); window.scrollTo(0,0); }} style={BTN_STYLE}>Next Project →</button>
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