import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-rose-50/60 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 border-b border-rose-100/30 dark:border-neutral-800/30">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-rose-200/20 dark:bg-rose-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 dark:bg-amber-900/5 rounded-full blur-3xl -z-10"></div>

      <div className="w-full px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Textos e CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Badge de Novidades */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-rose-500 bg-rose-50 border border-rose-200/50 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-900/30 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              Novidade
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Celebre sua individualidade com{" "}
              <span className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">
                estilo & elegância
              </span>
            </h1>

            {/* Descrição */}
            <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-xl leading-relaxed">
              Descubra uma coleção cuidadosamente curada para a mulher moderna. Peças exclusivas que unem sofisticação, conforto e caimento perfeito. Sinta-se empoderada todos os dias.
            </p>

            {/* Ações (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Link 
                href="/produtos" 
                className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-rose-400 rounded-full hover:bg-rose-500 transition-all duration-300 shadow-md hover:shadow-rose-400/20 active:scale-98"
              >
                Ver Produtos
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <a 
                href="https://wa.me/559991983229?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Sophy%20Store%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20pe%C3%A7as." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 dark:text-neutral-200 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-all duration-300 active:scale-98"
              >
                Chamar no WhatsApp
              </a>
            </div>

            {/* Destaques Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 w-full border-t border-gray-100 dark:border-neutral-900">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/20 text-rose-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-neutral-200">Alta Qualidade</h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">Tecidos selecionados</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-amber-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-neutral-200">Delivery Rápido</h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">Entrega em Açailândia</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/20 text-rose-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 dark:text-neutral-200">Atendimento 1:1</h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">Consultoria de estilo</p>
                </div>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Imagem Decorada */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Box Decorativo Rotacionado atrás da imagem */}
            <div className="absolute inset-0 border border-amber-200/50 dark:border-neutral-800 rounded-[2.5rem] rotate-3 scale-95 -z-10 translate-x-2 translate-y-2"></div>
            <div className="absolute inset-0 bg-rose-100/30 dark:bg-rose-950/10 rounded-[2.5rem] -rotate-3 scale-95 -z-10"></div>
            
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Blur sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-300/10 to-amber-300/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              {/* Contêiner da Imagem */}
              <div className="overflow-hidden rounded-[2rem] border-4 border-white dark:border-neutral-900 shadow-xl dark:shadow-2xl-strong">
                <Image
                  src="/hero_fashion.png"
                  alt="Modelo Sophy Store vestindo look moderno"
                  width={450}
                  height={550}
                  priority
                  className="w-full h-[480px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                />
              </div>

              {/* Tag flutuante */}
              <div className="absolute -bottom-5 -right-3 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <p className="text-xs font-bold text-gray-700 dark:text-neutral-300">Coleção Disponível</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
