import { cn } from '@/lib/utils'

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Anchor targets to ensure menu smooth scroll works regardless of exact link reference */}
      <div id="quem-somos" className="absolute top-0 -mt-20"></div>
      <div id="sobre" className="absolute top-0 -mt-20"></div>
      <div id="about" className="absolute top-0 -mt-20"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[#2D9B5C]/10 rounded-[2rem] transform rotate-3 scale-105 -z-10 transition-transform duration-500 hover:rotate-6"></div>
            <img
              src="https://img.usecurling.com/p/800/1000?q=professional%20man%20portrait"
              alt="Tharles Teixeira - Fundador da Zen Viver Terapias"
              className="w-full max-w-lg mx-auto rounded-[2rem] shadow-xl object-cover aspect-[4/5] relative z-10 transition-transform duration-500 hover:-translate-y-2"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://img.usecurling.com/ppl/large?gender=male&seed=1'
              }}
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Quem Somos
              </h2>
              <div className="h-1 w-20 bg-[#2D9B5C] rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A <strong>Zen Viver Terapias</strong> nasceu da paixão de{' '}
                <strong>Tharles Teixeira</strong> por transformar vidas através do bem-estar
                holístico. Com anos de dedicação, desenvolvemos metodologias focadas na saúde
                integral corporativa.
              </p>
              <p>
                Nosso propósito é levar equilíbrio para o ambiente de trabalho, compreendendo que
                colaboradores saudáveis e centrados são o maior ativo de qualquer empresa.
              </p>
              <p>
                Oferecemos vivências únicas que combinam técnicas milenares e práticas modernas,
                como o Shiatsu, a Reflexologia e o Breathwork, adaptadas para a realidade dinâmica
                das organizações de hoje, garantindo equipes mais produtivas, focadas e felizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
