import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

// Variantes do container pai para controlar o Stagger (Cascata)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Espaçamento suave entre cada elemento filho
    },
  },
};

// Variantes genéricas para os elementos filhos (Textos, botões, etc.)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Inteligente", "Adaptativo", "Personalizado", "Preditivo"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [words.length]);

  const textVariants = {
    enter: {
      y: 20,
      opacity: 0,
      scale: 0.95,
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  return (
    <div
      id="plataforma"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 items-stretch w-full"
    >
      {/* Card 1 - Left Column - Text Content */}
      <motion.div
        className="h-full max-w-[1300px] flex flex-col justify-center items-center text-center p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full max-w-xl mx-auto flex flex-col justify-center h-full items-center">
          {/* Badge/Pill */}
          <motion.div
            className="w-fit inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 justify-center"
            variants={itemVariants}
          >
            <motion.span
              className="w-2 h-2 bg-cyan-500 rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.span>
            IA Aplicada à Educação
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            variants={itemVariants}
          >
            Aprendizado com IA{" "}
            <span className="inline-block min-w-0 sm:min-w-[220px] md:min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Descriptive Paragraph */}
          <motion.p
            className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Transforme sua experiência educacional com análises inteligentes,
            rotas de aprendizado personalizadas e insights em tempo real movidos
            por inteligência artificial.
          </motion.p>

          {/* CTA Button */}
          <Link to="/register">
            <motion.button
              className="w-fit cursor-pointer inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/50 hover:shadow-xl mb-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Começar Teste Grátis
            </motion.button>
          </Link>
        </div>

        {/* Social Proof */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm text-slate-500 mt-auto text-center sm:text-left"
          variants={itemVariants}
        >
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 1"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 2"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
              alt="Avatar 3"
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
            />
          </div>
          <span>Confiado por +10.000 estudantes e instituições</span>
        </motion.div>
      </motion.div>

      {/* Card 2 - Right Column - Visual/Dashboard */}
      <motion.div
        className="h-full flex items-center justify-center p-4 md:p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden relative"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[380px] md:min-h-[440px] overflow-hidden">
          {/* Glow Neon de Fundo */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Player Embed Direto sem o /embed/ na URL */}
          <DotLottieReact
            src="https://lottie.host/7f4e61c3-6355-40bc-9f47-8112bf5df771/cjkQkF05sn.lottie"
            className="w-full h-[280px] sm:h-[400px] md:h-[450px] max-w-lg relative z-10 scale-110 md:scale-115 transition-transform duration-300"
            autoplay
            loop
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
