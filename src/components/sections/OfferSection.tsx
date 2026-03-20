import { CalendarClock, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function OfferSection() {
  // Próxima segunda-feira
  const nextAvailability = new Date()
  nextAvailability.setDate(nextAvailability.getDate() + ((1 + 7 - nextAvailability.getDay()) % 7))
  const dateStr = nextAvailability.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })

  return (
    <section className="py-12 px-4 -mt-8 relative z-20 container mx-auto">
      <Card className="bg-[#f0fdf4] border-accent/30 shadow-elevation overflow-hidden relative">
        <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-destructive font-bold text-sm mb-3 bg-destructive/10 px-3 py-1 rounded-full">
              <Zap className="h-4 w-4" />
              Apenas 3 empresas por mês
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Demonstração de Serviços para Sua Empresa
            </h2>
            <p className="text-secondary/80 mb-6 max-w-2xl text-lg">
              Receba nossa equipe in-loco para uma vivência real. Inclui: Avaliação de Clima
              Gratuita, Sessão de Breathwork Coletiva, Quick Massage para decisores e Relatório de
              Impacto.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-secondary/70">
              <CalendarClock className="h-5 w-5 text-primary" />
              <span>
                Próxima disponibilidade: <strong className="text-secondary">{dateStr}</strong>
              </span>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Button
              size="lg"
              className="w-full md:w-auto text-base h-14 px-8 shadow-md"
              onClick={() =>
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              SOLICITAR DEMONSTRAÇÃO
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
