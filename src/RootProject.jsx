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
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Digitalization and AI have put an end to the era of finite education. Today, learning is no longer a preliminary step before work — it's a permanent and obligatory process to maintain professional relevance.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>For individuals, Lifelong Learning has evolved from a theoretical concept into a necessary survival strategy to close the skills gap in a hybrid and highly demanding work environment.</p>
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
            <p style={LABEL_STYLE}>Intention vs. Actual Management</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 32px" }}>There is a critical disconnect between professionals' high motivation and their ability to execute sustainable learning.</p>
              {[
                { label: "Self-management", text: "Lack of time self-management tools." },
                { label: "Loneliness and self-sabotage", text: "A feeling of loneliness and self-sabotage." },
                { label: "Rigid supply", text: "A traditional educational offering that is too rigid and theoretical for the immediate and practical needs of the market." },
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
            <p style={LABEL_STYLE}>The Strategist and The Lifelong Learner</p>
            <div>
              {[
                { name: "Carmela", title: "The Strategist", desc: "Represents those who learn out of professional necessity in situations of high uncertainty.", reto: "She needs quick results and a support network to combat helplessness and anxiety." },
                { name: "Fiorella", title: "The Lifelong Learner", desc: "Represents those who learn for pleasure or personal growth in stable situations.", reto: "Her biggest challenge is consistency. She fears her curiosity will fade due to lack of discipline." }
              ].map((p, i) => (
                <div key={p.name} style={{ borderTop: i === 0 ? "none" : "0.25px solid #ccc", paddingTop: "28px", paddingBottom: "28px" }}>
                  <h3 style={{ fontSize: bodySize, fontWeight: 400, margin: "0 0 4px", color: "#000" }}>{p.name} — {p.title}</h3>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>{p.desc}</p>
                  <p style={{ fontSize: "15px", lineHeight: "1.5", color: "#888", margin: 0, fontStyle: "italic" }}>Her challenge: {p.reto}</p>
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
            <p style={LABEL_STYLE}>Learning Personalization</p>
            <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>We want to help people organize their curiosity so that learning is as accessible, efficient, and motivating as possible — through microlearning tools, visual planning, and Artificial Intelligence.</p>
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
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>Our proposal is to create personalized learning paths, with curated content, that adapt to your time, structure your progress, and keep your motivation step by step.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>We don't want to add pressure, but to give meaning to the effort.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Our goal is to transform the anxiety of "I can't keep up" into calm. We want learning to stop being a burden and become a motivation again.</p>
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