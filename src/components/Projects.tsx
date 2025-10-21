import React from "react";

interface projectsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function Projects({ sectionRef }: projectsProps) {
  return <section ref={sectionRef} className="projectsSection"></section>;
}
