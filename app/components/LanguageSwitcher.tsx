"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, languageFlags, languageNames } from "../context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage, translations } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleLanguageChange = (lang: "en" | "pt-BR" | "es") => {
    setLanguage(lang);
    closeDropdown();
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
      >
        <span className="text-lg">{languageFlags[language]}</span>
        <span className="text-sm hidden md:inline">{languageNames[language]}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg overflow-hidden shadow-xl z-50 min-w-[160px]"
          >
            <ul>
              <li>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors ${
                    language === "en" ? "text-blue-400" : "text-white"
                  }`}
                >
                  <span className="text-lg">{languageFlags.en}</span>
                  <span>{translations.language?.english || "English"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange("pt-BR")}
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors ${
                    language === "pt-BR" ? "text-blue-400" : "text-white"
                  }`}
                >
                  <span className="text-lg">{languageFlags["pt-BR"]}</span>
                  <span>{translations.language?.portuguese || "Português"}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`w-full text-left px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors ${
                    language === "es" ? "text-blue-400" : "text-white"
                  }`}
                >
                  <span className="text-lg">{languageFlags.es}</span>
                  <span>{translations.language?.spanish || "Español"}</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
