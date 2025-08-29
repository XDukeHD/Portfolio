"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { translations } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const webhookUrl = "https://discordapp.com/api/webhooks/1410840686948909168/aOrOPUkiZD0jR57EuqV-NXPu7QGZOYMgofRa0WsU5dxHSKf-VMAjAmtxJF1cUjt2aM89";

    const FIELD_NAME_LIMIT = 256;
    const FIELD_VALUE_LIMIT = 1024;
    const TITLE_LIMIT = 256;
    const MESSAGE_LIMIT = 4096;

    function truncate(str: string, n: number) {
      return str.length > n ? str.slice(0, n - 1) + "…" : str;
    }

    const fitsInEmbed =
      (formData.name.length <= FIELD_VALUE_LIMIT) &&
      (formData.email.length <= FIELD_VALUE_LIMIT) &&
      (formData.subject.length <= FIELD_VALUE_LIMIT) &&
      (formData.message.length <= MESSAGE_LIMIT);

    try {
      let response;
      if (fitsInEmbed) {
        const embed = {
          title: truncate("Novo contato recebido!", TITLE_LIMIT),
          color: 5814783,
          fields: [
            { name: "Nome", value: truncate(formData.name || "-", FIELD_VALUE_LIMIT), inline: true },
            { name: "Email", value: truncate(formData.email || "-", FIELD_VALUE_LIMIT), inline: true },
            { name: "Assunto", value: truncate(formData.subject || "-", FIELD_VALUE_LIMIT), inline: false },
            { name: "Mensagem", value: truncate(formData.message || "-", MESSAGE_LIMIT), inline: false },
          ],
          timestamp: new Date().toISOString(),
        };
        response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ embeds: [embed] }),
        });
      } else {
        const content =
          `Novo contato recebido!\n` +
          `Nome: ${truncate(formData.name, FIELD_VALUE_LIMIT)}\n` +
          `Email: ${truncate(formData.email, FIELD_VALUE_LIMIT)}\n` +
          `Assunto: ${truncate(formData.subject, FIELD_VALUE_LIMIT)}\n` +
          `Mensagem:\n${truncate(formData.message, 4500)}`;
        response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content }),
        });
      }

      if (!response.ok) throw new Error("Erro ao enviar para o Discord");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          {translations?.contact?.title || "Contact"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg"
        >
          {translations?.contact?.subtitle || "Let's work together"}
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">{translations?.contact?.contactInfo || "Contact Information"}</h3>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-400">{translations?.contact?.email || "Email"}</h4>
                    <a href="mailto:contato@xduke.com.br" className="text-white hover:text-purple-400 transition-colors">
                      tulio.czanella@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-400">{translations?.contact?.phone || "Phone"}</h4>
                    <a href="https://wa.me/5513981914625" className="text-white hover:text-purple-400 transition-colors">
                      +55 13 98191-4625
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-400">{translations?.contact?.location || "Location"}</h4>
                    <p className="text-white">
                      São Paulo, Brasil
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    {translations?.contact?.name || "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={translations?.contact?.yourName || "Your name"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    {translations?.contact?.email || "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={translations?.contact?.yourEmail || "your@email.com"}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  {translations?.contact?.subject || "Subject"}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={translations?.contact?.subjectPlaceholder || "Message subject"}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {translations?.contact?.message || "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={4500}
                  className="w-full bg-gray-800/80 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder={translations?.contact?.messagePlaceholder || "Your message..."}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  flex items-center justify-center gap-2 
                  bg-gradient-to-r from-purple-600 to-blue-600 
                  hover:from-purple-700 hover:to-blue-700 
                  text-white font-medium py-3 px-6 rounded-lg 
                  transition-all
                  ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {isSubmitting 
                  ? translations?.contact?.sending || "Sending..." 
                  : translations?.contact?.send || "Send Message"
                }
                {!isSubmitting && <Send className="w-4 h-4" />}
              </motion.button>
              
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-400"
                >
                  {translations?.contact?.success || "Message sent successfully!"}
                </motion.div>
              )}
              
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-400"
                >
                  {translations?.contact?.error || "Failed to send message. Please try again."}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
