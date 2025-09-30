import white_brand from "../assets/logo/logo_full_white.png";
import black_brand from "../assets/logo/logo_full_black.png";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const root = document.querySelector("#root")!;
      setIsDark(root.classList.contains("dark") || false);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    const root = document.querySelector("#root")!;
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-[var(--bg-secondary)] grid grid-cols-12">
      <section className="footerSection col-span-10 col-start-2 grid grid-cols-3 my-8">
        <div className="footer-brand flex flex-col items-center">
          <img
            src={isDark ? white_brand : black_brand}
            alt="Brand"
            className="w-52"
          />
        </div>
        <div className="footer-links flex flex-col items-center">
            <h2 className="text-[var(--text-primary)]">Links rápidos</h2>
        </div>
        <div className="footer-contacts flex flex-col items-center">
            <h2 className="text-[var(--text-primary)]">Contato</h2>
        </div>
      </section>
    </footer>
  );
}
