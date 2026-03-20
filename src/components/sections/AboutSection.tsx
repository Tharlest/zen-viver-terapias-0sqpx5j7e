import { Check } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted scroll-m-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4" />
            <img
              src="https://img.usecurling.com/ppl/large?gender=male&seed=tharles"
              alt="Tharles Teixeira - Fundador da Zen Viver"
              className="relative z-10 rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-elevation hidden md:block animate-float">
              <p className="font-bold text-3xl text-primary mb-1">13+</p>
              <p className="text-sm font-medium text-secondary/80 leading-tight">
                Anos de
                <br />
                Experiência
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              A Base Científica do Nosso Cuidado
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada por <strong>Tharles Teixeira</strong>, profissional com background sólido em
              Biomedicina e mais de uma década de imersão profunda na Medicina Tradicional Chinesa
              (MTC).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A Zen Viver Terapias não oferece apenas "massagens". Nós entregamos protocolos
              terapêuticos validados que mapeiam e tratam a raiz da tensão corporativa, unindo a
              sabedoria milenar oriental com indicadores modernos de saúde ocupacional.
            </p>

            <ul className="space-y-4">
              {[
                'Metodologia exclusiva desenvolvida em 13 anos de prática clínica.',
                'Atendimento focado em resultados mensuráveis para o RH.',
                'Profissionais rigorosamente selecionados e treinados.',
                'Flexibilidade total para se adaptar à rotina da sua empresa.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-accent/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-secondary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
