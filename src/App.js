import React from "react";
import { LanguageChanger } from "./components/LanguageChanger";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AttentionSection } from "./components/AttentionSection";

function App() {
  return (
    <LanguageProvider>
      <LanguageChanger />
      <AttentionSection />
    </LanguageProvider>
  );
}

export default App;
