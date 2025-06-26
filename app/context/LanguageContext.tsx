"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define language type
type Language = "en" | "pt-BR" | "es";

// Define flags for each language
export const languageFlags = {
  en: "🇺🇸",
  "pt-BR": "🇧🇷",
  es: "🇪🇸",
};

// Define language names
export const languageNames = {
  en: "English",
  "pt-BR": "Português",
  es: "Español",
};

// Define interface for the context
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: any;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  translations: {},
});

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // State for current language
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Effect to load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        // Import the translation file dynamically
        const translationModule = await import(`../translations/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English if translation loading fails
        if (language !== "en") {
          try {
            const fallbackModule = await import(`../translations/en.json`);
            setTranslations(fallbackModule.default);
          } catch (fallbackError) {
            console.error("Failed to load fallback translations", fallbackError);
            setTranslations({});
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Try to get language from local storage on first render
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language") as Language;
      if (storedLanguage && ["en", "pt-BR", "es"].includes(storedLanguage) && storedLanguage !== language) {
        setLanguage(storedLanguage);
        return; // Exit early as setLanguage will trigger this effect again
      }
    }
    
    // Load translations
    loadTranslations();
  }, [language]);

  // Function to change language and update local storage
  const handleSetLanguage = (newLanguage: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage);
    }
    setLanguage(newLanguage);
  };

  // If still loading, show minimal content to avoid blank screen
  if (isLoading) {
    return (
      <LanguageContext.Provider
        value={{
          language,
          setLanguage: handleSetLanguage,
          translations: {}, // Empty translations while loading
        }}
      >
        <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <div className="text-2xl mb-4">XDuke</div>
            <div className="text-sm opacity-70">Loading...</div>
          </div>
        </div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
