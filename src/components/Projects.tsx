import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { useLanguage } from "./shared/LanguageContext.tsx";
import projects from "../assets/data/projects.json";
import "../assets/css/projects.css";

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

type ProjectJSON = (typeof projects)[0];

interface ProjectProps {
  p_txt: ProjectJSON;
}

const images = import.meta.glob<{ default: string }>(
  "../assets/projects/*.png",
  { eager: true }
);

function Project({ p_txt }: ProjectProps) {
  const { language } = useLanguage();
  const image = images[`../assets/projects/${p_txt.image}.png`]?.default;
  return (
    <button className="projectCard flex flex-col group text-start relative border-2 rounded-2xl transition-all duration-500 ease-in-out cursor-pointer">
      <span className="redirectIcon flex justify-center items-center absolute top-2 right-2 p-2 rounded-full bg-[var(--highlight-secondary)] text-white w-fit z-2">
        <BoxArrowUpRight />
      </span>
      <article className="bg-[var(--bg-secondary)] h-full rounded-[inherit]">
        <aside className="overflow-hidden rounded-t-2xl h-48">
          <img
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            src={image}
            alt=""
          />
        </aside>
        <div className="flex flex-col justify-start py-2 px-4">
          <h2 className="text-2xl mt-1">
            <b>{p_txt.projectTexts[language].projectTitle}</b>
          </h2>
          <p className="my-4 text-[var(--text-secondary)]">
            {p_txt.projectTexts[language].projectDiscription}
          </p>
          <div className="projectTechnologies flex flex-wrap gap-1.5 mt-2 mb-1">
            {p_txt.projectTechList.map((tech, i) => (
              <span
                className="text-sm bg-[var(--highlight-secondary)] text-white py-0.5 px-2 rounded-lg"
                key={i}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </button>
  );
}

export default function Projects({ sectionRef }: ProjectsProps) {
  const { txt } = useLanguage();

  return (
    <section
      ref={sectionRef}
      className="projectsSection grid grid-cols-12 items-center text-[var(--text-primary)] mt-16"
    >
      <div className="col-span-10 col-start-2">
        <div className="flex justify-center">
          <h1 className="sectionTitle">{txt.titles.projects}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          {projects.map((p, i) => (
            <Project p_txt={p} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
