import { useState } from "react";
import { ArrowUpShort } from "react-bootstrap-icons";
import { useLanguage } from "./shared/LanguageContext.tsx";
import "../assets/css/backToTopButton.css";

export default function BackToTopButton() {
  const [active, setActive] = useState(false);

  const { txt } = useLanguage();

  return (
    <button
      className={`backToTopButton fixed flex justify-center items-center w-fit p-1 md:px-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] ${
        active ? "bottom-12" : "bottom-[-3rem]"
      } left-1/2 right-1/2 translate-x-[-50%] z-5`}
    >
      <ArrowUpShort className="text-2xl" />
      <span className="backToTopButtonText text-sm w-fit whitespace-nowrap pr-1">
        {txt.backToTopBtnText}
      </span>
    </button>
  );
}
