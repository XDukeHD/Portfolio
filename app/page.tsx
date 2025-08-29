"use client";

import { useEffect, useState } from "react";
import InteractiveName from "./components/InteractiveName";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import SmoothScroll from "./components/SmoothScroll";
import AnimatedBackground from "./components/AnimatedBackground";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { translations } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SmoothScroll />
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <InteractiveName />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <Navbar />
            
            <section id="home" className="h-screen flex flex-col items-center justify-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <InteractiveName />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-xl mt-8 text-center max-w-2xl mx-auto px-4"
                >
                  {translations?.home?.intro || "Want to get to know me a little better?"}
                </motion.p>
                
                <motion.button
                  whileHover={{ y: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToNext}
                  className="mt-12 text-white opacity-70 hover:opacity-100 transition-opacity"
                >
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowDown className="w-8 h-8" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </section>
            
            <section id="about">
              <AboutMe />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="services">
              <Services />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
            
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}