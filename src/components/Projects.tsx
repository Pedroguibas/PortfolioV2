import React from "react";

interface projectsProps {
  ref: React.RefObject<HTMLElement | null>;
}

export default function Projects({ ref }: projectsProps) {
  return <section ref={ref} className="projectsSection"></section>;
}
