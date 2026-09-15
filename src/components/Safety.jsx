import React, { useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ShieldCheck,
  Lock,
  Server,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const safetySteps = [
  {
    id: "encryption",
    stepNumber: "Passo 01",
    title: "Criptografia de Ponta a Ponta",
    subtitle: "Proteção total em trânsito e em repouso",
    description:
      "Todas as interações com a IA, prompts e relatórios de alunos são criptografados com padrões AES-256 e SSL/TLS.",
    icon: Lock,
    badge: "Segurança de Dados",
    lottieSrc:
      "https://lottie.host/bb57a264-2265-4b75-882d-51259cf6c459/FcZiYIwFjm.lottie",
  },
  {
    id: "lgpd",
    stepNumber: "Passo 02",
    title: "Conformidade LGPD & GDPR",
    subtitle: "Privacidade garantida por design",
    description:
      "Garantimos o direito total à exclusão de métricas e zero compartilhamento com terceiros para treinamento de modelos públicos.",
    icon: ShieldCheck,
    badge: "Privacidade",
    lottieSrc:
      "https://lottie.host/9eb38069-3f3f-440a-8ab0-caff3d46254e/tcP1ethSeX.lottie",
  },
  {
    id: "infrastructure",
    stepNumber: "Passo 03",
    title: "Infraestrutura Isolada",
    subtitle: "Servidores dedicados e monitoramento 24/7",
    description:
      "Ambientes educacionais segredos com backups em tempo real, mitigação contra ameaças e isolamento de banco de dados.",
    icon: Server,
    badge: "Infraestrutura",
    lottieSrc:
      "https://lottie.host/2f50200f-447c-401c-b73a-dd9c46c59907/qEWQjuqrEI.lottie",
  },
];

const Safety = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + safetySteps.length) % safetySteps.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % safetySteps.length);
  };

  return (
    <section
      id="seguranca"
      className="max-w-[1500px] w-full mx-auto h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-10 bg-slate-900 rounded-3xl border border-slate-800 text-white shadow-2xl relative overflow-hidden mt-12 md:mt-16 lg:mt-20"
    >
      {/* Grid Pattern de Fundo Tech */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Header do Painel */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-xl">
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-cyan-500/20">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Segurança & Conformidade
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Segurança em cada camada de inteligência
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2">
            Acompanhe o fluxo de proteção que garante que o aprendizado ocorra
            em um ambiente privado e blindado.
          </p>
        </div>

        {/* Botões de Navegação */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl cursor-pointer bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center shadow-sm active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-xl cursor-pointer bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center shadow-sm active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grade de 3 Blocos (Liga / Desliga) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch min-h-[420px]">
        {safetySteps.map((step, index) => {
          const isActive = index === activeIndex;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`cursor-pointer rounded-2xl transition-all duration-300 relative overflow-hidden select-none flex flex-col justify-between ${
                isActive
                  ? "bg-slate-950 border-2 border-cyan-500/60 shadow-2xl shadow-cyan-500/10 p-6 md:p-8 md:col-span-2 lg:col-span-1"
                  : "bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/80 p-5 opacity-70 hover:opacity-100 md:col-span-1 lg:col-span-1"
              }`}
            >
              {/* BLOCO ATIVO (LIGADO) */}
              {isActive ? (
                <div className="flex flex-col h-full justify-between relative z-10">
                  {/* Fundo Animado Lottie (z-0 / background) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-0">
                    <DotLottieReact
                      src={step.lottieSrc}
                      className="w-full h-full object-cover scale-125"
                      autoplay
                      loop
                    />
                  </div>

                  {/* Topo do Bloco Ativo + Logo Centralizada */}
                  <div className="flex items-center justify-between relative z-10 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
                      {step.stepNumber}
                    </span>

                    {/* Badge da Logo no Centro do Bloco */}
                    <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white shadow">
                        LP
                      </div>
                      <span className="text-xs font-semibold text-slate-200">
                        LearnPulse
                      </span>
                    </div>
                  </div>

                  {/* Ícone Central em Destaque */}
                  <div className="my-6 relative z-10 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                      {step.badge}
                    </span>
                  </div>

                  {/* Rodapé e Textos Destacados */}
                  <div className="relative z-10 backdrop-blur-md bg-slate-900/85 p-4 rounded-xl border border-slate-800">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-cyan-400 text-xs font-medium mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ) : (
                /* BLOCO INATIVO (DESLIGADO) */
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-400">
                      {step.stepNumber}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="my-auto">
                    <span className="text-[10px] font-semibold text-cyan-500 uppercase tracking-wider block mb-1">
                      {step.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-200 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>Clique para ativar</span>
                    <span className="text-cyan-400 font-medium">
                      Ver detalhes →
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Safety;
