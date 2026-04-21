import { useNavigate } from "react-router-dom";
import useIsMobile from "./useIsMobile";
import FadeInSection from "./FadeInSection";

const LABEL_STYLE = { fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", margin: 0 };
const BODY_STYLE = { fontSize: "20px", lineHeight: "1.5", fontWeight: 400, color: "#555" };
const TITLE_STYLE = { fontSize: "80px", fontWeight: 400, textTransform: "uppercase", margin: "0 0 60px", color: "#000", letterSpacing: "-0.02em" };
const BTN_STYLE = { fontSize: "16px", fontWeight: 400, background: "none", border: "1px solid #ccc", padding: "12px 24px", cursor: "pointer", color: "#000" };

export default function RootProject() {
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
        <h1 style={{ fontSize: titleSize, fontWeight: 400, textTransform: "uppercase", margin: "0 0 24px", color: "#000", letterSpacing: "-0.02em" }}>ROOT</h1>
        <img src="/images/root_hero.png" alt="Root hero" style={{ width: "100%", display: "block" }} />
      </section>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>About the project</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>La digitalización y la IA han puesto fin a la era de la educación finita. Actualmente, el aprendizaje ya no es un paso previo al trabajo, sino un proceso permanente y obligatorio para mantener la relevancia profesional.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Para las personas, el Lifelong Learning ha pasado de ser un concepto teórico a una estrategia de supervivencia necesaria para cerrar la brecha de habilidades en un entorno laboral híbrido y altamente exigente.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: isMobile ? "0 20px 0" : "0 40px 0" }}>
          <img src="/images/root_image1.png" alt="Root image 1" style={{ width: "100%", display: "block" }} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: isMobile ? "12px 20px 40px" : "16px 40px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
            <img src="/images/root_image2.png" alt="Root image 2" style={{ width: "100%", display: "block" }} />
            <img src="/images/root_image3.png" alt="Root image 3" style={{ width: "100%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize }}>THE PROBLEM</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>Intención vs. Gestión Real</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 32px" }}>Existe una desconexión crítica entre la alta motivación de los profesionales y su capacidad para ejecutar un aprendizaje sostenible.</p>
              {[
                { label: "Autogestión", text: "Falta de herramientas de autogestión del tiempo." },
                { label: "Soledad y autosabotaje", text: "Sentimiento de soledad y autosabotaje." },
                { label: "Oferta rígida", text: "Una oferta educativa tradicional demasiado rígida y teórica para las necesidades prácticas e inmediatas del mercado." },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: "0.25px solid #ccc", paddingTop: "20px", paddingBottom: "20px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "8px" : "32px" }}>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0, width: isMobile ? "100%" : "200px", flexShrink: 0, fontWeight: 500, color: "#000" }}>{item.label}</p>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad, backgroundColor: "#f5f5f5" }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize, color: "#000" }}>USER PERSONA</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>La Estratega y La Aprendiz Permanente</p>
            <div>
              {[
                { name: "Carmela", title: "La Estratega", desc: "Representa a quienes aprenden por necesidad laboral en situaciones de alta incertidumbre.", reto: "Necesita resultados rápidos y una red de apoyo para combatir el desamparo y la ansiedad." },
                { name: "Fiorella", title: "La Aprendiz Permanente", desc: "Representa a quienes aprenden por placer o crecimiento personal en situaciones estables.", reto: "Su mayor desafío es la constancia. Teme que su curiosidad se disipe por falta de disciplina." }
              ].map((p, i) => (
                <div key={p.name} style={{ borderTop: i === 0 ? "none" : "0.25px solid #ccc", paddingTop: "28px", paddingBottom: "28px" }}>
                  <h3 style={{ fontSize: bodySize, fontWeight: 400, margin: "0 0 4px", color: "#000" }}>{p.name} — {p.title}</h3>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>{p.desc}</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.5", color: "#888", margin: 0, fontStyle: "italic" }}>Su reto: {p.reto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: isMobile ? "12px 20px 40px" : "0 40px 80px", backgroundColor: "#fff" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
            <img src="/images/root_image4.png" alt="Root image 4" style={{ width: "100%", display: "block" }} />
            <img src="/images/root_image5.png" alt="Root image 5" style={{ width: "100%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <h2 style={{ ...TITLE_STYLE, fontSize: titleSize, lineHeight: 1 }}>THE OPPORTUNITY</h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>Personalización del Aprendizaje</p>
            <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Queremos ayudar a las personas a organizar su curiosidad para que aprender sea lo más accesible, eficiente y motivador posible. Mediante herramientas de microaprendizaje, planificación visual e Inteligencia Artificial.</p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: isMobile ? "0 20px 12px" : "0 40px 16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px" }}>
            <img src="/images/root_image6.png" alt="Root image 6" style={{ width: "100%", display: "block" }} />
            <img src="/images/root_image7.png" alt="Root image 7" style={{ width: "100%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: isMobile ? "0 20px 0" : "0 40px 0" }}>
          <div style={{ backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "30px 0" : "60px 0" }}>
            <video src="/images/root_landing.mp4" autoPlay loop muted playsInline style={{ width: isMobile ? "90%" : "80%", display: "block" }} />
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: imgPad }}>
          <img src="/images/root_image8.png" alt="Root image 8" style={{ width: "100%", display: "block" }} />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <h2 style={{ fontSize: titleSize, fontWeight: 400, textTransform: "uppercase", margin: 0, color: "#000", letterSpacing: "-0.02em", lineHeight: 1 }}>THE SOLUTION</h2>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>Nuestra propuesta consiste en crear rutas de aprendizaje personalizadas, con contenido curado, que se adaptan a tu tiempo, estructuran tu progreso y mantienen tu motivación paso a paso.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>No queremos añadir presión, sino darle sentido al esfuerzo.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Nuestra meta es transformar la ansiedad del "no llego" en calma. Queremos que el aprendizaje deje de ser una carga y vuelva a ser una motivación.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <section style={{ padding: isMobile ? "20px 20px 60px" : "40px 40px 80px" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <button onClick={() => { navigate("/marea"); window.scrollTo(0,0); }} style={BTN_STYLE}>← Preview Project</button>
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