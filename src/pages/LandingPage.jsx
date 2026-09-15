import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Resources from "../components/Resources";
import Prices from "../components/Prices";
import Safety from "../components/Safety";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full bg-slate-50">
      <Navbar />
      {/* Primeiras seções (Dobra Principal) com o respiro e fundo originais */}
      <div className="relative min-h-screen flex flex-col justify-between p-4 md:p-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <Hero />
      </div>

      {/* Segunda Dobra - Soluções (Livre de paddings externos para ocupar 100% de largura) */}
      <Solutions />
      <Resources />
      <Prices />
      <Safety />
      <Footer />
    </div>
  );
};

export default LandingPage;
