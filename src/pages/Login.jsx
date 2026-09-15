import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { supabase } from "../lib/supabase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);

    try {
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        setError(translateError(signInError.message));
        return;
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(translateError(err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Botão Voltar */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Início
        </Link>

        {/* Card Principal */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-cyan-500/20">
              LP
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Learn<span className="text-cyan-400">Pulse</span>
            </span>
          </div>

          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Faça login na sua conta
            </h2>
            <p className="text-slate-400">
              Acesse sua conta para continuar sua jornada
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          {/* Link para Cadastro */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Não tem uma conta?{" "}
              <Link
                to="/register"
                className="text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Criar conta gratuita
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
