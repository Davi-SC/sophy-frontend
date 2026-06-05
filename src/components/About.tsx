import Image from "next/image";
import { Sparkles, Truck, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-rose-50/20 dark:bg-neutral-900/10 relative overflow-hidden">
      {/* Background soft shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-100/10 dark:bg-rose-950/5 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>

      <div className="w-full px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Imagem da Boutique com Efeito de Contorno */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Moldura Dourada Rotacionada */}
            <div className="absolute inset-0 border border-amber-300/40 dark:border-neutral-800 rounded-[2.5rem] -rotate-3 scale-95 translate-x-2 -translate-y-2 -z-10"></div>
            {/* Moldura Rosa Suave */}
            <div className="absolute inset-0 bg-rose-200/20 dark:bg-rose-950/20 rounded-[2.5rem] rotate-3 scale-95 -z-10"></div>

            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Contêiner da Imagem */}
              <div className="overflow-hidden rounded-[2rem] border-4 border-white dark:border-neutral-900 shadow-xl dark:shadow-2xl-strong">
                <Image
                  src="/about_boutique.jpeg"
                  alt="Interior elegante da boutique Sophy Store"
                  width={450}
                  height={550}
                  className="w-full h-[450px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                />
              </div>

              {/* Tag de Marca local */}
              <div className="absolute -top-5 -left-3 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-2">
                <span className="text-base">📍</span>
                <span className="text-xs font-bold text-gray-700 dark:text-neutral-300">
                  Açailândia - MA
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: História e Pilares de Valor */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-rose-400 font-bold uppercase tracking-widest text-xs block">
                Nossa Essência
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                Paixão por Vestir a sua Melhor Versão
              </h2>
              <div className="w-16 h-1 bg-rose-300 rounded-full"></div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-neutral-300 leading-relaxed text-base">
              <p>
                Nascida com o desejo de trazer uma curadoria única de moda
                feminina, a{" "}
                <strong className="text-gray-800 dark:text-white font-semibold">
                  Sophy Store
                </strong>{" "}
                é focada na mulher que valoriza a elegância no dia a dia.
                Acreditamos que o look ideal vai muito além do tecido: é uma
                expressão de amor-próprio e autoconfiança.
              </p>
              <p>
                Selecionamos cada peça a dedo, priorizando tecidos de caimento
                impecável, toque confortável e costuras resistentes. Nossa
                missão é fazer você se sentir linda, empoderada e única em
                qualquer ocasião, com a facilidade e comodidade do atendimento
                online.
              </p>
            </div>

            {/* Pilares de Valor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-rose-100/50 dark:border-neutral-900">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    Curadoria Exclusiva
                  </h4>
                </div>
                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                  Peças únicas e edições limitadas selecionadas para destacar
                  sua beleza.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 text-amber-500">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    Delivery Local
                  </h4>
                </div>
                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                  Entrega ágil e segura em toda Açailândia - MA, com carinho na
                  sua porta.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-400">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    Atendimento 1:1
                  </h4>
                </div>
                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                  Ajuda personalizada pelo WhatsApp para encontrar seu tamanho e
                  look ideal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
