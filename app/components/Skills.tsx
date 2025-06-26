"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Palette, Code2, AudioLines } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const getLevelPercentage = (level: string): number => {
  switch (level) {
    case "Novice": return 30;
    case "Beginner": return 45;
    case "Intermediate": return 55;
	case "Upper Intermediate": return 70;
    case "Advanced": return 85;
	case "Native": return 100;
	case "Expert": return 100;
    default: return 50;
  }
};

const getLevelGradient = (level: string): string => {
  switch (level) {
    case "Novice": return "from-blue-400 to-blue-500";
    case "Beginner": return "from-blue-500 to-cyan-400";
    case "Intermediate": return "from-cyan-400 to-purple-400";
	case "Upper Intermediate": return "from-purple-400 to-purple-500";
    case "Advanced": return "from-purple-400 to-purple-600";
	case "Native": return "from-green-400 to-green-500";
	case "Expert": return "from-yellow-400 to-yellow-500";
    default: return "from-blue-400 to-purple-500";
  }
};

const getLevelDescription = (level: string, translations: any): string => {
  const levelDescriptions: { [key: string]: string } = {
    novice: "Basic understanding of fundamental concepts.",
    beginner: "Some experience, can build simple applications.",
    intermediate: "Solid understanding and practical experience.",
    "upper intermediate": "Strong skills with some advanced knowledge.",
    advanced: "Proficient with extensive experience.",
    native: "Native speaker level proficiency.",
	expert: "Expert level with deep knowledge and experience."
  };
  const translatedDescription = translations?.skills?.levels?.[level.toLowerCase()];
  return translatedDescription || levelDescriptions[level.toLowerCase()] || "Good knowledge.";
};

const createSkillCategories = (translations: any) => [
	{
		title: translations?.skills?.backend || "Backend",
		icon: <Server className="w-6 h-6" />,
		skills: [
			{
				name: "Javascript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
				level: "Advanced"
			},
			{
				name: "Node.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
				level: "Advanced"
			},
			{
				name: "Typescript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
				level: "Advanced"
			},
			{
				name: "GoLang",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
				level: "Novice"
			},
			{
				name: "React",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
				level: "Intermediate"
			},
			{
				name: "Next.js",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
				level: "Advanced"
			},
		],
	},
	{
		title: translations?.skills?.frontend || "Frontend",
		icon: <Palette className="w-6 h-6" />,
		skills: [
			{
				name: "HTML5",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
				level: "Advanced"
			},
			{
				name: "CSS3",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
				level: "Advanced"
			},
			{
				name: "Bootstrap",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
				level: "Intermediate"
			},
			{
				name: "TailwindCSS",
				icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
				level: "Advanced"
			},
		],
	},
	{
		title: translations?.skills?.database || "Database",
		icon: <Server className="w-6 h-6" />,
		skills: [
			{
				name: "MongoDB",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
				level: "Advanced"
			},
			{
				name: "PostgreSQL",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
				level: "Intermediate"
			},
			{
				name: "MySQL",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
				level: "Advanced"
			}
		],
	},
	{
		title: translations?.skills?.other || "Other Technologies",
		icon: <Code2 className="w-6 h-6" />,
		skills: [
			{
				name: "Git",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
				level: "Intermediate"
			},
			{
				name: "GitHub",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
				level: "Intermediate"
			},
			{
				name: "Docker",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
				level: "Intermediate"
			},
			{
				name: "Linux",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
				level: "Advanced"
			},
		],
	},
	{
		title: translations?.skills?.languages || "Languages",
		icon: <AudioLines className="w-6 h-6" />,
		skills: [
			{
				name: translations?.skills?.portugueseBR || "Portuguese (BR)",
				icon: "🇧🇷",
				level: "Native"
			},
			{
				name: translations?.skills?.english || "English",
				icon: "🇺🇸",
				level: "Upper Intermediate"
			},
			{
				name: translations?.skills?.spanish || "Spanish",
				icon: "🇪🇸",
				level: "Intermediate"
			}
		],
	}
];

export default function Skills() {
	const { translations } = useLanguage();
	const skillCategories = createSkillCategories(translations);
	const [activeSkill, setActiveSkill] = useState<{name: string, level: string, icon: string} | null>(null);
	
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (activeSkill && !(event.target as Element).closest('.skill-item')) {
				setActiveSkill(null);
			}
		};

		const handleScroll = () => {
			if (activeSkill) {
				setActiveSkill(null);
			}
		};
		
		document.addEventListener('mousedown', handleClickOutside);
		window.addEventListener('scroll', handleScroll, true);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			window.removeEventListener('scroll', handleScroll, true);
		};
	}, [activeSkill]);
	
	return (
		<section className="py-28 min-h-screen flex items-center">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
				>
					{translations?.skills?.title || "Skills"}
				</motion.h2>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg"
				>
					{translations?.skills?.subtitle || "Technologies I work with and languages I speak"}
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className={`bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative ${
								category.skills.some(s => s.name === activeSkill?.name) ? 'z-10' : ''
							}`}
						>
							<div className="mb-8 flex items-center">
								<div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mr-4 shadow-lg">
									{category.icon}
								</div>
								<h3 className="text-2xl font-semibold text-white">
									{category.title}
								</h3>
							</div>

							<div className="grid grid-cols-2 gap-x-5 gap-y-4">
								{category.skills.map((skill, idx) => (
									<div key={skill.name} className="relative skill-item">
										<motion.div
											key={skill.name}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.2 + idx * 0.05 }}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.98 }}
											onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
											className="flex items-center p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer h-full"
										>
											<div className="flex items-center justify-center w-10 h-10 mr-3 group-hover:scale-110 transition-transform duration-300 bg-gray-800/50 rounded-lg p-1.5 flex-shrink-0">
												{skill.icon.startsWith('http') || skill.icon.startsWith('/') ? (
													<Image
														src={skill.icon}
														alt={skill.name}
														width={32}
														height={32}
														className={`${
															skill.name === "Next.js" ? "invert" : ""
														} object-contain drop-shadow-md w-full h-full`}
													/>
												) : (
													<span className="text-2xl">{skill.icon}</span>
												)}
											</div>
											<div className="flex-1">
												<span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
													{skill.name}
												</span>
											</div>
										</motion.div>
										
										<AnimatePresence>
											{activeSkill?.name === skill.name && (
												<motion.div
													initial={{ opacity: 0, y: 10, scale: 0.95 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: 10, scale: 0.95 }}
													transition={{ duration: 0.2, ease: "easeOut" }}
													className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-gray-800/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg z-20"
												>
													<div className="flex justify-between items-center mb-2">
														<span className="font-bold text-white text-sm">{activeSkill!.level}</span>
														<span className="text-xs text-purple-400 font-semibold">{getLevelPercentage(activeSkill!.level)}%</span>
													</div>
													<div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
														<motion.div
															className={`bg-gradient-to-r ${getLevelGradient(activeSkill!.level)} h-1.5 rounded-full`}
															initial={{ width: 0 }}
															animate={{ width: `${getLevelPercentage(activeSkill!.level)}%` }}
															transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
														/>
													</div>
													<p className="text-xs text-gray-400">
														{getLevelDescription(activeSkill!.level, translations)}
													</p>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}