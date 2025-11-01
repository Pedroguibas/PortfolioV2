import white_brand from "../assets/brand/brand_full_white.png";
import black_brand from "../assets/brand/brand_full_black.png";
import { useLanguage } from "./shared/LanguageContext.tsx";
import { useTheme } from "./shared/ThemeContext.tsx";
import { Envelope, Whatsapp } from "react-bootstrap-icons";
import ContactLinks from "./ContactLinks.tsx";

interface FooterProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
}

export default function Footer({
  sectionRef,
  scrollToAbout,
  scrollToProjects,
}: FooterProps) {
  const { txt } = useLanguage();
  const { theme } = useTheme();

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <footer
      ref={sectionRef}
      className="bg-[var(--bg-secondary)] grid grid-cols-12 mt-16"
    >
      <section className="footerSection col-span-10 col-start-2 grid grid-cols-1 items-center md:grid-cols-3 py-8 border-b border-[var(--text-primary)]">
        <div className="footer-brand flex flex-col items-center mt-8 mb-4 md:mb-8">
          <img
            src={theme == "dark" ? white_brand : black_brand}
            alt="Brand"
            className="w-38 md:w-52 lg:60"
          />
        </div>
        <div className="flex flex-col justify-around items-start col-span-1 md:flex-row md:col-span-2 mt-8 md:mb-8">
          <div className="footer-links flex flex-col text-xs sm:text-sm text-[var(--text-secondary)] md:text-md md:items-center ">
            <div className="flex flex-col">
              <h2 className="text-[var(--text-primary)] font-bold text-base md:text-xl mb-4">
                Links
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                  <button onClick={scrollToAbout}>{txt.titles.about}</button>
                </li>
                <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                  <button onClick={scrollToProjects}>
                    {txt.titles.projects}
                  </button>
                </li>
                <li className="hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                  <button>{txt.titles.contactMe}</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-contacts flex flex-col mt-8 text-xs sm:text-sm text-[var(--text-secondary)] md:m-0 md:text-md md:items-center">
            <div className="flex flex-col">
              <h2 className="text-[var(--text-primary)] font-bold text-base md:text-xl mb-4">
                {txt.titles.contactMe}
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-2 items-center hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                  <Envelope className="text-lg mt-1.5" />
                  <button
                    onClick={() =>
                      handleRedirect("mailto:pedroguibas123@gmail.com")
                    }
                  >
                    pedroguibas123@gmail.com
                  </button>
                </li>
                <li className="flex items-center gap-2 hover:translate-y-[-1px] hover:text-[var(--text-primary)] transition-all duration-150">
                  <Whatsapp className="text-lg mt-0.5" />
                  <button
                    onClick={() =>
                      handleRedirect("https://wa.me/5514996160391")
                    }
                  >
                    +55 (14) 99616-0391
                  </button>
                </li>
                <li>
                  <ContactLinks className="gap-1 sm:gap-2 md:gap-4 text-base text-[var(--text-primary)] sm:text-lg md:text-xl mt-2 pt-4 border-t-1" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <aside className="col-span-10 col-start-2 flex items-center gap-1 text-[var(--text-primary)] text-sm md:text-lg py-3">
        <span>&copy;</span>
        <p>Pedro Guimarães Bastos</p>
      </aside>
    </footer>
  );
}
