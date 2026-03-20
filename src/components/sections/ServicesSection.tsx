import { services } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import * as Icons from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-background scroll-m-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Catálogo de Serviços Corporativos</h2>
          <p className="text-lg text-muted-foreground">
            Soluções modulares desenhadas para integrar a rotina da sua empresa sem interromper a
            produtividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = (Icons as any)[service.icon]
            return (
              <Card
                key={service.id}
                className="group hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
