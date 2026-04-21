import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useIsMobile from "./useIsMobile";

const NAV_LINKS = ["WORK", "SERVICES", "ABOUT ME", "CONTACT"];

const PROJECTS = [
  { id: 1, label: "DREAMSYNC", cover: "/images/dreamsync_cover.png", path: "/dreamsync" },
  { id: 2, label: "MAREA APP", cover: "/images/marea_cover.png", path: "/marea" },
  { id: 3, label: "ROOT", cover: "/images/root_cover.png", path: "/root" },
];

const SERVICES = [
  { number: "1.", title: "PRODUCT DESIGN", description: "Diseño experiencias digitales desde la idea hasta la solución final. Trabajo enfocándome en el usuario, la claridad y la funcionalidad.", tags: ["UX/UI", "FLUJOS", "WIREFRAMES", "PROTOTIPOS"] },
  { number: "2.", title: "UX & RESEARCH", description: "Analizo problemas, comportamientos y necesidades reales para tomar decisiones de diseño con sentido.", tags: ["RESEARCH", "BENCHMARK", "DEFINICIÓN DE PROBLEMAS", "INSIGHTS"] },
  { number: "3.", title: "VISUAL & BRANDING", description: "Desarrollo sistemas visuales y piezas digitales que acompañan la experiencia y refuerzan la identidad.", tags: ["BRANDING", "DISEÑO VISUAL", "ASSETS DIGITALES"] },
  { number: "4.", title: "ESTRATEGIA & CONCEPTO", description: "Defino el enfoque detrás de cada proyecto: qué problema se está resolviendo y por qué esa es la mejor solución.", tags: ["CONCEPTO", "ESTRATEGIA DE PRODUCTO", "NARRATIVA"] },
];

