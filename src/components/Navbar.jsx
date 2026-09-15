import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full max-w-[2000px] mx-auto flex items-center justify-between gap-4 md:gap-6 sticky top-0 z-[100] pt-4 pb-1 px-4 sm:px-6">
      {/* Left Block - Logo Card */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 p-4 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">LP</span>
        </div>
        <span className="text-xl font-bold text-slate-900">LearnPulse</span>
      </div>

      {/* Right Block - Navigation Card */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 p-4 flex items-center gap-4 md:gap-8 relative">
        {/* Hamburger Button - Visible on screens smaller than lg */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links - Hidden on screens smaller than lg */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#plataforma"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            Plataforma
          </a>
          <a
            href="#solucoes"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            Soluções
          </a>
          <a
            href="#recursos"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            Recursos
          </a>
          <a
            href="#precos"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            Preços
          </a>
          <a
            href="#seguranca"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
          >
            Segurança
          </a>
        </div>

        {/* CTA Button - Hidden on screens smaller than lg */}
        <Link
          to="/register"
          className="hidden lg:block cursor-pointer px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-colors text-center"
        >
          Experimentar Grátis
        </Link>
      </div>

      {/* Mobile Menu - Collapsible dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:left-auto md:right-0 mt-2 w-full md:w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-2xl p-5 flex flex-col gap-3 lg:hidden z-[100]">
          <a
            href="#plataforma"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Plataforma
          </a>
          <a
            href="#solucoes"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Soluções
          </a>
          <a
            href="#recursos"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Recursos
          </a>
          <a
            href="#precos"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Preços
          </a>
          <a
            href="#seguranca"
            className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium py-2 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Segurança
          </a>
          <Link
            to="/register"
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experimentar Grátis
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
