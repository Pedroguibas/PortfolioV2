import React, { useRef } from "react";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () =>
    footerRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <LanguageProvider>
      <ThemeProvider>
        <>
          <Header scrollToFooter={scrollToFooter} />
          <main>
            <div>{children}</div>
          </main>
          <Footer ref={footerRef} />
        </>
      </ThemeProvider>
    </LanguageProvider>
  );
}
