import { Github, Linkedin, Envelope } from "react-bootstrap-icons";
import { useLanguage } from "./shared/LanguageContext.tsx";

interface ContactLinksProps {
  className?: string;
}

export default function ContactLinks({ className }: ContactLinksProps) {
  const { txt, language } = useLanguage();

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <ul className={`links flex justify-center items-center ${className}`}>
      <li>
        <button
          onClick={() =>
            window.open(`/cv/CV-Nov-2025-${language}.pdf`, "_blank")
          }
          className="cvBtn text-sm sm:text-base text-[var(--highlight-secondary)] border py-1 px-3 rounded-lg transition-all duration-250 cursor-pointer"
        >
          {txt.hero.cv}
        </button>
      </li>
      <li>
        <button
          onClick={() => handleRedirect("https://github.com/Pedroguibas")}
          className="p-2 bg-[var(--bg-tertiary)] rounded-full hover:bg-[var(--highlight-primary)] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
        >
          <Github />
        </button>
      </li>
      <li>
        <button
          onClick={() =>
            handleRedirect(
              "https://www.linkedin.com/in/pedro-bastos-4275b2243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            )
          }
          className="p-2 bg-[var(--bg-tertiary)] rounded-full hover:bg-[var(--highlight-primary)] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
        >
          <Linkedin />
        </button>
      </li>
      <li>
        <button
          onClick={() => handleRedirect("mailto:pedroguibas123@gmail.com")}
          className="p-2 bg-[var(--bg-tertiary)] rounded-full hover:bg-[var(--highlight-primary)] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
        >
          <Envelope />
        </button>
      </li>
    </ul>
  );
}
