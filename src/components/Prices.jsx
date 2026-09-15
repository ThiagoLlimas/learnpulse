import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Building2,
  BookOpen,
} from "lucide-react";

const plans = [
  {
    id: "estudante",
    badge: "Essencial",
    title: "Plano Estudante",
    price: "R$ 29",
    period: "/mês",
    description:
      "Rotas de estudo personalizadas, resumos automáticos e assistente de IA 24/7 para tirar dúvidas.",
    icon: GraduationCap,
    lottieSrc:
      "https://lottie.host/d01d2e66-ebff-44a0-9533-72493904c7ad/Kks1H7Atmc.lottie",
  },
  {
    id: "pro",
    badge: "Mais Popular",
    title: "Plano Pro IA",
    price: "R$ 69",
    period: "/mês",
    description:
      "Análises preditivas de desempenho, simulados adaptativos e gerador automático de mapas mentais.",
    icon: Sparkles,
    lottieSrc:
      "https://lottie.host/7f4e61c3-6355-40bc-9f47-8112bf5df771/cjkQkF05sn.lottie",
  },
  {
    id: "escola",
    badge: "Institucional",
    title: "Plano Escolar",
    price: "R$ 199",
    period: "/mês",
    description:
      "Gestão completa de turmas com IA, relatórios de evolução pedagógica e suporte prioritário.",
    icon: Building2,
    lottieSrc:
      "https://lottie.host/b6d41702-232f-48a9-a298-6b0431878a59/TmZxJJuGzx.lottie",
  },
  {
    id: "enterprise",
    badge: "Customizado",
    title: "Plano Enterprise",
    price: "Sob Consulta",
    period: "",
    description:
      "Modelos de IA customizados para sua instituição, integração via API e treinamento dedicado.",
    icon: BookOpen,
    lottieSrc:
      "https://lottie.host/5a20a482-c133-4d19-9c45-7677eaf9376c/HXZ3DNEq9N.lottie",
  },
];

const Prices = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % plans.length);
  };

  return (
    <section
      id="precos"
      className="max-w-[1500px] w-full mx-auto h-full flex flex-col justify-between p-5 md:p-8 lg:p-10 bg-slate-50/50 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden mt-12 md:mt-16 lg:mt-20"
    >
      {/* Cabeçalho do Painel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="max-w-xl">
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Planos & Preços
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Planos sob medida para a sua evolução
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2">
            Escolha o nível de inteligência artificial ideal para acelerar seu
            aprendizado ou transformar sua instituição.
          </p>
        </div>

        {/* Setas de Navegação */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl cursor-pointer bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all flex items-center justify-center shadow-sm hover:shadow active:scale-95"
            aria-label="Plano Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-xl cursor-pointer bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all flex items-center justify-center shadow-sm hover:shadow active:scale-95"
            aria-label="Próximo Plano"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid do Carrossel de Cards (Ajustado para md:grid-cols-2 lg:grid-cols-5) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch min-h-[420px]">
        {plans.map((plan, index) => {
          const isActive = index === activeIndex;
          const Icon = plan.icon;

          return (
            <motion.div
              key={plan.id}
              onClick={() => setActiveIndex(index)}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`cursor-pointer rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden select-none ${
                isActive
                  ? "bg-slate-950 text-white border border-slate-800 shadow-2xl md:col-span-2 lg:col-span-2 min-h-[420px]"
                  : "bg-white text-slate-800 border border-slate-200/80 hover:border-slate-300 hover:shadow-md min-h-[220px] md:min-h-full md:col-span-1 lg:col-span-1"
              }`}
            >
              {/* CARD ATIVO */}
              {isActive ? (
                <div className="flex flex-col h-full justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
                      {plan.badge}
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="w-full flex-1 flex items-center justify-center my-4 relative">
                    <div className="absolute w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="w-full h-48 md:h-56 relative z-10">
                      <DotLottieReact
                        src={plan.lottieSrc}
                        className="w-full h-full object-contain"
                        autoplay
                        loop
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {plan.description}
                    </p>
                    <Link
                      to="/register"
                      className="block w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-sm font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/25 text-center"
                    >
                      Simular {plan.title}
                    </Link>
                  </div>
                </div>
              ) : (
                /* CARD INATIVO */
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">
                      {plan.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900 whitespace-nowrap">
                      {plan.price}
                    </span>
                    <span className="text-xs text-cyan-600 font-semibold hover:underline">
                      Selecionar →
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

export default Prices;
