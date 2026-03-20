import { TrendingUp, BrainCircuit, ShieldAlert } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ValuePropsSection() {
  const props = [
    {
      title: 'ROI Comprovado',
      description:
        'Estudos globais demonstram que cada R$ 1 investido em programas estruturados de bem-estar retorna R$ 6 em economia de saúde e absenteísmo.',
      icon: TrendingUp,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      title: '+47% de Foco',
      description:
        'Dados neurocientíficos apontam que pausas ativas com terapias manuais reativam o córtex pré-frontal, elevando a capacidade de concentração em até 47%.',
      icon: BrainCircuit,
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      title: 'Adequação NR-1/2025',
      description:
        'A nova norma exige gestão ativa de riscos psicossociais. Nossos programas geram evidências documentais de mitigação de estresse e suporte à saúde ocupacional.',
      icon: ShieldAlert,
      color: 'text-destructive',
      bg: 'bg-destructive/10',
      urgent: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que investir em Terapias Corporativas?
          </h2>
          <p className="text-lg text-muted-foreground">
            O bem-estar deixou de ser benefício e tornou-se estratégia central de performance e
            mitigação de riscos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, idx) => (
            <Card
              key={idx}
              className={`border-none shadow-subtle hover:translate-y-[-4px] transition-all duration-300 ${prop.urgent ? 'ring-1 ring-destructive/20' : ''}`}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${prop.bg}`}
                >
                  <prop.icon className={`h-7 w-7 ${prop.color}`} />
                </div>
                <CardTitle className="text-xl">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
