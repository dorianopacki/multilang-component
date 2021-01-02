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
    if (language.name === name) {
      return;
    } else {
      setLanguage((language) => ({
        ...language,
        name,
      }));
    }
  }

  return (
    <LangContext.Provider value={language}>
      <LangUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
};
