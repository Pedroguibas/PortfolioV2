import pfp from "../assets/profile-pic.jpeg";
import "../assets/css/hero.css";
import { useLanguage } from "./shared/LanguageContext.tsx";
import ContactLinks from "./ContactLinks.tsx";

export default function Hero() {
  const { txt } = useLanguage();

  return (
    <section className="heroSection scroll-in grid grid-cols-12">
      <div className="col-span-10 col-start-2 grid grid-cols-1 gap-32 md:gap-0 md:grid-cols-2 justify-center text-[var(--text-primary)] pt-20 md:pt-28">
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
          <p className="text-[var(--text-secondary)] introduction text-sm">
            {txt.hero.introduction}
          </p>
        </div>
        <div className="profileImageDiv flex justify-center md:justify-end items-center">
          <div className="profileImage rounded-full overflow-hidden lg:me-16">
            <img src={pfp} alt="Profile picture" className="w-64" />
          </div>
        </div>
        <ContactLinks className="gap-3 sm:gap-4 text-lg md:text-xl md:col-span-2  mb-20 md:mt-20" />
      </div>
    </section>
  );
}
