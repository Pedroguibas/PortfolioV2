import React from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./shared/LanguageContext.tsx";

interface AboutProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function About({ sectionRef }: AboutProps) {
  const { txt } = useLanguage();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section ref={sectionRef} className="aboutSection grid grid-cols-12 pt-20">
      <div className="col-span-10 col-start-2 flex flex-col items-center">
        <h1 className="sectionTitle text-[var(--text-primary)]">
          {txt.titles.about}
        </h1>
        <p
          ref={ref}
          className={`${
            inView ? "scroll-in" : "invisible"
          } text-[var(--text-secondary)] text-lg mt-8 text-justify`}
        >
          {txt.about.paragraph.part1}
          <span className="text-[var(--highlight-secondary)] text-xl bold">
            <b>{txt.about.paragraph.intuitive}</b>
          </span>
          {txt.about.paragraph.and}
          <span className="text-[var(--highlight-secondary)] text-xl bold">
            <b>{txt.about.paragraph.visually}</b>
          </span>
          {txt.about.paragraph.part2}
          <span className="text-[var(--highlight-secondary)] text-xl bold">
            <b>{txt.about.paragraph.design}</b>
          </span>
          {txt.about.paragraph.part3}
        </p>
      </div>
    </section>
  );
}
