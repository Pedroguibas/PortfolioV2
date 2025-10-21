import { useRef } from "react";
import Layout from "./components/shared/Layout";
import Hero from "./components/Hero";
import SoftskillsScroller from "./components/SoftskillsScroller";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });

  const scrollToProjects = () =>
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Layout scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects}>
        <Hero />
        <SoftskillsScroller />
        <About sectionRef={aboutRef} />
        <Technologies />
        <Projects sectionRef={projectsRef} />
      </Layout>
    </>
  );
}

export default App;
