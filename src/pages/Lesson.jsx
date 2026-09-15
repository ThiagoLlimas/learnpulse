import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Lock,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  FileText,
  Award,
} from "lucide-react";
import { supabase } from "../lib/supabase";

// Mapeamento de níveis de acesso por plano (Enterprise é o plano base Nível 0)
const PLAN_LEVELS = {
  enterprise: 0,
  gratuito: 0,
  estudante: 1,
  pro_ia: 2,
  pro: 2,
  escolar: 3,
};

// Banco de dados simulado de aulas
const LESSONS_DATA = {
  // -------------------------------------------------------------
  // NÍVEL 0: Enterprise / Gratuito (Base)
  // -------------------------------------------------------------
  "intro-ia": {
    id: "intro-ia",
    title: "Introdução à Inteligência Artificial Generativa",
    category: "Essencial",
    requiredPlanName: "Plano Enterprise",
    minLevel: 0,
    chapters: [
      {
        id: "cap-0-1",
        title: "1. Fundamentos dos Modelos LLM",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              A **Inteligência Artificial Generativa** opera sobre Arquiteturas
              de Transformadores (Transformers) e Large Language Models (LLMs),
              treinados para prever a próxima palavra com base no contexto.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl my-4">
              <h4 className="font-semibold text-cyan-400 flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-cyan-400" /> Conceito-Chave
              </h4>
              <p className="text-sm text-slate-400">
                A IA tradicional atua na classificação de dados (ex: detecção de
                spam). A IA Generativa cria materiais inéditos (textos, código,
                diagramas) a partir de requisições estruturadas.
              </p>
            </div>
            <p>
              Plataformas modernas processam múltiplos tipos de entrada (texto,
              áudio, imagens) permitindo raciocínio multimodal em tempo real.
            </p>
          </div>
        ),
      },
      {
        id: "cap-0-2",
        title: "2. Engenharia de Prompt Inicial",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Um prompt bem-sucedido requer a definição clara de 4 pilares
              básicos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
              <li>
                <strong className="text-cyan-400">Persona:</strong> Defina o
                papel da IA (ex: "Aja como um tutor de física").
              </li>
              <li>
                <strong className="text-cyan-400">Contexto:</strong> Explique o
                nível do público de destino.
              </li>
              <li>
                <strong className="text-cyan-400">Tarefa:</strong> Ação
                específica a ser realizada.
              </li>
              <li>
                <strong className="text-cyan-400">Formato:</strong> Exija
                tópicos, tabela ou lista sumarizada.
              </li>
            </ul>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 my-4 font-mono text-xs sm:text-sm text-slate-200">
              <div className="text-slate-500 text-xs mb-2">
                // Exemplo Prático
              </div>
              <p className="text-emerald-400">
                "Atue como professor do ensino médio. Explique a Primeira Lei de
                Newton em 2 parágrafos usando uma analogia com transportes
                públicos."
              </p>
            </div>
          </div>
        ),
      },
    ],
  },

  // -------------------------------------------------------------
  // NÍVEL 1: Plano Estudante
  // -------------------------------------------------------------
  "produtividade-estudantil": {
    id: "produtividade-estudantil",
    title: "Produtividade & Métodos de Estudo com IA",
    category: "Acadêmico",
    requiredPlanName: "Plano Estudante",
    minLevel: 1,
    chapters: [
      {
        id: "cap-1-1",
        title: "1. Técnica Feynman Aplicada com Tutores Virtuais",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              A **Técnica Feynman** consiste em explicar um assunto complexo em
              termos simples até identificar lacunas de compreensão. Com a IA,
              podemos simular esse ciclo interativo.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl my-4">
              <h4 className="font-semibold text-cyan-400 flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Prompt de
                Simulação Feynman
              </h4>
              <p className="text-sm font-mono text-slate-300">
                "Eu vou te explicar o conceito de Recursividade em programação.
                Aja como um avaliador crítico, aponte minhas falhas conceituais
                e faça 2 perguntas para me testar."
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "cap-1-2",
        title: "2. Síntese e Extração de Pontos-Chave de Leitura",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Aprenda a estruturar prompts de sintetização para processar longos
              artigos acadêmicos sem perder nuances teóricas cruciais.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
              <li>Extração automática de tese principal e metodologia.</li>
              <li>Mapeamento de citações relevantes com referências.</li>
              <li>Geração de glossário de termos técnicos.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "cap-1-3",
        title: "3. Cronogramas de Estudo Dinâmicos",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Como transformar o edital de uma prova ou a ementa de uma
              disciplina em uma matriz de estudos semanal considerando a técnica
              de repetição espaçada.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl my-4">
              <h4 className="font-semibold text-emerald-400 flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-emerald-400" /> Desafio do Módulo
              </h4>
              <p className="text-sm text-slate-400">
                Crie um plano de estudos de 4 semanas dividindo 12 tópicos com
                base no seu nível de facilidade/dificuldade em cada assunto.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },

  // -------------------------------------------------------------
  // NÍVEL 2: Plano Pro IA
  // -------------------------------------------------------------
  "mapas-mentais": {
    id: "mapas-mentais",
    title: "Diagramação, Mapas Mentais & Simulados IA",
    category: "Mais Popular",
    requiredPlanName: "Plano Pro IA",
    minLevel: 2,
    chapters: [
      {
        id: "cap-2-1",
        title: "1. Geração de Diagramas com Mermaid.js",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Assinantes do **Plano Pro IA** aprendem a instruir o modelo para
              gerar diagramas de fluxo e mapas mentais em código **Mermaid.js**,
              facilmente exportáveis para ferramentas como Notion e Obsidian.
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-cyan-300 my-4">
              <pre>{`graph TD\n  A[Início do Aprendizado] --> B(Leitura do Conceito)\n  B --> C{Compreendeu?}\n  C -->|Sim| D[Gerar Simulado Adaptativo]\n  C -->|Não| E[Revisão com Mapa Mental]`}</pre>
            </div>
          </div>
        ),
      },
      {
        id: "cap-2-2",
        title: "2. Motor de Simulados Adaptativos",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Aprenda a construir geradores de questões com níveis dinâmicos de
              dificuldade (Fácil, Médio, Difícil) que se adaptam conforme a taxa
              de acerto do estudante.
            </p>
          </div>
        ),
      },
      {
        id: "cap-2-3",
        title: "3. Análise Preditiva de Desempenho",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Utilize algoritmos de análise para identificar pontos cegos e
              padrões de erros recorrentes antes de avaliações oficiais.
            </p>
          </div>
        ),
      },
      {
        id: "cap-2-4",
        title: "4. Automação de Decks do Anki via Flashcards",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Transforme notas de aulas e PDFs diretamente no formato de
              importação CSV/TSV para uso no Anki com pares de Pergunta e
              Resposta otimizados.
            </p>
          </div>
        ),
      },
    ],
  },

  // -------------------------------------------------------------
  // NÍVEL 3: Plano Escolar / Institucional
  // -------------------------------------------------------------
  "gestao-pedagogica-ia": {
    id: "gestao-pedagogica-ia",
    title: "Gestão Pedagógica, Avaliação & IA Institucional",
    category: "Institucional",
    requiredPlanName: "Plano Escolar",
    minLevel: 3,
    chapters: [
      {
        id: "cap-3-1",
        title: "1. Arquitetura de IA para Coortes e Turmas",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              O **Plano Escolar** desbloqueia o ecossistema completo de gestão
              pedagógica. Este capítulo cobre a estruturação de ambientes
              multi-turma com parametrização centralizada de diretrizes
              curriculares.
            </p>
          </div>
        ),
      },
      {
        id: "cap-3-2",
        title: "2. Relatórios Pedagógicos e Mapeamento de Turma",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Geração automatizada de diagnósticos de aprendizagem por turma,
              permitindo identificar alunos que necessitam de apoio pedagógico
              individualizado.
            </p>
          </div>
        ),
      },
      {
        id: "cap-3-3",
        title: "3. Matrizes de Avaliação & Rubricas Personalizadas",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Como padronizar critérios de correção analítica utilizando
              rubricas alinhadas à BNCC (Base Nacional Comum Curricular) ou
              padrões internacionais.
            </p>
          </div>
        ),
      },
      {
        id: "cap-3-4",
        title: "4. LGPD, Ética e Governança de Dados Acadêmicos",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Aplicações práticas de mitigação de viés, anonimização de dados de
              alunos e conformidade integral com a LGPD em ambientes escolares
              digitais.
            </p>
          </div>
        ),
      },
      {
        id: "cap-3-5",
        title: "5. Integrações via API com Sistemas LMS (Moodle, Canvas)",
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Documentação e passo a passo para conectar o motor de IA
              LearnPulse diretamente com plataformas de ensino como Google
              Classroom, Moodle e Canvas.
            </p>
          </div>
        ),
      },
    ],
  },
};

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userPlan, setUserPlan] = useState("enterprise");
  const [loading, setLoading] = useState(true);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const lesson = LESSONS_DATA[id] || LESSONS_DATA["intro-ia"];

  useEffect(() => {
    const fetchUser = async () => {
      // Usar refreshSession força a leitura imediata do metadata atualizado no Supabase
      const {
        data: { session },
      } = await supabase.auth.refreshSession();

      if (!session) {
        navigate("/login");
        return;
      }

      setUserPlan(session.user.user_metadata?.plan || "enterprise");
      setLoading(false);
    };

    fetchUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-medium">
        Carregando conteúdo da aula...
      </div>
    );
  }

  // Checagem de Permissão por Nível do Plano
  const userLevel = PLAN_LEVELS[userPlan?.toLowerCase()] ?? 0;
  const hasAccess = userLevel >= lesson.minLevel;

  const currentChapter = lesson.chapters[currentChapterIndex];
  const progressPercent = Math.round(
    ((currentChapterIndex + 1) / lesson.chapters.length) * 100,
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Topbar da Aula */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao Painel</span>
            </button>
            <div className="h-5 w-px bg-slate-800 hidden sm:block" />
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {lesson.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Progresso: {progressPercent}%
            </span>
            <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo da Aula */}
      {!hasAccess ? (
        /* Bloqueio de Conteúdo por Plano */
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Conteúdo Restrito
              </h2>
              <p className="text-slate-400 text-sm">
                Esta aula requer o{" "}
                <strong className="text-cyan-400">
                  {lesson.requiredPlanName}
                </strong>{" "}
                ou superior. Faça o upgrade no seu painel para desbloquear este
                e outros recursos.
              </p>
            </div>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/20"
            >
              Ir para Gerenciamento de Plano
            </button>
          </div>
        </div>
      ) : (
        /* Leitor Normal da Aula */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu Lateral de Capítulos */}
          <aside className="md:col-span-1 space-y-2">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
              Capítulos do Módulo
            </h3>
            <nav className="space-y-1">
              {lesson.chapters.map((chap, idx) => (
                <button
                  key={chap.id}
                  onClick={() => setCurrentChapterIndex(idx)}
                  className={`w-full cursor-pointer text-left px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-3 ${
                    currentChapterIndex === idx
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span className="truncate">{chap.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Área do Leitor do Capítulo */}
          <main className="md:col-span-3 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
                {currentChapter.title}
              </h1>

              {/* Renderização do Conteúdo */}
              <div className="prose prose-invert max-w-none">
                {currentChapter.content}
              </div>
            </div>

            {/* Navegação Entre Capítulos */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-8">
              <button
                onClick={() =>
                  setCurrentChapterIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={currentChapterIndex === 0}
                className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors py-2 px-4 rounded-xl hover:bg-slate-800"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>

              {currentChapterIndex < lesson.chapters.length - 1 ? (
                <button
                  onClick={() =>
                    setCurrentChapterIndex((prev) =>
                      Math.min(lesson.chapters.length - 1, prev + 1),
                    )
                  }
                  className="flex items-center gap-2 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors py-2.5 px-5 rounded-xl shadow-md shadow-cyan-500/20"
                >
                  Próximo Capítulo <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="flex items-center gap-2 text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors py-2.5 px-5 rounded-xl shadow-md shadow-emerald-500/20"
                >
                  <CheckCircle2 className="w-4 h-4" /> Concluir Módulo
                </button>
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Lesson;
