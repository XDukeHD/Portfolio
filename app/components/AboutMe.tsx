"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Instagram, MessageCircle } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import certificatesData from "../data/certificates.json";
import { useLanguage } from "../context/LanguageContext";

type Certificate = {
  id: number;
  name: string;
  description: string;
  institution: string;
  hours: number;
  year: number;
  image: string;
  certificate: string;
};

export default function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const { translations } = useLanguage();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section className="py-28 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                {translations?.about?.title || "About Me"}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {translations?.about?.realName || "Túlio Zanella"} / <span className="text-purple-400">{translations?.about?.nickname || "XDuke"}</span>
                  </h3>
                  <p className="text-gray-400 mt-1 sm:mt-0">{translations?.about?.age || "17 anos"}</p>
                </div>
                <p className="text-sm text-gray-400 mb-4">{translations?.about?.subtitle || "Entusiasta em Desenvolvimento de Software e Análise de Dados"}</p>
                <hr className="border-gray-700" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {translations?.about?.description || "I'm a passionate software developer with expertise in multiple programming languages and frameworks. I love creating solutions that solve real-world problems."}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-8 py-3 rounded-lg transition-all text-lg shadow-lg hover:shadow-purple-500/20"
                >
                  {translations?.about?.viewCertificates || "View Certificates"}
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-60 h-60 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl opacity-30 animate-pulse"></div>
                <Image
                  src="https://avatars.githubusercontent.com/u/76635605"
                  alt="Túlio Zanella"
                  width={320}
                  height={320}
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10 cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center space-x-8"
          >
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://instagram.com/tulio_zanella"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://github.com/XDukeHD"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://discordapp.com/users/816775306115285073"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaDiscord className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <AnimatePresence>
          {isModalOpen && (
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900/70 border border-slate-700 p-6 rounded-2xl max-w-4xl w-full mx-auto relative my-8 max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/10"
              >
                <AnimatePresence mode="wait">
                  {selectedCertificate ? (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <button
                        onClick={() => setSelectedCertificate(null)}
                        className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-colors text-sm z-10"
                      >
                        &larr; {translations?.certificates?.back || "Voltar"}
                      </button>
                      <button
                        onClick={handleCloseModal}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                      </button>
                      <div className="grid md:grid-cols-2 gap-8 items-start pt-8">
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-700">
                          <Image
                            src={selectedCertificate.certificate}
                            alt={`Certificado de ${selectedCertificate.name}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col h-full">
                          <div className="flex items-center space-x-4 mb-4">
                            <Image
                              src={selectedCertificate.image}
                              alt={selectedCertificate.institution}
                              width={60}
                              height={60}
                              className="rounded-lg object-contain bg-white/10 p-1"
                            />
                            <div>
                              <h3 className="text-2xl font-bold text-white">{translations?.certificates?.certi?.[selectedCertificate.id]?.name || selectedCertificate.name}</h3>
                              <p className="text-gray-400">{selectedCertificate.institution}</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4 flex-grow">{translations?.certificates?.certi?.[selectedCertificate.id]?.description || selectedCertificate.description}</p>
                          <div className="flex justify-between items-center text-gray-400 text-sm border-t border-slate-700 pt-4 mt-auto">
                            <span>{selectedCertificate.hours} {translations?.certificates?.certi?.[selectedCertificate.id]?.hours || 'Horas'}</span>
                            <span>{translations?.certificates?.certi?.[selectedCertificate.id]?.finished || 'Finalizado em'} {selectedCertificate.year}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="list"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold mb-6 text-center text-white">{translations?.certificates?.title || 'Certificados'}</h3>
                      <ul className="space-y-4">
                        {certificatesData.certificates.map((cert) => (
                          <li
                            key={cert.id}
                            onClick={() => setSelectedCertificate(cert)}
                            className="bg-slate-800/50 hover:bg-slate-700/50 p-4 rounded-lg flex items-center space-x-4 cursor-pointer transition-all duration-300"
                          >
                            <div className="w-16 h-16 bg-white/5 rounded-md flex items-center justify-center">
                              <Image src={cert.image} alt={cert.institution} width={50} height={50} className="rounded-md object-contain" />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-bold text-lg text-white">{translations?.certificates?.certi?.[cert.id]?.name || cert.name}</h4>
                              <p className="text-gray-400">{cert.institution}</p>
                            </div>
                            <div className="text-gray-500">
                              &rarr;
                            </div>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
