"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, ChevronLeft, Send, Sparkles, MessageCircle } from "lucide-react";

export default function ProdutosPageClient() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-12 md:py-20">
      
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-tr from-rose-200/30 to-amber-100/30 dark:from-rose-950/15 dark:to-amber-950/5 rounded-full blur-3xl -z-10 animate-pulse duration-3000"></div>
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-rose-100/20 dark:bg-neutral-900/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-2xl w-full text-center">
        
        {/* Glassmorphic Container */}
        <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-rose-100/50 dark:border-neutral-800/50 rounded-3xl p-8 md:p-12 shadow-xl shadow-rose-100/10 dark:shadow-none">
          
          {/* Animated Header Icon */}
          {/* <div className="relative inline-flex items-center justify-center w-20 h-20 bg-rose-50 dark:bg-rose-950/30 rounded-2xl mb-8 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-100 dark:from-rose-900/20 dark:to-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ShoppingBag className="w-10 h-10 text-rose-400 dark:text-rose-300 relative z-10 transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
            </span>
          </div> */}

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-500 bg-rose-50 border border-rose-100 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-00/20 mb-6">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Vitrine Virtual
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
            Nossa vitrine está em{" "}
            <span className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">
              construção
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 dark:text-neutral-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
            Estamos preparando uma experiência incrível para você explorar todo o nosso catálogo online. Em breve, novidades e looks deslumbrantes estarão disponíveis a um clique!
          </p>

          {/* Progress Bar (Visual Polish)
          <div className="max-w-md mx-auto mb-10">
            <div className="flex justify-between text-xs text-gray-500 dark:text-neutral-400 font-semibold mb-2">
              <span>Desenvolvimento do Catálogo</span>
              <span>85% Concluído</span>
            </div>
            <div className="w-full h-2.5 bg-gray-100 dark:bg-neutral-800 rounded-full overflow-hidden p-0.5">
              <div className="h-full bg-gradient-to-r from-rose-400 via-rose-300 to-amber-400 rounded-full animate-pulse" style={{ width: "85%" }}></div>
            </div>
          </div> */}

          {/* WhatsApp CTA Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <a 
              href="https://wa.me/559991983229?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Sophy%20Store%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20pe%C3%A7as." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-bold text-white bg-rose-400 rounded-full hover:bg-rose-500 transition-all duration-300 shadow-md hover:shadow-rose-400/25 active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Chamar no WhatsApp
            </a>
            <Link 
              href="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 font-semibold text-gray-700 dark:text-neutral-300 border border-gray-200 dark:border-neutral-800 rounded-full hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-all duration-300 active:scale-98"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
