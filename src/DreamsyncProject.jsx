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
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>Every night we dream. We create scenes, emotions, and complex narratives. But upon waking, almost everything disappears.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 20px" }}>What we experience for hours is reduced to vague fragments: difficult to remember, impossible to share.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>Today, there is no objective way to record or explore dreams.</p>
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
            <p style={{ ...LABEL_STYLE, lineHeight: "18px" }}>Dreams contain valuable information, but they present three major limitations:</p>
            <div>
              {[
                { label: "Ephemeral", text: "They fade quickly and cannot be retrieved with precision." },
                { label: "Untransferable", text: "There is no way to communicate them without losing their complexity." },
                { label: "Subjective", text: "Their interpretation depends entirely on each person." },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: "0.25px solid #ccc", paddingTop: "20px", paddingBottom: "20px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "8px" : "32px" }}>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0, width: isMobile ? "100%" : "180px", flexShrink: 0, fontWeight: 500, color: "#000" }}>{item.label}</p>
                  <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>{item.text}</p>
                </div>
              ))}
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "20px 0 0" }}>This limits their potential.</p>
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
            <p style={{ ...LABEL_STYLE, lineHeight: "18px" }}>DreamSync is built for two profiles, sharing one common interest: the world of dreams.</p>
            <div>
              {[
                { title: "The Creative Explorer", desc: "Seeks to transform her dreams into something tangible.", quote: "My dreams are raw material, I just need a way to bring them into the world." },
                { title: "The Mind Researcher", desc: "Seeks to understand and analyze what happens during sleep.", quote: "Understanding how we dream is the first step to understanding who we are." }
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
            <p style={LABEL_STYLE}>How do we design a tool that allows dreams to be explored?</p>
            <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>There is an opportunity to create a system that translates brain activity into an interpretable visual interface.</p>
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
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>DreamSync is a platform that records, decodes, and translates brain activity during sleep into reproducible visual representations.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>A bridge between neuroscience, artificial intelligence, and inner exploration.</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section style={{ padding: sectionPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "24px" }}>
            <p style={LABEL_STYLE}>Conclusion</p>
            <div>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: "0 0 16px" }}>DreamSync doesn't just aim to show dreams.</p>
              <p style={{ ...BODY_STYLE, fontSize: bodySize, margin: 0 }}>It proposes a new way of observing the human mind.</p>
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