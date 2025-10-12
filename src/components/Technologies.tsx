import React from "react";
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
      className={`techIcon ${icon}`}
      width={48}
      height={48}
      fill="currentColor"
    />
  );
};

export default function Technologies() {
  const { txt } = useLanguage();

  return (
    <section className="technologiesSection relative z-1 flex flex-col items-center py-16 text-[var(--text-primary)]">
      <h1 className="techTitle text-3xl">{txt.tech.title}</h1>
      <div className="techBtnContainer flex flex-wrap gap-2 mt-12">
        {techJson.map((tech, i) => (
          <button
            key={i}
            className={`techBtn ${tech.icon} p-2 border-2 rounded-md border-[var(--tech-icon-color)] transition-all duration-150`}
          >
            <TechIcon icon={tech.icon} />
          </button>
        ))}
      </div>
    </section>
  );
}
