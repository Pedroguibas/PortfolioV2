import pfp from "../assets/profile-pic.jpeg";
import { Github, Linkedin } from "react-bootstrap-icons";
import "../assets/css/hero.css";
import { useLanguage } from "./shared/LanguageContext";

export default function Hero() {
  const { txt } = useLanguage();

  const handleRedirect = (ref: string) => {
    window.location.href = ref;
  };

  return (
    <section className="heroSection grid grid-cols-12">
      <div className="col-span-10 col-start-2 grid grid-cols-1 gap-32 md:gap-0 md:grid-cols-2 justify-center text-[var(--text-primary)] py-20 md:py-28">
        <div className="profileInfo content-center text-sm md:text-base lg:text-2xl lg:ms-16">
          <p className="greeting">
            {txt.hero.greeting}{" "}
            <span className="name profileHighlight text-[var(--highlight-primary)]">
              Pedro Bastos,
            </span>
          </p>
          <p className="occupation profileHighlight text-[var(--highlight-secondary)] mt-1">
            {txt.hero.occupation}
          </p>
          <p className="introduction text-sm">{txt.hero.introduction}</p>
        </div>
        <div className="profileImageDiv flex justify-center md:justify-end items-center">
          <div className="profileImage rounded-full overflow-hidden lg:me-16">
            <img src={pfp} alt="Profile picture" className="w-64" />
          </div>
        </div>
        <div className="links md:col-span-2 flex justify-center gap-4 md:mt-20 text-xl ">
          <button className="text-[var(--highlight-secondary)] border py-1 px-3 rounded-full hover:text-[var(--bg-primary)] hover:bg-[var(--highlight-secondary)] transition-colors duration-250 cursor-pointer">
            {txt.hero.cv}
          </button>
          <button
            onClick={() => handleRedirect("https://github.com/Pedroguibas")}
            className="p-2 bg-[var(--bg-secondary)] rounded-full hover:bg-[var(--highlight-primary)] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
          >
            <Github />
          </button>
          <button
            onClick={() =>
              handleRedirect(
                "https://www.linkedin.com/in/pedro-bastos-4275b2243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              )
            }
            className="p-2 bg-[var(--bg-secondary)] rounded-full hover:bg-[var(--highlight-primary)] hover:translate-y-[-2px] transition-all duration-200 cursor-pointer"
          >
            <Linkedin />
          </button>
        </div>
      </div>
    </section>
  );
}
