import React from "react";
import { useLanguage } from "./shared/LanguageContext.tsx";
import projects from "../assets/data/projects.json";
import testImg from "../assets/profile-pic.jpeg";
import { TechIcon } from "./Technologies.tsx";

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

type ProjectJSON = (typeof projects)[0];

interface ProjectProps {
  p_txt: ProjectJSON;
}

function Project({ p_txt }: ProjectProps) {
  const { txt, language } = useLanguage();
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 border border-[var(--text-primary)] overflow-hidden rounded-2xl mx-4">
      <aside className="sm:order-2 flex justify-center overflow-hidden aspect-square">
        <img className="object-cover w-full" src={testImg} alt="" />
      </aside>
      <div className="sm:order-1 flex flex-col justify-between py-2 px-4">
        <h2 className="text-xl">{p_txt.projectTexts[language].projectTitle}</h2>
        <p className="my-6 text-sm text-[var(--text-secondary)]">
          {p_txt.projectTexts[language].projectDiscription}
        </p>
        <div className="projectLinkContainer flex justify-center">
          <button className="translateBtn flex gap-1 border-1 py-1 my-2 px-1.5 rounded-md items-center text-sm text-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:bg-[var(--text-primary)] transition-colors duration-200 cursor-pointer">
            {txt.checkProject}
          </button>
        </div>
        <div className="projectTechnologies mb-1">
          <h3 className="text-lg">{txt.titles.tech}</h3>
          <div className="flex gap-1 text-[var(--text-secondary)] mt-1.5">
            {p_txt.projectTechList.map((icon, i) => (
              <TechIcon classes="w-8 h-8" icon={icon} key={i} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ sectionRef }: ProjectsProps) {
  const { txt } = useLanguage();

  return (
    <section
      ref={sectionRef}
      className="projectsSection grid grid-cols-12 items-center text-[var(--text-primary)] mt-16"
    >
      <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
        <div className="flex justify-center">
          <h1 className="sectionTitle">{txt.titles.projects}</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12">
          {projects.map((p, i) => (
            <Project p_txt={p} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
