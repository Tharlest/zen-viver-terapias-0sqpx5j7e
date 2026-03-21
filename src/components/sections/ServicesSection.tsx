import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import iconeSipat from '@/assets/icone-sipat-2012e.png'
import iconeBreathwork from '@/assets/icone-breathwork-3d370.png'
import iconeQuickMassage from '@/assets/icone-quick-massage-08173.png'

const services = [
  {
    title: 'Shiatsu Corporativo',
    description:
      'Técnica de massagem terapêutica japonesa aplicada sobre a roupa, focada em pontos de tensão para alívio rápido de dores musculares no ambiente de trabalho.',
    icon: iconeQuickMassage,
  },
  {
    title: 'Terapia Auricular',
    description:
      'Estimulação de pontos específicos na orelha para promover o bem-estar físico e mental, reduzindo o estresse, ansiedade e tensões do dia a dia corporativo.',
    icon: 'https://img.usecurling.com/i?q=ear&shape=outline&color=green',
  },
  {
    title: 'Breathwork Corporativo',
    description:
      'Vivências de respiração consciente projetadas para regular o sistema nervoso, melhorar o foco, reduzir a ansiedade e aumentar a produtividade das equipes.',
    icon: iconeBreathwork,
  },
  {
    title: 'SIPAT & Eventos Corporativos',
    description:
      'Participação ativa em semanas de prevenção de acidentes e eventos empresariais, com palestras e práticas de saúde preventiva engajadoras e transformadoras.',
    icon: iconeSipat,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      {/* Anchor targets to ensure menu smooth scroll works regardless of exact link reference */}
      <div id="servicos" className="absolute top-0 -mt-20"></div>
      <div id="services" className="absolute top-0 -mt-20"></div>

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 animate-fade-in-up">
            Serviços Corporativos
          </h2>
          <div className="h-1 w-20 bg-[#2D9B5C] rounded-full mx-auto mb-6"></div>
          <p
            className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Catálogo completo de soluções em bem-estar corporativo para transformar o ambiente da
            sua empresa e cuidar da saúde física e mental dos seus colaboradores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#2D9B5C] transition-all duration-300 group flex flex-col h-full bg-white animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <CardHeader className="text-center pb-4 grow-0">
                <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center bg-slate-50 rounded-full shadow-inner group-hover:scale-110 group-hover:bg-[#2D9B5C]/5 transition-all duration-500 border border-slate-100 p-5">
                  <img
                    src={service.icon}
                    alt={`Ícone ${service.title}`}
                    className="w-full h-full object-contain filter transition-all duration-300 group-hover:opacity-90"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-[#2D9B5C] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center grow">
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
