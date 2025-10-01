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
          <main className="min-h-[100vh]">{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    </LanguageProvider>
  );
}
