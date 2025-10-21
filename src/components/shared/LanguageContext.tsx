import React, { createContext, useContext, useState } from "react";
import text from "../../assets/data/text.json";

type Language = "pt" | "en";
type TextJSON = (typeof text)[Language];

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  txt: TextJSON;
};

interface LanguageProviderChildren {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: LanguageProviderChildren) {
  const [language, setLanguage] = useState<Language>("pt");

  const txt = text[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, txt }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctxt = useContext(LanguageContext);
  if (!ctxt)
    throw new Error("useLanguage must be used insed LanguageProvider.");
  return ctxt;
}
