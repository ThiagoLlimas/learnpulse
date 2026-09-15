import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { supabase } from "../lib/supabase";

const Register = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const translateError = (message) => {
    if (!message) return "Ocorreu um erro inesperado. Tente novamente.";
    if (message.includes("User already registered"))
      return "Este e-mail já está cadastrado.";
    if (message.includes("Password should be at least 6 characters"))
      return "A senha deve conter no mínimo 6 caracteres.";
    if (message.includes("Unable to validate email address"))
      return "Por favor, insira um e-mail válido.";
    if (message.includes("Invalid login credentials"))
      return "E-mail ou senha incorretos.";
    return "Não foi possível concluir o cadastro. Tente novamente em instantes.";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // 1. Validação de campos vazios
    if (!nome.trim() || !email.trim() || !senha) {
      setError("Por favor, preencha todos os campos do formulário.");
      return;
    }

    // 2. Validação do nome (mínimo de 3 caracteres, sem ser apenas números e com caracteres válidos)
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    if (
      nome.trim().length < 3 ||
      /^\d+$/.test(nome.trim()) ||
      !nameRegex.test(nome.trim())
    ) {
      setError(
        "Por favor, insira um nome válido (mínimo de 3 letras e sem conter apenas números).",
      );
      return;
    }

    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password: senha,
        options: {
          data: {
            full_name: nome.trim(),
          },
        },
      });

      if (signUpError) {
        setError(translateError(signUpError.message));
        return;
      } else {
        setSuccess(true);
        setNome("");
        setEmail("");
        setSenha("");

        // Redirect to login after successful registration
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError(translateError(err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Lado Esquerdo - Branding & SVGs */}
        <div className="bg-slate-900/60 border-r border-slate-800 p-8 md:p-12 flex flex-col justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-cyan-500/20">
              LP
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Learn<span className="text-cyan-400">Pulse</span>
            </span>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experimente o poder da IA na educação
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              Avaliação gratuita de 14 dias. Sem cartão de crédito. Cancele
              quando quiser.
            </p>

            {/* Container para Ilustrações/SVGs */}
            <div className="relative w-full aspect-video bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 flex items-center justify-center mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <DotLottieReact
                  src="https://lottie.host/4ba47dc5-d365-4d67-96af-7fcf9743e19e/Smd7Hybxkf.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Mini Card de Depoimento */}
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                  alt="Maria Clara"
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/40 shadow-sm flex-shrink-0"
                />
                <div>
                  <p className="text-slate-300 text-sm mb-1">
                    "A LearnPulse transformou como nossos alunos aprendem.
                    Resultados visíveis em apenas 2 semanas."
                  </p>
                  <p className="text-slate-500 text-xs font-medium">
                    Maria Clara, Diretora Pedagógica
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer do Lado Esquerdo */}
          <div className="text-slate-500 text-xs">
            © 2026 LearnPulse. Todos os direitos reservados.
          </div>
        </div>

        {/* Lado Direito - Formulário de Cadastro */}
        <div className="bg-slate-950 p-8 md:p-12 flex flex-col justify-center">
          {/* Botão Voltar */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>

          {/* Header do Formulário */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Crie sua conta gratuita
            </h2>
            <p className="text-slate-400">
              Comece sua jornada de aprendizado inteligente hoje mesmo.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-4 py-3 rounded-xl text-sm">
                Conta criada com sucesso! Redirecionando para login...
              </div>
            )}

            {/* Campo Nome */}
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">
                Nome completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Campo Email */}
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-slate-400 text-sm font-medium mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Botão CTA */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Criando conta..." : "Criar Conta Gratuita"}
            </button>
          </form>

          {/* Link para Login */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Entrar
              </Link>
            </p>
          </div>

          {/* Termos */}
          <div className="mt-6 text-center">
            <p className="text-slate-600 text-xs">
              Ao criar uma conta, você concorda com nossos{" "}
              <Link
                to="/termos"
                className="text-slate-500 hover:text-slate-400 underline"
              >
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link
                to="/privacidade"
                className="text-slate-500 hover:text-slate-400 underline"
              >
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
