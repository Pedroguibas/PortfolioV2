import React from "react";

interface AboutProps {
  ref: React.RefObject<HTMLElement | null>;
}

export default function About({ ref }: AboutProps) {
  return (
    <section ref={ref} className="aboutSection">
      <h1></h1>
    </section>
  );
}
