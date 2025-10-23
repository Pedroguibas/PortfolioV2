import { useState, useEffect } from "react";
import { ArrowUpShort } from "react-bootstrap-icons";
import { useLanguage } from "./shared/LanguageContext.tsx";
import { useScrollDirection } from "./shared/ScrollDirectionContext.tsx";
import "../assets/css/backToTopButton.css";

export default function BackToTopButton() {
  const [active, setActive] = useState(false);

  const { lastScrollDirection, currentScrollPosition } = useScrollDirection();

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(
    () =>
      setActive(
        currentScrollPosition > 250 && lastScrollDirection == "up"
          ? true
          : false
      ),
    [lastScrollDirection, currentScrollPosition]
  );

  const { txt } = useLanguage();

  return (
    <button
      className={`backToTopButton fixed flex justify-center items-center w-fit p-1 md:px-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] ${
        active ? "bottom-12" : "bottom-[-3rem]"
      } left-1/2 right-1/2 translate-x-[-50%] z-5 hover:border hover:border-[var(--text-primary)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] transition-all duration-200 cursor-pointer`}
      onClick={handleClick}
    >
      <ArrowUpShort className="text-2xl" />
      <span className="backToTopButtonText text-sm w-fit whitespace-nowrap pr-1">
        {txt.backToTopBtnText}
      </span>
    </button>
  );
}
