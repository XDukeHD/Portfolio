"use client";

import { motion } from "framer-motion";
import { Github, Instagram, MessageCircle, Linkedin, ExternalLink, Mail, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();
  
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/30 backdrop-blur-md py-12">
      {/* Animated background gradient */}
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(75,0,130,0.15),transparent_70%),radial-gradient(circle_at_70%_60%,rgba(0,0,255,0.15),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left column */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Túlio Zanella
              </motion.h3>
              <p className="text-gray-300 mb-4">Software Developer</p>
              <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </motion.div>
            <Image
              src="https://wakatime.com/badge/user/f7fc301e-e4ee-4d46-b45f-5ff61c255b35.svg"
              alt="XDuke's WakaTime Stats"
              width={200}
              height={40}
              className="mt-4"
            /> 
          </div>
          
          {/* Middle column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">{translations?.footer?.quickLinks || "Quick Links"}</h4>
            <nav className="grid grid-cols-2 gap-2">
              <Link href="#home" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2">
                <ExternalLink size={14} /> {translations?.navbar?.home || "Home"}
              </Link>
              <Link href="#about" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2">
                <ExternalLink size={14} /> {translations?.navbar?.about || "About"}
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2">
                <ExternalLink size={14} /> {translations?.navbar?.skills || "Skills"}
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2">
                <ExternalLink size={14} /> {translations?.navbar?.projects || "Projects"}
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2">
                <ExternalLink size={14} /> {translations?.navbar?.contact || "Contact"}
              </Link>
            </nav>
          </motion.div>
          
          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white mb-4">{translations?.footer?.contactMe || "Contact Me"}</h4>
            <a href="mailto:tulio.czanella@gmail.com" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2 mb-4">
              <Mail size={16} /> tulio.czanella@gmail.com
            </a>
            <a href="https://wa.me/5513981914625" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 duration-200 flex items-center gap-2">
              <FaWhatsapp size={16} /> +55 13 98191-4625
            </a>
            <p className="text-gray-400 mb-4">{translations?.footer?.followMe || "Follow me on social media"}</p>
            
            {/* Social media icons */}
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/tulio_zanella"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-full text-white shadow-lg shadow-purple-500/20"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/XDukeHD"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-full text-white shadow-lg shadow-purple-500/20"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://wakatime.com/@XDuke"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-full text-white shadow-lg shadow-purple-500/20"
              >
                <SiWakatime size={18} />
              </motion.a>
              <motion.a
                href="https://discordapp.com/users/816775306115285073"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-full text-white shadow-lg shadow-purple-500/20"
              >
                <FaDiscord size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom copyright section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">© {currentYear} XDuke. {translations?.footer?.rights || "All rights reserved."}</p>
          <motion.div 
            className="flex items-center text-sm text-gray-400 mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {translations?.footer?.madeWith || "Made with"} <Heart size={14} className="mx-1 text-red-500 animate-pulse" /> {translations?.footer?.in || "in"} {translations?.footer?.brazil || "Brazil"}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}