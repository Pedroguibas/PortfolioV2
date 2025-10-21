import React, { useRef } from "react";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  children: React.ReactNode;
}

export default function Layout({
  scrollToAbout,
  scrollToProjects,
  children,
}: LayoutProps) {
  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () =>
    footerRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <LanguageProvider>
      <ThemeProvider>
        <>
          <Header
            scrollToFooter={scrollToFooter}
            scrollToAbout={scrollToAbout}
            scrollToProjects={scrollToProjects}
          />
          <main>
            <div>{children}</div>
          </main>
          <Footer
            ref={footerRef}
            scrollToAbout={scrollToAbout}
            scrollToProjects={scrollToProjects}
          />
        </>
      </ThemeProvider>
    </LanguageProvider>
  );
}
