import React from "react";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <>
          <Header />
          <main className="grid grid-cols-12">
            <div className="col-span-10 col-start-2">{children}</div>
          </main>
          <Footer />
        </>
      </ThemeProvider>
    </LanguageProvider>
  );
}
