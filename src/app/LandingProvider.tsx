"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type LandingLanguage = "en" | "es";

type LandingContextValue = {
  language: LandingLanguage;
  isEnglish: boolean;
  toggleLanguage: () => void;
};

const LandingLanguageContext = createContext<LandingContextValue | undefined>(
  undefined,
);

export function LandingProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState<LandingLanguage>("en");

  const value = useMemo(
    () => ({
      language,
      isEnglish: language === "en",
      toggleLanguage: () =>
        setLanguage((currentLanguage) =>
          currentLanguage === "en" ? "es" : "en",
        ),
    }),
    [language],
  );

  return (
    <LandingLanguageContext.Provider value={value}>
      {children}
    </LandingLanguageContext.Provider>
  );
}

export function useLandingLanguage() {
  const context = useContext(LandingLanguageContext);

  if (!context) {
    throw new Error("useLandingLanguage must be used within LandingProvider");
  }

  return context;
}