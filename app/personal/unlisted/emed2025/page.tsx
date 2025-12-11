"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Snowflake, Heart, Star, Gift, Calendar, GraduationCap, ChevronLeft, ChevronRight, TreePine, Sparkles } from "lucide-react";

const ChristmasBackground = () => {
  const [elements, setElements] = useState<{
    snow: { left: string; duration: number; delay: number; size: number }[];
    lights: { left: string; top: string; color: string; size: string; duration: number; delay: number }[];
    decor: { left: string; top: string; type: number; size: number; duration: number }[];
  }>({ snow: [], lights: [], decor: [] });

  useEffect(() => {
    setElements({
      snow: [...Array(50)].map(() => ({
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        size: Math.random() * 15 + 5
      })),
      lights: [...Array(20)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: ['bg-red-500', 'bg-green-500', 'bg-yellow-400', 'bg-blue-400'][i % 4],
        size: Math.random() * 6 + 2 + 'px',
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2
      })),
      decor: [...Array(8)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        type: Math.floor(Math.random() * 3),
        size: Math.random() * 50 + 50,
        duration: 10 + Math.random() * 10
      }))
    });
  }, []);

  if (elements.snow.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(0,255,0,0.05),transparent_40%)]" />
      
      {elements.snow.map((item, i) => (
        <motion.div
          key={`snow-${i}`}
          style={{ left: item.left, top: -20 }}
          animate={{
            top: "110vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
          className="absolute text-white/40"
        >
          <Snowflake size={item.size} />
        </motion.div>
      ))}

      {elements.lights.map((item, i) => (
        <motion.div
          key={`light-${i}`}
          className={`absolute rounded-full blur-sm ${item.color}`}
          style={{
            left: item.left,
            top: item.top,
            width: item.size,
            height: item.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
          }}
        />
      ))}

      {elements.decor.map((item, i) => (
        <motion.div
          key={`decor-${i}`}
          className="absolute text-white/5"
          style={{
            left: item.left,
            top: item.top,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.type === 0 ? <TreePine size={item.size} /> : item.type === 1 ? <Gift size={item.size} /> : <Star size={item.size} />}
        </motion.div>
      ))}
    </div>
  );
};

const PHOTOS = [
  "/assets-emed/fotos/1.jpg",
  "/assets-emed/fotos/2.jpg",
  "/assets-emed/fotos/3.jpg",
  "/assets-emed/fotos/4.jpg",
  "/assets-emed/fotos/5.jpg",
  "/assets-emed/fotos/6.jpeg",
  "/assets-emed/fotos/7.jpeg",
  "/assets-emed/fotos/8.jpeg",
  "/assets-emed/fotos/9.jpeg",
  "/assets-emed/fotos/10.jpeg",
];

const VIDEOS = [
  "/assets-emed/videos/1.mp4",
  "/assets-emed/videos/2.mp4",
  "/assets-emed/videos/3.mp4",
];

export default function Emed2025Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartTime = useRef(0);
  const isTouching = useRef(false);

  const shuffledPhotos = useMemo(() => {
    return [...PHOTOS].sort(() => Math.random() - 0.5);
  }, []);

  const slides = useMemo(() => [
    {
      id: "intro",
      type: "text",
      content: "2025...",
      subcontent: "Um ano que passou voando.",
      bg: "bg-gradient-to-br from-red-900 via-red-800 to-green-900",
      icon: <Calendar className="w-16 h-16 text-white mb-4 drop-shadow-lg" />,
      duration: 2000
    },
    {
      id: "photos-1",
      type: "photos-3",
      bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-blue-900",
      duration: 4000,
      photos: shuffledPhotos.slice(0, 3)
    },
    {
      id: "moments",
      type: "text",
      content: "Momentos Inesquecíveis",
      subcontent: "Rimos, choramos e aprendemos juntos.",
      bg: "bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900",
      icon: <Star className="w-16 h-16 text-yellow-400 mb-4 drop-shadow-lg" />,
      duration: 2000
    },
    {
      id: "photos-2",
      type: "photos-4",
      bg: "bg-gradient-to-br from-red-900 via-pink-900 to-purple-900",
      duration: 4000,
      photos: shuffledPhotos.slice(3, 7)
    },
    {
      id: "challenges",
      type: "text",
      content: "Desafios Superados",
      subcontent: "Cada prova, cada trabalho, uma vitória.",
      bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
      icon: <GraduationCap className="w-16 h-16 text-purple-300 mb-4 drop-shadow-lg" />,
      duration: 2000
    },
    {
      id: "photos-3",
      type: "photos-3",
      bg: "bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900",
      duration: 4000,
      photos: shuffledPhotos.slice(7, 10)
    },
    {
      id: "video-1",
      type: "video",
      bg: "bg-black",
      duration: 4000,
      video: VIDEOS[0]
    },
    {
      id: "video-2",
      type: "video",
      bg: "bg-black",
      duration: 4000,
      video: VIDEOS[1]
    },
    {
      id: "video-3",
      type: "video",
      bg: "bg-black",
      duration: 4000,
      video: VIDEOS[2]
    },
    {
      id: "transition",
      type: "transition",
      content: "E tem mais uma coisa que gostaríamos de dizer...",
      bg: "bg-black",
      duration: 2300
    },
    {
      id: "letter",
      type: "letter",
      bg: "bg-gradient-to-br from-red-950 via-red-900 to-red-950",
      duration: 0 
    }
  ], [shuffledPhotos]);

  useEffect(() => {
    const key = searchParams.get("key");
    const expectedKey = process.env.NEXT_PUBLIC_UNLISTED_KEY_PAGE_EMED2025;

    if (!key || key !== expectedKey) {
      router.push("/");
    } else {
      setAuthorized(true);
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (!started || currentSlide >= slides.length || isPaused) return;

    const slide = slides[currentSlide];
    if (slide.duration === 0) return; 

    const startTime = Date.now() - (progress / 100) * slide.duration;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / slide.duration) * 100;
      
      if (newProgress >= 100) {
        setProgress(0);
        setCurrentSlide(prev => prev + 1);
        clearInterval(interval);
      } else {
        setProgress(newProgress);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [started, currentSlide, isPaused, slides, progress]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsPaused(true);
    touchStartTime.current = Date.now();
    if (e.pointerType === 'touch') {
      isTouching.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsPaused(false);
    const touchDuration = Date.now() - touchStartTime.current;
    
    if (touchDuration < 200) {
      const clientX = e.clientX;
      const screenWidth = window.innerWidth;
      
      if (clientX < screenWidth * 0.3) {
        setCurrentSlide(prev => Math.max(0, prev - 1));
        setProgress(0);
      } else if (clientX > screenWidth * 0.7) {
        setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
        setProgress(0);
      }
    }
    
    setTimeout(() => {
      isTouching.current = false;
    }, 100);
  };

  if (!authorized) return null;

  if (!started) {
    return (
      <div className="min-h-screen bg-red-950 flex flex-col items-center justify-center relative overflow-hidden text-white p-4">
        <ChristmasBackground />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center max-w-md bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          <Gift className="w-20 h-20 mx-auto mb-6 text-red-400" />
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-green-400">
            Retrospectiva EMED 2025
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            Uma pequena homenagem aos nossos mestres.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-white text-red-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Iniciar Retrospectiva
          </button>
        </motion.div>
      </div>
    );
  }

  const slide = slides[currentSlide];

  return (
    <div 
      className={`min-h-screen ${slide?.bg || 'bg-black'} text-white relative overflow-hidden transition-colors duration-1000 touch-none select-none`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <ChristmasBackground />
      
      <div className="absolute top-0 left-0 right-0 z-50 p-4 flex gap-2 pt-8 md:pt-4">
        {slides.map((s, i) => (
          <div key={i} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ 
                width: i < currentSlide ? '100%' : i === currentSlide ? `${progress}%` : '0%' 
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-12 left-4 z-40 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center border-2 border-white shadow-lg">
          <Gift size={20} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-sm shadow-black drop-shadow-md">EMED 2025</p>
          <p className="text-xs text-gray-200 shadow-black drop-shadow-md">Retrospectiva</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {slide && slide.type === 'text' && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center z-10 relative"
          >
            {slide.icon}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">{slide.content}</h2>
            <p className="text-xl md:text-2xl text-gray-100 drop-shadow-md">{slide.subcontent}</p>
          </motion.div>
        )}

        {slide && slide.type === 'photos-3' && slide.photos && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen w-full relative z-10 p-4"
          >
            <motion.div 
              initial={{ rotate: -10, x: -100, opacity: 0 }}
              animate={{ rotate: -6, x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-[15%] left-[5%] w-48 h-64 bg-white p-2 shadow-xl transform -rotate-6 rounded-sm"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image src={slide.photos[0]} alt="Memory 1" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ rotate: 10, x: 100, opacity: 0 }}
              animate={{ rotate: 6, x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[35%] right-[5%] w-52 h-72 bg-white p-2 shadow-xl transform rotate-6 rounded-sm z-20"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image src={slide.photos[1]} alt="Memory 2" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ rotate: -5, y: 100, opacity: 0 }}
              animate={{ rotate: -3, y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-[10%] left-[15%] w-48 h-60 bg-white p-2 shadow-xl transform -rotate-3 rounded-sm z-10"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image src={slide.photos[2]} alt="Memory 3" fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        )}

        {slide && slide.type === 'photos-4' && slide.photos && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen w-full relative z-10 p-4 flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-4 max-w-md w-full">
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: -3 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-2 shadow-lg rounded-sm aspect-[3/4]"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={slide.photos[0]} alt="Memory 4" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 3 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-2 shadow-lg rounded-sm aspect-[3/4] mt-8"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={slide.photos[1]} alt="Memory 5" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: -5 }}
                animate={{ scale: 1, rotate: 2 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-2 shadow-lg rounded-sm aspect-[3/4] -mt-8"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={slide.photos[2]} alt="Memory 6" fill className="object-cover" />
                </div>
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: 5 }}
                animate={{ scale: 1, rotate: -2 }}
                transition={{ delay: 0.8 }}
                className="bg-white p-2 shadow-lg rounded-sm aspect-[3/4]"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image src={slide.photos[3]} alt="Memory 7" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {slide && slide.type === 'video' && slide.video && (
          <motion.div
            key={slide.id}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-screen w-full relative z-10 flex items-center justify-center bg-black"
          >
            <video 
              src={slide.video} 
              className="w-full h-full object-contain" 
              muted 
              playsInline 
              autoPlay
              ref={(el) => {
                if (el) {
                  el.playbackRate = 3.0;
                  el.play().catch(() => {});
                }
              }}
            />
          </motion.div>
        )}

        {slide && slide.type === 'transition' && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center z-10 relative"
          >
            <h2 className="text-3xl md:text-5xl font-bold">{slide.content}</h2>
          </motion.div>
        )}

        {slide && slide.type === 'letter' && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen flex flex-col items-center justify-center p-4 md:p-8 z-10 relative pt-24"
          >
            <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 border border-white/20 shadow-2xl overflow-y-auto max-h-[75vh] custom-scrollbar">
              <Heart className="w-12 h-12 text-red-400 mb-6 mx-auto" />
              <div className="space-y-4 text-left font-medium leading-relaxed text-gray-100">
                <p className="text-xl font-bold mb-6">Queridos professores,</p>
                
                <p>Antes de qualquer coisa… obrigada.</p>
                <p>De verdade.</p>
                <p>Por tudo que vocês fizeram pela gente nesse ano que passou correndo, tropeçando, rindo e quase enlouquecendo em cima de trabalhos e provas.</p>
                
                <p>A gente sabe que não é fácil.</p>
                <p>Tem dia que a sala tá bagunçada, tem dia que ninguém entende nada, tem dia que a gente chega cansado e vocês também… mas mesmo assim vocês estavam lá, firmes, tentando fazer o melhor.</p>
                
                <p>E isso a gente percebe. Mesmo quando não fala.</p>
                
                <p>Obrigada por cada explicação repetida com paciência, por cada “vai, você consegue”, por cada olhar que dizia mais que mil palavras.</p>
                
                <p>Obrigada até pelas bronquinhas — que na hora irritam, mas depois fazem a gente pensar: “é… precisava mesmo”.</p>
                
                <p>Vocês fizeram muito mais do que ensinar conteúdo. Ajudaram a gente a crescer, a acreditar mais no que somos capazes, a enxergar caminhos que às vezes a gente nem sabia que existiam.</p>
                
                <p>E quando a gente olhar pra trás, esse ano vai ficar guardado como aquele capítulo importante, meio bagunçado, meio cansativo, mas lindo… porque vocês fizeram parte dele.</p>
                
                <p>Então, de coração aberto: obrigada por tudo.</p>
                
                <p>Por cada esforço, cada sorriso, cada puxão de volta quando a gente tava quase se perdendo.</p>
                
                <p>Vocês marcaram nossa vida.</p>
                
                <p className="text-lg font-bold mt-8">E isso é grande demais pra colocar só em palavras.</p>
                
                <p className="mt-8 italic text-right">Com carinho, nossos sinceros agradecimentos</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}