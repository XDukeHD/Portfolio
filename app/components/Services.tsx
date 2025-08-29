"use client";

import { useLanguage } from "../context/LanguageContext";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Monitor, Bot, Code } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

export default function Services() {
  const { translations } = useLanguage();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const serviceAnimations = {
    website: {
      hover: { scale: 1.05, rotate: [0, -1, 1, -1, 0], transition: { duration: 0.3 } },
      tap: { scale: 0.95 }
    },
    bot: {
      hover: { scale: 1.05, y: [-5, 0, -5], transition: { duration: 1.5, repeat: Infinity } },
      tap: { scale: 0.95 }
    },
    system: {
      hover: { scale: 1.05, boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)" },
      tap: { scale: 0.95 }
    }
  };

  return (
    <div className="py-24 bg-black relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-600 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-600 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {translations?.services?.title || "My Services"}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {translations?.services?.subtitle || "Professional solutions for your digital needs"}
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Website Service */}
          <motion.div 
            variants={item}
            whileHover={serviceAnimations.website.hover}
            whileTap={serviceAnimations.website.tap}
            className="group"
          >
            <Card className="h-full bg-gray-900/50 border-purple-500/20 border overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-600/20 rounded-full blur-xl group-hover:bg-purple-600/30 transition-all duration-300" />
                  <Monitor className="text-purple-400 w-12 h-12 relative z-10" />
                </div>
                
                {/* Website preview animation */}
                <div className="w-full h-32 mb-6 rounded-md bg-gray-800 overflow-hidden relative">
                  <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: ['100%', '0%', '0%', '-100%'] }}
                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0"
                  >
                    <div className="h-32 w-full bg-gradient-to-b from-purple-900/50 to-blue-900/50">
                      <div className="h-6 w-full bg-gray-700 flex items-center px-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                      </div>
                      <div className="p-3">
                        <div className="h-3 bg-gray-600 rounded mb-2 w-3/4"></div>
                        <div className="h-2 bg-gray-600 rounded mb-1 w-full"></div>
                        <div className="h-2 bg-gray-600 rounded mb-1 w-5/6"></div>
                        <div className="h-2 bg-gray-600 rounded mb-1 w-4/6"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {translations?.services?.website?.title || "Website Development"}
                </h3>
                <p className="text-gray-300">
                  {translations?.services?.website?.description || 
                    "From simple landing pages to complex websites with modern design. Crafted with the latest technologies for optimal performance and user experience."}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bots Service */}
          <motion.div 
            variants={item}
            whileHover={serviceAnimations.bot.hover}
            whileTap={serviceAnimations.bot.tap}
            className="group"
          >
            <Card className="h-full bg-gray-900/50 border-blue-500/20 border overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-600/20 rounded-full blur-xl group-hover:bg-blue-600/30 transition-all duration-300" />
                  <Bot className="text-blue-400 w-12 h-12 relative z-10" />
                </div>
                
                {/* Chat bot animation */}
                <div className="w-full h-32 mb-6 rounded-md bg-gray-800 overflow-hidden relative flex flex-col">
                  <div className="h-6 w-full bg-gray-700 flex items-center px-2">
                    <div className="w-6 h-2 rounded-full bg-blue-500 mr-1"></div>
                    <div className="text-xs text-gray-300">Bot Chat</div>
                  </div>
                  <div className="p-2 flex-grow flex flex-col justify-end">
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                      className="bg-gray-700 text-xs text-white p-1 px-2 rounded-lg self-start mb-1 max-w-[80%]"
                    >
                      Hello! How can I help you?
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.3 }}
                      className="bg-blue-600 text-xs text-white p-1 px-2 rounded-lg self-end mb-1 max-w-[80%]"
                    >
                      I need information
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.9, duration: 0.3 }}
                      className="bg-gray-700 text-xs text-white p-1 px-2 rounded-lg self-start max-w-[80%]"
                    >
                      I&apos;ll help you with that!
                    </motion.div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {translations?.services?.bots?.title || "Bot Development"}
                </h3>
                <p className="text-gray-300">
                  {translations?.services?.bots?.description || 
                    "Custom bots for WhatsApp, Discord, or Telegram. Developed according to your specific needs to automate tasks and improve communication."}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Systems & API Service */}
          <motion.div 
            variants={item}
            whileHover={serviceAnimations.system.hover}
            whileTap={serviceAnimations.system.tap}
            className="group"
          >
            <Card className="h-full bg-gray-900/50 border-indigo-500/20 border overflow-hidden group-hover:border-indigo-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-indigo-600/20 rounded-full blur-xl group-hover:bg-indigo-600/30 transition-all duration-300" />
                  <Code className="text-indigo-400 w-12 h-12 relative z-10" />
                </div>
                
                {/* API/System animation */}
                <div className="w-full h-32 mb-6 rounded-md bg-gray-800 overflow-hidden relative">
                  <div className="h-6 w-full bg-gray-700 flex items-center px-2">
                    <div className="text-xs text-gray-300">API Console</div>
                  </div>
                  <div className="p-2 text-xs font-mono">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-green-400"
                    >
                      $ GET /api/users
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-blue-400"
                    >
                      {`{`}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-blue-400 ml-2"
                    >
                      &quot;status&quot;: &quot;success&quot;,
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="text-blue-400 ml-2"
                    >
                      &quot;data&quot;: [...]
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="text-blue-400"
                    >
                      {`}`}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ delay: 2, duration: 1, repeat: Infinity }}
                      className="text-white"
                    >
                      _
                    </motion.div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {translations?.services?.systems?.title || "Internal Systems & APIs"}
                </h3>
                <p className="text-gray-300">
                  {translations?.services?.systems?.description || 
                    "Development of internal systems and APIs tailored to your business needs. Custom solutions to optimize processes and enhance productivity."}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
