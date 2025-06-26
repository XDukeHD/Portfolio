"use client";

import { useState, useRef, useEffect } from "react";
import useSound from "use-sound";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveName() {
  const [isInverted, setIsInverted] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentDogImage, setCurrentDogImage] = useState("");
  const [playHowl] = useSound("/sounds/howl.mp3");
  const [isEmojiActive, setIsEmojiActive] = useState(false);
  const [isDAnimating, setIsDAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawingActive, setIsDrawingActive] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsDrawingActive(true);
    const rect = canvas.getBoundingClientRect();
    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !isDrawingActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawingActive(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleLetterClick = async (letter: string) => {
    switch (letter) {
      case "T":
        setIsInverted(!isInverted);
        document.documentElement.classList.toggle("invert");
        break;
      case "Ú":
        if (!isDAnimating) {
          setIsDAnimating(true);
          setTimeout(() => setIsDAnimating(false), 2000);
        }
        break;
      case "L":
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setCurrentDogImage(data.message);
        playHowl();
        break;
      case "I":
        setIsDrawing(!isDrawing);
        if (!isDrawing) {
          document.body.style.cursor = "crosshair";
        } else {
          document.body.style.cursor = "default";
          clearCanvas();
        }
        break;
      case "O":
        setIsEmojiActive(!isEmojiActive);
        break;
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-${isDrawing ? "auto" : "none"} z-40`}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div className="relative z-50 flex justify-center space-x-2 text-8xl font-bold text-white mb-12">
        <motion.span
          onClick={() => handleLetterClick("T")}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isInverted ? 180 : 0 }}
        >
          X
        </motion.span>
        <motion.span
          onClick={() => handleLetterClick("Ú")}
          className="cursor-pointer"
          animate={isDAnimating ? {
            y: [-800, 0],
            transition: {
              y: {
                duration: 2,
                times: [0, 1],
                ease: "easeInOut"
              }
            }
          } : {}}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          D
        </motion.span>
        <motion.span
          onClick={() => handleLetterClick("L")}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          U
        </motion.span>
        <motion.span
          onClick={() => handleLetterClick("I")}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          K
        </motion.span>
        <AnimatePresence mode="wait">
          <motion.span
            key={isEmojiActive ? "emoji" : "letter"}
            onClick={() => handleLetterClick("O")}
            className="cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {isEmojiActive ? "🎮" : "E"}
          </motion.span>
        </AnimatePresence>
      </div>
      {currentDogImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
          onClick={() => setCurrentDogImage("")}
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-white p-4 rounded-lg"
          >
            <img src={currentDogImage} alt="Shiba Inu" className="w-64 h-64 object-cover rounded-lg" />
          </motion.div>
        </div>
      )}
    </>
  );
}