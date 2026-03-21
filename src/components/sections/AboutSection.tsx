import aboutImage from '@/assets/img_0371-c7c78.jpg'

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Column */}
          <div className="w-full order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Logo Zen Viver Terapias na parede"
              className="w-full h-auto object-cover rounded-[2rem] shadow-xl aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[600px]"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Quem Somos
              </h2>
              <div className="h-1.5 w-20 bg-primary mt-6 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A <strong className="text-slate-900 font-semibold">Zen Viver Terapias</strong>{' '}
                nasceu da paixão de{' '}
                <strong className="text-slate-900 font-semibold">Tharles Teixeira</strong> por
                transformar vidas através do cuidado holístico. Com anos de dedicação, desenvolvemos
                metodologias focadas na saúde integral e no bem-estar.
              </p>
              <p>
                Nosso propósito é levar equilíbrio para o ambiente de trabalho, compreendendo que
                colaboradores saudáveis e centrados são o maior ativo de qualquer empresa.
              </p>
              <p>
                Oferecemos vivências únicas que combinam sabedorias milenares e práticas modernas,
                como o Shiatsu, Reflexologia e Breathwork, adaptadas para as necessidades do mundo
                corporativo atual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
