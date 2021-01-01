import React from "react";
import { useLang, useLangUpdate } from "../contexts/LanguageContext.js";

export const LanguageChanger = () => {
  const lang = useLang();
  const toggleLanguage = useLangUpdate();

  return (
    <>
      <button name="pl" onClick={toggleLanguage}>
        Polish
      </button>
      <button name="eng" onClick={toggleLanguage}>
        English
      </button>
    </>
  );
};
