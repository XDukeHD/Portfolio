"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../data/projects.json";
import { useLanguage } from "../context/LanguageContext";
import { FiExternalLink, FiX } from "react-icons/fi";

interface Project {
  id: string | number;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  gallery: string[];
  technologies: string[];
  projectLink: string;
}

const techLogoMap: { [key: string]: string } = {
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/white",
  Express: "https://cdn.simpleicons.org/express/white",
  PHP: "https://cdn.simpleicons.org/php/white",
  MySQL: "https://cdn.simpleicons.org/mysql/white",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/white",
  TypeScript: "https://cdn.simpleicons.org/typescript/white",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/white",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { translations } = useLanguage();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-28 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {translations?.projects?.title || "Projects"}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center mb-16 max-w-3xl mx-auto text-lg"
        >
          {translations?.projects?.subtitle || "Check out some of the projects I've developed using the latest technologies"}
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300 flex flex-col w-full max-w-sm"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                      {techLogoMap[tech] && (
                        <Image src={techLogoMap[tech]} alt={tech} width={16} height={16} className="filter brightness-0 invert" />
                      )}
                      <span className="text-xs text-white font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <motion.button
                    onClick={() => setSelectedProject(project as Project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold"
                  >
                    {translations?.projects?.viewDetails || "View Details"}
                  </motion.button>
                  <Link href={project.projectLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
                    >
                      {translations?.projects?.linkToProject || "Link to Project"}
                      <FiExternalLink />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl max-w-4xl w-full relative max-h-[90vh] flex flex-col"
              >
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
                  >
                    <FiX size={24} />
                  </button>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pr-12">{selectedProject.name}</h3>
                </div>
                
                <div className="overflow-y-auto flex-grow pr-2 -mr-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {selectedProject.gallery.map((image, index) => (
                      <motion.div 
                        key={index} 
                        className="relative h-56 overflow-hidden rounded-xl border border-white/10"
                        whileHover={{ scale: 1.03, zIndex: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={image}
                          alt={`${selectedProject.name} gallery ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed">{selectedProject.description}</p>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedProject.technologies.map((tech) => (
                       <div key={tech} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                        {techLogoMap[tech] && (
                          <Image src={techLogoMap[tech]} alt={tech} width={18} height={18} className="filter brightness-0 invert" />
                        )}
                        <span className="text-sm text-white font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                  <Link href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                    >
                      <FiExternalLink />
                      {translations?.projects?.linkToProject || "Link to Project"}
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                  >
                    {translations?.projects?.close || "Close"}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}