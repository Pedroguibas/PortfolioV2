import React, { useState } from "react";
import { useLanguage } from "./shared/LanguageContext";
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

  return (
    <section className="technologiesSection relative z-1 flex flex-col items-center py-16 text-[var(--text-primary)]">
      <h1 className="techTitle text-4xl">{txt.tech.title}</h1>
      <span className="techName mt-12 mb-2">
        {hoveredTech != "" ? hoveredTech : clickedTech}
      </span>
      <div className="techBtnContainer grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-8">
        {techJson.map((tech, i) => (
          <button
            key={i}
            className={`${clickedTech == tech.name ? "clicked" : ""} techBtn ${
              tech.icon
            } bg-[var(--bg-primary)] p-2 border-2 rounded-lg border-[var(--tech-icon-color)] cursor-pointer transition-all duration-150`}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech("")}
            onClick={() => setClickedTech(tech.name)}
          >
            <TechIcon icon={tech.icon} />
          </button>
        ))}
      </div>
    </section>
  );
}
