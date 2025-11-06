import Cookies from "js-cookie";
import { useState } from "react";
import { useLanguage } from "./shared/LanguageContext.tsx";
import { useTheme } from "./shared/ThemeContext.tsx";
import { XSquare } from "react-bootstrap-icons";

export default function Cookie() {
  const [dismissed, setDismissed] = useState(false);
  const { txt, language } = useLanguage();
  const { theme } = useTheme();

  const handleAcceptClick = () => {
    Cookies.set("acceptedCookies", "accepted", { expires: 365 });
    Cookies.set("theme", theme, { expires: 30 });
    Cookies.set("language", language, { expires: 30 });
    setDismissed(true);
  };

  if (Cookies.get("accepetedCookies") == "accepted") return <></>;

  return (
    <div
      className={`fixed text-[var(--text-secondary)] ${
        dismissed ? "translate-y-[120%]" : ""
      } bottom-0 left-0 right-0 flex flex-col items-center p-4 md:bottom-1.5 md:left-1.5 md:right-auto bg-[var(--bg-secondary)] border-t-2 border-[var(--highlight-primary)] md:border-t-0 md:border-s-4 z-6 transition-transform duration-300 md:text-sm md:w-[30em] md:rounded-lg`}
    >
      <button
        onClick={() => setDismissed(true)}
        className="absolute text-lg top-2 right-2 cursor-pointer"
      >
        <XSquare />
      </button>
      <h1 className="text-2xl text-[var(--text-primary)] mt-2">
        Este site usa cookies
      </h1>
      <p className="text-justify mt-4">
        este site usa cookies para melhorar sua experiência. Clicando em
        "aceitar cookies" você estará consentindo com o uso de cookies para
        armazenar suas preferências de tema e idioma.
      </p>
      <div className="flex justify-around w-full mt-6 mb-4">
        <button
          onClick={handleAcceptClick}
          className="text-[var(--highlight-primary)] border border-[var(--highlight-primary)] rounded-lg py-2 px-4 hover:text-white hover:bg-[var(--highlight-primary)] cursor-pointer transition-colors duration-200"
        >
          Aceitar
        </button>
        <button className="border py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-[var(--text-primary)] hover:border-[var(--text-primary)] hover:text-[var(--bg-secondary)]">
          Recusar
        </button>
      </div>
    </div>
  );
}
