import { Badge } from '@/components/ui/badge'
import tharlesImg from '@/assets/foto-tharles-d34df.jpeg'

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Container - Left on Desktop, Top on Mobile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[400px]">
              {/* Decorative background blur */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

              {/* Image wrapper with styling */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-4 border-background bg-muted shadow-2xl">
                <img
                  src={tharlesImg}
                  alt="Tharles Teixeira - Fundador da Zen Viver Terapias"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right on Desktop, Bottom on Mobile */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-primary border-primary/30 bg-primary/5 px-3 py-1 text-sm"
              >
                Quem Somos
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Tharles Teixeira
              </h2>
              <p className="text-xl text-muted-foreground font-medium border-l-2 border-primary pl-4">
                Fundador & Especialista em Terapias Corporativas
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground md:text-lg leading-relaxed">
              <p>
                Com vasta experiência em saúde integrativa, Tharles Teixeira fundou a Zen Viver
                Terapias com o propósito de transformar o ambiente corporativo. Acreditamos que o
                bem-estar dos colaboradores é o pilar fundamental para empresas produtivas e
                inovadoras.
              </p>
              <p>
                Especialista em <strong>Shiatsu</strong>, <strong>Reflexologia</strong> e{' '}
                <strong>Breathwork</strong>, Tharles desenvolveu uma metodologia voltada para o
                alívio imediato do estresse e a promoção da saúde mental e física no local de
                trabalho.
              </p>

              <div className="pt-6 mt-6 border-t border-border/50">
                <blockquote className="italic font-medium text-foreground relative">
                  <span className="text-4xl text-primary/20 absolute -top-4 -left-2 leading-none">
                    "
                  </span>
                  <span className="relative z-10 pl-4 block">
                    Nossa missão é proporcionar pausas estratégicas que revitalizam o corpo e a
                    mente, elevando a qualidade de vida e a performance das equipes.
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
