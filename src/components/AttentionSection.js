import React from "react";
import { useLang } from "../contexts/LanguageContext";
import { Lang } from "../data/Lang";

export const AttentionSection = ({ sectionName = "attention" }) => {
  const lang = useLang();
  const name = lang.name;
  const { title, subtitle, ctaButton } = Lang[name][sectionName];
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </>
  );
};
