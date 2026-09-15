import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect } from "react";

export default function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftWords = [
    "métricas educacionais",
    "dados de ensino",
    "processos pedagógicos",
    "jornadas de estudo",
  ];

  const rightWords = [
    "retenção de alunos",
    "alto desempenho",
    "evolução contínua",
    "resultados reais",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leftWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [leftWords.length]);

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
    <section
      id="solucoes"
      className="w-full min-h-0 lg:min-h-screen flex items-center py-10 sm:py-14 lg:py-20 bg-slate-50 border-y border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Lado Esquerdo - Topo (lg:self-start) */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4 lg:self-start text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-fit inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 text-cyan-600 rounded-full text-sm font-medium mb-6 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
              Inteligência Pedagógica
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              LearnPulse transforma{" "}
              <span className="inline-block min-w-0 sm:min-w-[220px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {leftWords[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </motion.div>

          {/* Centro - Animação Lottie/SVG solta no painel (lg:self-center) */}
          <motion.div
            className="lg:col-span-4 flex justify-center items-center relative lg:self-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[600px] aspect-square flex items-center justify-center">
              {/* Brilho suave no centro da animação */}
              <div className="absolute w-40 h-40 sm:w-56 sm:h-56 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

              {/* Player Lottie Embed */}
              <DotLottieReact
                src="https://lottie.host/112943b9-5e63-4806-9124-0a77abe1fa2e/xERud9q7AD.lottie"
                className="w-full h-full relative z-10 scale-110"
                autoplay
                loop
              />
            </div>
          </motion.div>

          {/* Lado Direito - Base (lg:self-end) */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-3 lg:self-end text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              em{" "}
              <span className="inline-block min-w-0 sm:min-w-[220px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {rightWords[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-1">
              Insights preditivos em tempo real que capacitam educadores a
              identificar gargalos, personalizar jornadas de ensino e tomar
              decisões estratégicas com total clareza.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
