import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  BookOpen,
  User,
  CreditCard,
  LogOut,
  Lock,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import SubscriptionTab from "../components/SubscriptionTab";

// Mapeamento de níveis de acesso por plano (alinhado com Lesson.jsx)
const PLAN_LEVELS = {
  enterprise: 0,
  gratuito: 0, // Fallback de compatibilidade
  estudante: 1,
  pro_ia: 2,
  pro: 2,
  escolar: 3,
};

// Módulos de aprendizado vinculados aos 4 níveis de acesso
const MODULES = [
  {
    id: "intro-ia",
    title: "Introdução à Inteligência Artificial Generativa",
    description: "Fundamentos dos Modelos LLM e Engenharia de Prompt Inicial.",
    requiredLevel: 0,
    badge: "Plano Enterprise",
  },
  {
    id: "produtividade-estudantil",
    title: "Produtividade & Métodos de Estudo com IA",
    description:
      "Técnica Feynman, síntese de leitura e cronogramas de estudo dinâmicos.",
    requiredLevel: 1,
    badge: "Plano Estudante",
  },
  {
    id: "mapas-mentais",
    title: "Diagramação, Mapas Mentais & Simulados IA",
    description:
      "Geração de diagramas Mermaid.js, simulados adaptativos e análise preditiva.",
    requiredLevel: 2,
    badge: "Plano Pro IA",
  },
  {
    id: "gestao-pedagogica-ia",
    title: "Gestão Pedagógica, Avaliação & IA Institucional",
    description:
      "Arquitetura de IA para coortes, relatórios pedagógicos e integrações LMS.",
    requiredLevel: 3,
    badge: "Plano Escolar",
  },
];

// Função auxiliar para formatar o nome do plano na exibição
const formatPlanName = (plan) => {
  if (!plan) return "Enterprise";
  const names = {
    enterprise: "Enterprise",
    gratuito: "Enterprise",
    estudante: "Estudante",
    pro: "Pro IA",
    pro_ia: "Pro IA",
    escolar: "Escolar",
  };
  return names[plan.toLowerCase()] || plan;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userPlan, setUserPlan] = useState("enterprise");
  const [activeTab, setActiveTab] = useState("estudos");
  const [loading, setLoading] = useState(true);
  const [updatingPlan, setUpdatingPlan] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      // Força o refresh da sessão para sincronizar alterações de metadados imediatamente ao trocar de aba
      const {
        data: { session },
      } = await supabase.auth.refreshSession();

      if (!session) {
        navigate("/login");
        return;
      }

      setUser(session.user);
      setUserPlan(session.user.user_metadata?.plan || "enterprise");
      setLoading(false);
    };

    fetchUser();
  }, [navigate, activeTab]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  // Função para simular a troca de plano sem pagar
  const handleSimulateUpgrade = async (newPlan) => {
    setUpdatingPlan(true);
    try {
      const { data, error } = await supabase.auth.updateUser({
        data: { plan: newPlan },
      });

      if (!error && data?.user) {
        await supabase.auth.refreshSession();
        setUserPlan(newPlan);
        setUser(data.user);
      }
    } catch (err) {
      console.error("Erro ao atualizar plano:", err);
    } finally {
      setUpdatingPlan(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white font-medium">
        Carregando painel...
      </div>
    );
  }

  const userLevel = PLAN_LEVELS[userPlan?.toLowerCase()] ?? 0;
  const userName = user?.user_metadata?.full_name || "Estudante";
  const userEmail = user?.email || "";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Topbar / Header do Painel */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-sm text-white shadow-md shadow-cyan-500/20">
              LP
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Learn<span className="text-cyan-400">Pulse</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Status do Plano Atual */}
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Plano {formatPlanName(userPlan)}
            </span>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center cursor-pointer gap-2 text-sm text-slate-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-slate-800"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal do Painel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar / Menu Lateral */}
        <aside className="md:col-span-1 space-y-2">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white text-lg">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <p className="font-semibold text-white text-sm truncate">
                  {userName}
                </p>
                <p className="text-xs text-slate-400 truncate">{userEmail}</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("estudos")}
              className={`w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === "estudos"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Conteúdos & Estudos
            </button>

            <button
              onClick={() => setActiveTab("perfil")}
              className={`w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === "perfil"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <User className="w-4 h-4" />
              Meu Perfil
            </button>

            <button
              onClick={() => setActiveTab("plano")}
              className={`w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === "plano"
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Meu Plano & Assinatura
            </button>
          </nav>
        </aside>

        {/* Área de Conteúdo da Aba */}
        <main className="md:col-span-3">
          {/* ABA 1: ESTUDOS */}
          {activeTab === "estudos" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Seus Módulos de Aprendizado
                </h1>
                <p className="text-slate-400 text-sm">
                  Acesse suas trilhas de estudo e recursos do seu plano.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MODULES.map((module) => {
                  const isLocked = userLevel < module.requiredLevel;

                  return (
                    <div
                      key={module.id}
                      className={`bg-slate-900 border rounded-2xl p-5 flex flex-col justify-between transition-all ${
                        isLocked
                          ? "border-slate-800/80 opacity-75"
                          : "border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {module.badge}
                          </span>
                          {isLocked && (
                            <Lock className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {module.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-4">
                          {module.description}
                        </p>
                      </div>

                      {isLocked ? (
                        <button
                          onClick={() => setActiveTab("plano")}
                          className="w-full py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 cursor-pointer border border-amber-500/30 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                          <Lock className="w-4 h-4" /> Desbloquear no Plano
                          Superior
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate(`/lesson/${module.id}`)}
                          className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                          Acessar Conteúdo <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ABA 2: PERFIL */}
          {activeTab === "perfil" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Meu Perfil
                </h1>
                <p className="text-slate-400 text-sm">
                  Gerencie suas informações pessoais.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 max-w-xl">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                    Nome Completo
                  </label>
                  <p className="text-white text-base font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {userName}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                    Endereço de E-mail
                  </label>
                  <p className="text-white text-base font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {userEmail}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                    Status da Conta
                  </label>
                  <div className="flex items-center gap-2 text-emerald-400 bg-slate-950 p-3 rounded-xl border border-slate-800 text-sm font-medium">
                    <ShieldCheck className="w-5 h-5" /> Conta Verificada e Ativa
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ABA 3: MEU PLANO & ASSINATURA */}
          {activeTab === "plano" && (
            <SubscriptionTab
              userPlan={userPlan}
              onUpdatePlan={handleSimulateUpgrade}
              updatingPlan={updatingPlan}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
