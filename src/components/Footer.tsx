import white_brand from "../assets/brand/brand_full_white.png";
import black_brand from "../assets/brand/brand_full_black.png";
import "../assets/css/footer.css";
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
      <section className="footerSection col-span-10 col-start-2 grid grid-cols-1 items-center md:grid-cols-3 my-8">
        <div className="footer-brand flex flex-col items-center mt-8 mb-4 md:my-8">
          <img
            src={isDark ? white_brand : black_brand}
            alt="Brand"
            className="w-38 md:w-52 lg:60"
          />
        </div>
        <div className="footer-links flex flex-col text-sm text-[var(--text-secondary)] md:text-md md:items-center my-8 md:my-8">
          <div className="flex flex-col">
            <h2 className="text-[var(--text-primary)] font-bold text-md md:text-xl mb-4">
              Links rápidos
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contacts flex flex-col text-sm text-[var(--text-secondary)] md:text-md md:items-center my-4 md:my-8">
          <div className="flex flex-col">
            <h2 className="text-[var(--text-primary)] font-bold md:text-xl mb-4">
              Contato
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
              <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                <a href="#">link</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