const ABOUT_IMAGES = [
  { src: "/images/work_image.jpg", rotate: -6, x: 20, y: 0 },
  { src: "/images/argentina_image.jpg", rotate: 4, x: 0, y: 20 },
  { src: "/images/empandas_image.jpg", rotate: -3, x: 30, y: 10 },
  { src: "/images/barcelona_image.jpg", rotate: 6, x: 10, y: 30 },
  { src: "/images/me_image.jpg", rotate: -4, x: 20, y: 15 },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function SplitFlapWord({ word, delay = 0 }) {
  const [displayed, setDisplayed] = useState(Array(word.length).fill(" "));
  useEffect(() => {
    const timers = [];
    word.split("").forEach((targetChar, i) => {
      if (targetChar === " ") {
        timers.push(setTimeout(() => { setDisplayed(prev => { const n = [...prev]; n[i] = " "; return n; }); }, delay + i * 120));
        return;
      }
      const totalTicks = 10, startTime = delay + i * 120, interval = 80;
      for (let t = 0; t < totalTicks; t++) {
        const tt = t;
        timers.push(setTimeout(() => { setDisplayed(prev => { const n = [...prev]; n[i] = CHARS[Math.floor(Math.random() * CHARS.length)]; return n; }); }, startTime + tt * interval));
      }
      timers.push(setTimeout(() => { setDisplayed(prev => { const n = [...prev]; n[i] = targetChar; return n; }); }, startTime + totalTicks * interval));
    });
    return () => timers.forEach(clearTimeout);
  }, [word, delay]);
  return <span>{displayed.join("")}</span>;
}

function StackedImages() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || started.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        started.current = true;
        ABOUT_IMAGES.forEach((_, i) => {
          setTimeout(() => { setVisibleCount(i + 1); }, i * 800);
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", width: "380px", height: "380px", pointerEvents: "none" }}>
      {ABOUT_IMAGES.map((img, i) => (
        <img key={i} src={img.src} alt="" onError={e => e.currentTarget.style.display = "none"} style={{
          position: "absolute", width: "300px", height: "300px", objectFit: "cover",
          transform: `rotate(${img.rotate}deg) translate(${img.x}px, ${img.y}px)`,
          opacity: i < visibleCount ? 1 : 0, transition: "opacity 0.8s ease",
          zIndex: i + 1, boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        }} />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isMobile = useIsMobile();

  const scroll = (dir) => {
    const next = current + dir;
    if (next < 0 || next >= PROJECTS.length) return;
    setCurrent(next);
    const cards = scrollRef.current?.children;
    if (cards?.[next]) cards[next].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  return (
    <div style={{ fontFamily: "'Helvetica', 'Helvetica Neue', Arial, sans-serif", color: "#fff", backgroundColor: "#000", minHeight: "100vh", overflowX: "hidden", width: "100%" }}>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "16px 20px" : "20px 40px", position: "sticky", top: 0, zIndex: 100, backgroundColor: "#000" }}>
        <span style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400 }}>MORA CELAYA</span>
        {!isMobile && (
          <div style={{ display: "flex", gap: "32px" }}>
            {NAV_LINKS.map((l) => (<a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} style={{ fontSize: "20px", fontWeight: 400, color: "#fff", textDecoration: "none" }}>{l}</a>))}
          </div>
        )}
      </nav>

      <section style={{ padding: isMobile ? "80px 20px 40px" : "250px 40px 15vh", backgroundColor: "#000", width: "100%", boxSizing: "border-box" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#aaa", marginBottom: "24px", textTransform: "uppercase" }}>Design that works in the real world.</p>
        {isMobile ? (
  <div style={{ fontSize: "clamp(20px, 6vw, 28px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}><SplitFlapWord word="PRODUCT DESIGN." delay={0} /><SplitFlapWord word="CLARITY." delay={300} /></div>
    <div style={{ display: "flex", justifyContent: "space-between" }}><SplitFlapWord word="BRANDING." delay={600} /><SplitFlapWord word="VISUAL DESIGN." delay={900} /></div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ paddingLeft: "8%" }}><SplitFlapWord word="SIMPLICITY." delay={1200} /></span>
      <span><SplitFlapWord word="UX." delay={1500} /></span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}><SplitFlapWord word="FUNCTION." delay={1800} /><SplitFlapWord word="RESEARCH." delay={2100} /></div>
  </div>
) : (
          <div style={{ fontSize: "80px", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><SplitFlapWord word="PRODUCT DESIGN." delay={0} /><SplitFlapWord word="CLARITY." delay={300} /></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><SplitFlapWord word="BRANDING." delay={600} /><SplitFlapWord word="VISUAL DESIGN." delay={900} /></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ paddingLeft: "200px" }}><SplitFlapWord word="SIMPLICITY." delay={1200} /></span><span style={{ marginRight: "130px" }}><SplitFlapWord word="UX." delay={1500} /></span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><SplitFlapWord word="FUNCTION." delay={1800} /><SplitFlapWord word="RESEARCH." delay={2100} /></div>
          </div>
        )}
      </section>

      <section id="about-me" style={{ backgroundColor: "#fff", color: "#000", position: "relative", padding: isMobile ? "60px 20px" : "160px 0 160px", overflow: "hidden", boxSizing: "border-box", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
          <div style={{ width: isMobile ? "100%" : "370px", flexShrink: 0, paddingLeft: isMobile ? "0" : "40px", paddingRight: isMobile ? "0" : "40px", marginBottom: isMobile ? "24px" : "0" }}>
            <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, textTransform: "uppercase", margin: 0, color: "#000" }}>About Me</h2>
          </div>
          <div style={{ flex: 1, minWidth: 0, paddingRight: isMobile ? "0" : "420px" }}>
            <p style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400, lineHeight: "1.5", margin: "0 0 20px", color: "#000" }}>Soy Mora, diseñadora gráfica y de producto, de Buenos Aires, Argentina.</p>
            <p style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400, lineHeight: "1.5", margin: "0 0 20px", color: "#000" }}>Siempre me interesó mirar lo cotidiano: cómo las personas se organizan, cómo resuelven cosas simples y qué pasa en esas pequeñas frustraciones del día a día que muchas veces pasan desapercibidas.</p>
            <p style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400, lineHeight: "1.5", margin: "0 0 20px", color: "#000" }}>Ahí es donde encuentro sentido en el diseño. Me interesa pensar soluciones que no solo funcionen a nivel visual, sino que realmente sean útiles, claras y hagan la vida un poco más simple.</p>
            <p style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400, lineHeight: "1.5", margin: 0, color: "#000" }}>Busco seguir creciendo en proyectos donde el diseño tenga un impacto real y cercano, y donde pueda aportar no solo desde lo estético, sino también desde la forma de pensar y resolver problemas.</p>
          </div>
        </div>
        {!isMobile && <StackedImages />}
      </section>

      <section id="work" style={{ backgroundColor: "#000", display: "flex", flexDirection: isMobile ? "column" : "row", paddingTop: isMobile ? "60px" : "130px", paddingBottom: isMobile ? "60px" : "130px", boxSizing: "border-box", width: "100%" }}>
        <div style={{ width: isMobile ? "100%" : "370px", flexShrink: 0, paddingLeft: isMobile ? "20px" : "40px", paddingRight: isMobile ? "20px" : "40px", display: "flex", flexDirection: isMobile ? "row" : "column", justifyContent: "space-between", alignItems: isMobile ? "center" : "flex-start", position: "relative", marginBottom: isMobile ? "24px" : "0", boxSizing: "border-box" }}>
          {!isMobile && <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "0.25px", backgroundColor: "#555" }} />}
          <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, textTransform: "uppercase", margin: 0 }}>Work</h2>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => scroll(-1)} disabled={current === 0} style={{ width: "64px", height: "36px", border: "1.5px solid", borderRadius: "999px", backgroundColor: "transparent", color: current === 0 ? "#444" : "#fff", borderColor: current === 0 ? "#444" : "#fff", cursor: current === 0 ? "default" : "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
            <button onClick={() => scroll(1)} disabled={current === PROJECTS.length - 1} style={{ width: "64px", height: "36px", border: "1.5px solid", borderRadius: "999px", backgroundColor: "transparent", color: current === PROJECTS.length - 1 ? "#444" : "#fff", borderColor: current === PROJECTS.length - 1 ? "#444" : "#fff", cursor: current === PROJECTS.length - 1 ? "default" : "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0, overflow: "hidden", paddingLeft: isMobile ? "20px" : "40px" }}>
          <div ref={scrollRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
            style={{ display: "flex", gap: "12px", overflowX: "auto", scrollSnapType: "x mandatory", cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none", userSelect: "none" }}>
            {PROJECTS.map((p) => (
              <div key={p.id} onClick={() => { if (!isDragging.current && p.path) { navigate(p.path); window.scrollTo(0,0); } }} style={{ flexShrink: 0, scrollSnapAlign: "start", cursor: p.path ? "pointer" : "default" }}>
                <div style={{ width: isMobile ? "240px" : "380px", height: isMobile ? "260px" : "400px", overflow: "hidden" }}>
                  <img src={p.cover} alt={p.label} draggable="false"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    onMouseDown={e => e.currentTarget.style.transform = "scale(0.98)"}
                    onMouseUp={e => e.currentTarget.style.transform = "scale(1.03)"}
                  />
                </div>
                <p style={{ fontSize: "12px", color: "#aaa", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", margin: "10px 0 0" }}>{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={{ backgroundColor: "#fff", color: "#000", display: "flex", flexDirection: isMobile ? "column" : "row", paddingTop: isMobile ? "60px" : "130px", paddingBottom: isMobile ? "60px" : "130px", boxSizing: "border-box", width: "100%" }}>
        <div style={{ width: isMobile ? "100%" : "370px", flexShrink: 0, paddingLeft: isMobile ? "20px" : "40px", paddingRight: isMobile ? "20px" : "40px", position: "relative", marginBottom: isMobile ? "32px" : "0", boxSizing: "border-box" }}>
          {!isMobile && <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "0.25px", backgroundColor: "#ccc" }} />}
          <h2 style={{ fontSize: isMobile ? "32px" : "40px", fontWeight: 400, textTransform: "uppercase", margin: 0 }}>Services</h2>
        </div>
        <div style={{ flex: 1, minWidth: 0, paddingRight: isMobile ? "20px" : "80px", paddingLeft: isMobile ? "20px" : "0", boxSizing: "border-box" }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ padding: isMobile ? "24px 0" : "40px 0 40px 40px" }}>
              {i !== 0 && <div style={{ height: "0.25px", backgroundColor: "#ccc", marginBottom: isMobile ? "24px" : "40px" }} />}
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "12px" : "40px" }}>
                <p style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 400, lineHeight: "1.4", margin: 0, textTransform: "uppercase", width: isMobile ? "100%" : "200px", flexShrink: 0 }}>{s.number} {s.title}</p>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: isMobile ? "15px" : "20px", lineHeight: "1.5", margin: "0 0 12px", color: "#111", fontWeight: 400 }}>{s.description}</p>
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {s.tags.map((t) => <span key={t} style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#8F8A8A", textTransform: "uppercase" }}>{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ backgroundColor: "#000", color: "#fff", paddingTop: "80px", paddingBottom: "40px", paddingLeft: isMobile ? "20px" : "40px", paddingRight: isMobile ? "20px" : "40px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
          <a href="mailto:moracelaya@gmail.com" style={{ fontSize: isMobile ? "36px" : "80px", fontWeight: 400, letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 1, margin: 0, color: "#fff", textDecoration: "none" }}>LET'S TALK.</a>
          <svg width={isMobile ? "36" : "80"} height={isMobile ? "36" : "80"} viewBox="0 0 80 80" fill="none" style={{ marginBottom: "4px", flexShrink: 0 }}>
            <line x1="8" y1="8" x2="72" y2="72" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <polyline points="30,72 72,72 72,30" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ paddingTop: "24px", display: "flex", gap: "24px" }}>
          {[
            { label: "BEHANCE", href: "https://www.behance.net/moracelaya" },
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/moracelaya/" },
            { label: "CV", href: "#" },
          ].map((l) => (<a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{ fontSize: "10px", fontWeight: 400, color: "#8F8A8A", textDecoration: "none", letterSpacing: "0.1em" }}>{l.label}</a>))}
        </div>
      </section>
    </div>
  );
}