import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./shared/LanguageContext.tsx";
import "../assets/css/tech.css";
import techJson from "../assets/data/technologies.json";

const icons = import.meta.glob("../assets/technologies/*.svg", {
  eager: true,
  query: "?react",
});

interface TechIconsProps {
  icon: string;
}

export const TechIcon: React.FC<TechIconsProps> = ({ icon }) => {
  const IconModule = icons[`../assets/technologies/${icon}.svg`] as {
    default: React.FC<React.SVGProps<SVGSVGElement>>;
  };
  const Icon = IconModule?.default;

  if (!Icon) return <p style={{ color: "red" }}>Icon {icon} not found.</p>;

  return (
    <Icon
      className={`techIcon w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 ${icon}`}
      fill="currentColor"
    />
  );
};

export default function Technologies() {
  const { txt } = useLanguage();

  const [hoveredTech, setHoveredTech] = useState("");
  const [clickedTech, setClickedTech] = useState("HTML");
  const [currentClickedIcon, setCurrentClickecIcon] = useState("html");
  const [currentHoveredIcon, setCurrentHoveredIcon] = useState("");

  const handleClick = (icon: string, name: string) => {
    setClickedTech(name);
    setCurrentClickecIcon(icon);
  };

  const handleMouseEnter = (icon: string, name: string) => {
    setHoveredTech(name);
    setCurrentHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredTech("");
    setCurrentHoveredIcon("");
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="technologiesSection relative z-1 flex flex-col items-center py-16 text-[var(--text-primary)] mt-20">
      <h1 className="sectionTitle">{txt.titles.tech}</h1>
      <div
        ref={ref}
        className={`flex flex-col items-center ${
          inView ? "scroll-in" : "invisible"
        }`}
      >
        <span
          className={`techName mt-12 mb-2 text-[var(--tech-icon-color)] ${
            currentHoveredIcon == "" ? currentClickedIcon : currentHoveredIcon
          }`}
        >
          {hoveredTech != "" ? hoveredTech : clickedTech}
        </span>
        <div className="techBtnContainer grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-8">
          {techJson.map((tech, i) => (
            <button
              key={i}
              className={`${
                clickedTech == tech.name ? "clicked" : ""
              } techBtn ${
                tech.icon
              } bg-[var(--bg-primary)] p-2 border-2 rounded-lg border-[var(--tech-icon-color)] cursor-pointer transition-all duration-150`}
              onMouseEnter={() => handleMouseEnter(tech.icon, tech.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(tech.icon, tech.name)}
            >
              <TechIcon icon={tech.icon} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
