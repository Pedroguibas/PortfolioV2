import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import text from "../../assets/data/text.json";

export type Language = "pt" | "en";
type TextJSON = (typeof text)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  txt: TextJSON;
  toggleLanguage: () => void;
};

interface LanguageProviderChildren {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: LanguageProviderChildren) {
  const cookieLang = Cookies.get("language") as Language;
  const [language, setLanguage] = useState<Language>(
    cookieLang ? cookieLang : "pt"
  );

  const txt = text[language];

  const toggleLanguage = () => {
    const newLang = language == "pt" ? "en" : "pt";
    setLanguage(newLang);
    if (Cookies.get("acceptedCookies") == "accepted")
      Cookies.set("language", newLang, { expires: 30 });
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, txt, toggleLanguage }}
    >
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
