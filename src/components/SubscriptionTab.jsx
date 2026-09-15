import React, { useState, useEffect } from "react";
import { Sparkles, Rocket, Building, ShieldCheck } from "lucide-react";
import { supabase } from "../lib/supabase";

const ALL_PLANS = [
  {
    key: "enterprise",
    name: "Plano Enterprise",
    price: "Sob Consulta",
    description: "Acesso base essencial e soluções personalizadas sob demanda.",
    level: 0,
    icon: ShieldCheck,
  },
  {
    key: "estudante",
    name: "Plano Estudante",
    price: "R$ 29,00/mês",
    description:
      "Ideal para alunos que buscam suporte guiado e materiais extras.",
    level: 1,
    icon: Sparkles,
  },
  {
    key: "pro_ia",
    name: "Plano Pro IA",
    price: "R$ 69,00/mês",
    description:
      "Acesso completo ao gerador de mapas mentais, simulados e IA 24/7.",
    level: 2,
    badge: "Recomendado",
    icon: Rocket,
  },
  {
    key: "escolar",
    name: "Plano Escolar",
    price: "R$ 199,00/mês",
    description: "Para turmas e pequenos grupos com métricas de desempenho.",
    level: 3,
    icon: Building,
  },
];

export default function SubscriptionTab() {
  const [currentPlan, setCurrentPlan] = useState("enterprise");
  const [loadingKey, setLoadingKey] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      // Padrão definido para 'enterprise' caso não exista plano no metadata
      const userPlan = session?.user?.user_metadata?.plan || "enterprise";
      setCurrentPlan(userPlan.toLowerCase());
    };
    fetchPlan();
  }, []);

  const handleSimulatePlan = async (planKey) => {
    setLoadingKey(planKey);

    // 1. Atualiza os metadados do usuário no Supabase
    const { data, error } = await supabase.auth.updateUser({
      data: { plan: planKey },
    });

    if (!error && data?.user) {
      // 2. FORÇA a atualização da sessão local para propagar para toda a aplicação imediatamente
      await supabase.auth.refreshSession();
      setCurrentPlan(planKey);
    }
    setLoadingKey(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Gerenciar Assinatura</h2>
        <p className="text-slate-400 text-sm">
          Alterne entre os planos abaixo para testar as permissões de acesso em
          tempo real.
        </p>
      </div>

      {/* Card do Plano Ativo */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Plano Ativo no Momento
          </span>
          <h3 className="text-xl font-bold text-cyan-400 capitalize mt-1">
            {ALL_PLANS.find((p) => p.key === currentPlan)?.name ||
              "Plano Enterprise"}
          </h3>
        </div>
        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
          Simulação Ativa
        </span>
      </div>

      {/* Grid com os 4 Planos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ALL_PLANS.map((plan) => {
          const isCurrent = currentPlan === plan.key;
          const Icon = plan.icon;

          return (
            <div
              key={plan.key}
              className={`relative bg-slate-900/60 border rounded-2xl p-6 flex flex-col justify-between transition-all ${
                isCurrent
                  ? "border-cyan-500 bg-cyan-500/5 shadow-lg shadow-cyan-500/10"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-cyan-500 text-slate-950 font-bold text-[10px] rounded-full uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white">{plan.name}</h4>
                </div>
                <p className="text-2xl font-bold text-white mb-2">
                  {plan.price}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {plan.description}
                </p>
              </div>

              <button
                onClick={() => handleSimulatePlan(plan.key)}
                disabled={isCurrent || loadingKey === plan.key}
                className={`w-full py-2.5 px-4 rounded-xl text-xs cursor-pointer font-semibold transition-all ${
                  isCurrent
                    ? "bg-slate-800 text-slate-500 cursor-default"
                    : "bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold"
                }`}
              >
                {loadingKey === plan.key
                  ? "Atualizando..."
                  : isCurrent
                    ? "Plano Atual"
                    : `Simular ${plan.name}`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
