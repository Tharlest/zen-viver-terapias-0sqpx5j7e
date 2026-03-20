import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=office%20massage%20executive&color=green"
          alt="Executivo recebendo massagem no escritório"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Especialistas em Bem-estar B2B desde 2013
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Seus Colaboradores Voltam ao Trabalho com{' '}
            <span className="text-accent">47% Mais Foco</span>.
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Shiatsu, Reflexologia e Breathwork comprovados. Atenda às exigências da{' '}
            <strong>NR-1/2025</strong> e aumente o engajamento do seu time com o mesmo padrão
            escolhido por grandes players como Seagems, Galp e Eneva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="font-bold text-base h-14 px-8 shadow-lg hover:shadow-primary/25 transition-all"
            >
              AGENDE DEMONSTRAÇÃO CORPORATIVA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-base h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              FALAR NO WHATSAPP
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Sem custos de implantação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span>Adequado à NR-1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
