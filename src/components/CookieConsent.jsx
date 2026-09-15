import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Verificar se o consentimento já foi dado
    const hasConsent = localStorage.getItem("learnpulse_cookie_consent");

    if (!hasConsent) {
      // Pequeno delay para a animação suave
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 500);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("learnpulse_cookie_consent", "true");
    setIsAnimating(false);
    // Aguardar a animação de saída antes de remover do DOM
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("learnpulse_cookie_consent", "essential");
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDismiss = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 transition-all duration-300 ${
        isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl shadow-slate-900/10 rounded-2xl p-5">
        {/* Header com ícone e botão de fechar */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
              <Cookie className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">
                Privacidade & Cookies
              </h3>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Texto explicativo */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Utilizamos cookies essenciais para personalizar sua experiência de
          aprendizado e coletar métricas de desempenho anônimas.
        </p>

        {/* Link para política de privacidade */}
        <a
          href="#seguranca"
          className="text-sky-600 hover:text-sky-700 text-xs font-medium underline mb-4 inline-block"
        >
          Saiba mais sobre nossa Política de Privacidade
        </a>

        {/* Botões de ação */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl px-4 py-2.5 text-sm transition-all shadow-md shadow-sky-500/20 cursor-pointer"
          >
            Aceitar Todos
          </button>
          <button
            onClick={handleEssentialOnly}
            className="text-slate-500 hover:text-slate-800 text-sm font-medium px-3 py-2 transition-colors cursor-pointer"
          >
            Apenas Essenciais
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
