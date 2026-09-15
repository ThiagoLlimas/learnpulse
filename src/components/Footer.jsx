import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-full min-h-screen mt-20 flex flex-col justify-between p-6 md:p-10 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* 1. TOP BAR */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-cyan-500/20">
            LP
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Learn<span className="text-cyan-400">Pulse</span>
          </span>
        </div>

        <div className="text-slate-400 text-xs md:text-sm leading-relaxed flex items-center gap-2">
          <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Av. das Tecnologias, 1000 — Parque Tecnológico, Brasil</span>
        </div>

        <a
          href="mailto:contato@learnpulse.ai"
          className="text-cyan-400 text-xs md:text-sm font-semibold hover:underline flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          contato@learnpulse.ai
        </a>
      </div>

      {/* 2. CARD CENTRAL COM ILUSTRAÇÃO LOTTIE */}
      <div className="my-8 w-full flex-1 min-h-[260px] md:min-h-[340px] bg-slate-900/80 rounded-2xl border border-slate-800 p-4 md:p-6 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-2xl h-64 md:h-80 relative z-10">
          <DotLottieReact
            src="https://lottie.host/04319f29-9c56-48c7-99f8-2bd03ded5aaf/OoSS2HYWp7.lottie"
            className="w-full h-full object-contain"
            autoplay
            loop
          />
        </div>
      </div>

      {/* 3. COLUNAS DE NAVEGAÇÃO E REDES SOCIAIS */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 w-full justify-between items-center">
        <div
          className="items-center col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left lg:items-start lg:text-left justify-center"
          style={{ alignItems: "center" }}
        >
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
            Produto
          </h4>
          <ul
            className="space-y-2.5 text-xs md:text-sm text-slate-400"
            style={{ alignItems: "center", textAlign: "center" }}
          >
            <li>
              <a
                href="#plataforma"
                className="hover:text-cyan-400 transition-colors"
              >
                Plataforma
              </a>
            </li>
            <li>
              <a href="#ia" className="hover:text-cyan-400 transition-colors">
                Inteligência Artificial
              </a>
            </li>
            <li>
              <a
                href="#solucoes"
                className="hover:text-cyan-400 transition-colors"
              >
                Soluções
              </a>
            </li>
            <li>
              <a
                href="#seguranca"
                className="hover:text-cyan-400 transition-colors"
              >
                Segurança
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left lg:items-start lg:text-left"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
            Recursos
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
            <li>
              <a
                href="#insights"
                className="hover:text-cyan-400 transition-colors"
              >
                Insights & Blog
              </a>
            </li>
            <li>
              <a
                href="#documentacao"
                className="hover:text-cyan-400 transition-colors"
              >
                Documentação
              </a>
            </li>
            <li>
              <a
                href="#suporte"
                className="hover:text-cyan-400 transition-colors"
              >
                Central de Ajuda
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-cyan-400 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left lg:items-start lg:text-left"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
            Empresa
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
            <li>
              <a
                href="#sobre"
                className="hover:text-cyan-400 transition-colors"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#carreiras"
                className="hover:text-cyan-400 transition-colors"
              >
                Carreiras
              </a>
            </li>
            <li>
              <a
                href="#parceiros"
                className="hover:text-cyan-400 transition-colors"
              >
                Parceiros
              </a>
            </li>
            <li>
              <a
                href="#imprensa"
                className="hover:text-cyan-400 transition-colors"
              >
                Imprensa
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-center text-center md:items-center md:text-center lg:items-start lg:text-left justify-center"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
            Redes Sociais
          </h4>
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all flex items-center justify-center"
              aria-label="Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-all flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 3.5. AVISO DE PROJETO CONCEITUAL */}
      <div className="py-4 border-t border-slate-800/50 bg-slate-900/50 rounded-xl px-4">
        <p className="text-[10px] md:text-xs text-slate-500 text-center leading-relaxed">
          * Projeto de portfólio conceitual. As informações, redes sociais e
          links expostos são meramente ilustrativos e não representam uma
          empresa real.
        </p>
      </div>

      {/* 4. BARRA DE COPYRIGHT E TERMOS */}
      <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <a href="#seguranca" className="hover:text-slate-300 transition-colors">
          Política de Privacidade
        </a>
        <span>© 2026 LearnPulse. Todos os direitos reservados.</span>
        <a href="#seguranca" className="hover:text-slate-300 transition-colors">
          Termos de Uso
        </a>
      </div>

      {/* 5. ATRIBUIÇÃO DE ÍCONES */}
      <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-slate-600">
        <span>Ícones de IA por</span>
        <a
          href="https://www.flaticon.com/free-icons/artificial-intelligence"
          title="artificial intelligence icons"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 hover:underline transition-colors duration-200"
        >
          FACH - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
