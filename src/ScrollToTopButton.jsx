import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        backgroundColor: "#000",
        color: "#fff",
        border: "1px solid #555",
        padding: "12px 20px",
        fontSize: "12px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        zIndex: 999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      Back to top ↑
    </button>
  );
}