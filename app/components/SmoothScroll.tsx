"use client";

import { useEffect, useState } from "react";

export default function SmoothScroll() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            window.history.pushState(null, "", href);
          }
        }
      }
    };

    const observeSections = () => {
      const sections = document.querySelectorAll("section[id]");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
              window.history.replaceState(null, "", `#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.3 } // Porcentagem do elemento visível para ativar
      );

      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    document.addEventListener("click", smoothScroll);
    const cleanup = observeSections();

    return () => {
      document.removeEventListener("click", smoothScroll);
      cleanup();
    };
  }, []);

  return null; // Componente não renderiza nada visualmente
}
