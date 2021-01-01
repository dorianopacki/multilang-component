import React from "react";
import { LanguageChanger } from "./components/LanguageChanger";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <LanguageChanger />
    </LanguageProvider>
  );
}

export default App;
