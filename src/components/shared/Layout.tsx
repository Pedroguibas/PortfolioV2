import React, { useRef } from "react";
import { LanguageProvider } from "./LanguageContext.tsx";
import { ThemeProvider } from "./ThemeContext.tsx";
import { ScrollDirectionProvider } from "./ScrollDirectionContext.tsx";
import Header from "../Header.tsx";
import Footer from "../Footer.tsx";
import BackToTopButton from "../BackToTopButton.tsx";
import Cookie from "../Cookie.tsx";

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
        <ScrollDirectionProvider>
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
              sectionRef={footerRef}
              scrollToAbout={scrollToAbout}
              scrollToProjects={scrollToProjects}
            />
            <Cookie />
            <BackToTopButton />
          </>
        </ScrollDirectionProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
