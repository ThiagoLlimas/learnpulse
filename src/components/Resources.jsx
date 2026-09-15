import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Sparkles,
  Bell,
  Zap,
  TrendingUp,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Resources() {
  return (
    <section
      id="recursos"
      className="w-full min-h-0 lg:min-h-screen flex items-center py-10 sm:py-14 md:py-20 bg-white border-y border-slate-200/60 overflow-hidden"
    >
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 lg:px-12">
        {/* Cabeçalho */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-fit inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Recursos da Plataforma
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Onde dados educacionais se tornam inteligência
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Análises preditivas em tempo real projetadas para instituições de
            ensino modernas.
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Card Esquerdo Alto (5 Colunas) */}
          <motion.div
            className="lg:col-span-5 bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Miras nos cantos */}
            <span className="absolute top-3 left-3 w-2 h-2 border-t border-l border-slate-400" />
            <span className="absolute top-3 right-3 w-2 h-2 border-t border-r border-slate-400" />
            <span className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-slate-400" />
            <span className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-slate-400" />

            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Clareza Pedagógica
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Acompanhe a evolução de turmas e alunos em tempo real
              </p>

              <div className="mt-6">
                <span className="text-slate-500 text-xs font-mono uppercase tracking-wider block">
                  Engajamento Geral
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900">
                    94.8%
                  </span>
                  <span className="text-emerald-600 font-semibold text-sm flex items-center gap-0.5">
                    ↑ 12.4%{" "}
                    <span className="text-slate-400 font-normal text-xs">
                      vs. mês anterior
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* DESTAQUE 1: EMBED LOTTIE 1 */}
            <div className="my-6 relative w-full rounded-2xl bg-white border border-slate-200/80 p-2 shadow-inner flex items-center justify-center min-h-[220px] overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/8b214e34-e453-41a6-b0ee-6d9586eee290/mWmNYBSedi.lottie"
                loop
                autoplay
                className="w-full h-56 scale-155"
              />
            </div>

            <div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entenda o fluxo de aprendizado, desempenho de turmas e notas sem
                a necessidade de relatórios manuais.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200/60">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Visão Unificada
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Notas, presença e engajamento em um só lugar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Tempo Real
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Métricas pedagógicas sincronizadas na hora.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita (7 Colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 md:gap-8">
            {/* Card Superior Direito Largo */}
            <motion.div
              className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm flex flex-col md:flex-row justify-between gap-6 items-center flex-1"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="absolute top-3 left-3 w-2 h-2 border-t border-l border-slate-400" />
              <span className="absolute top-3 right-3 w-2 h-2 border-t border-r border-slate-400" />
              <span className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-slate-400" />
              <span className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-slate-400" />

              <div className="flex-1">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-sm">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Inteligência Preditiva
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Preveja riscos de evasão e gargalos
                </p>

                <div className="mt-6">
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider block">
                    Precisão na Retenção
                  </span>
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-1 block">
                    98.2%
                  </span>
                </div>
              </div>

              {/* DESTAQUE 2 e 3: DOIS LOTTIES SOBREPOSTOS */}
              <div className="relative w-[270px] sm:w-[320px] md:w-80 h-52 sm:h-60 mx-auto md:mx-0 flex items-center justify-center flex-shrink-0">
                {/* SVG 3 (CAMADA DE TRÁS) */}
                <div className="absolute right-0 bottom-1 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-slate-900 border border-slate-800 p-1 shadow-md flex items-center justify-center z-10 transform translate-x-2 overflow-hidden">
                  <DotLottieReact
                    src="https://lottie.host/b6d41702-232f-48a9-a298-6b0431878a59/TmZxJJuGzx.lottie"
                    className="w-full h-full relative z-10 scale-105"
                    autoplay
                    loop
                  />
                </div>

                {/* SVG 2 (CAMADA DA FRENTE) */}
                <div className="absolute left-0 top-1 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-white border border-slate-200/90 p-1 shadow-xl flex items-center justify-center z-20 overflow-hidden">
                  <DotLottieReact
                    src="https://lottie.host/5a20a482-c133-4d19-9c45-7677eaf9376c/HXZ3DNEq9N.lottie"
                    className="w-full h-full relative z-10 scale-105"
                    autoplay
                    loop
                  />
                </div>
              </div>
            </motion.div>

            {/* Linha Inferior com 2 Cards Lado a Lado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card Inferior 1 */}
              <motion.div
                className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 relative overflow-hidden shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="absolute top-3 left-3 w-2 h-2 border-t border-l border-slate-400" />
                <span className="absolute top-3 right-3 w-2 h-2 border-t border-r border-slate-400" />
                <span className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-slate-400" />
                <span className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-slate-400" />

                <div>
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Recomendações Práticas
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Ações diretas para a equipe pedagógica
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Otimizar Plano de Reforço
                  </span>
                  <p className="text-xs text-slate-500">
                    3 turmas demandam intervenção preventiva em exatas antes do
                    fim da unidade.
                  </p>
                </div>
              </motion.div>

              {/* Card Inferior 2 */}
              <motion.div
                className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 relative overflow-hidden shadow-sm flex flex-col justify-between"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="absolute top-3 left-3 w-2 h-2 border-t border-l border-slate-400" />
                <span className="absolute top-3 right-3 w-2 h-2 border-t border-r border-slate-400" />
                <span className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-slate-400" />
                <span className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-slate-400" />

                <div>
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 shadow-sm">
                    <Bell className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Monitoramento Contínuo
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Esteja à frente das alterações de desempenho
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Alerta Preditivo
                  </span>
                  <p className="text-xs text-slate-500">
                    Oscilação atípica de frequência detectada em módulos
                    avançados.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
