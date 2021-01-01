import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();
const LangUpdateContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export function useLangUpdate() {
  return useContext(LangUpdateContext);
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({ name: "pl" });

  function toggleLanguage(e) {
    const { name } = e.target;
    setLanguage((language) => ({
      ...language,
      name,
    }));
    console.log(language);
  }

  return (
    <LangContext.Provider value={language}>
      <LangUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
};
