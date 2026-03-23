import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import iconeSipat from '@/assets/icone-sipat-2012e.png'
import iconeBreathwork from '@/assets/icone-breathwork-3d370.png'
import iconeQuickMassage from '@/assets/icone-quick-massage-08173.png'

const services = [
  {
    title: 'Shiatsu Corporativo',
    description:
      'Técnica de massagem terapêutica japonesa aplicada sobre a roupa, focada em pontos de tensão para alívio rápido de dores musculares no ambiente de trabalho.',
    fullDescription:
      'O Shiatsu Corporativo é uma intervenção rápida que atua diretamente nos pontos de tensão gerados pelo trabalho em escritório. Utilizando a pressão dos dedos, palmas das mãos e alongamentos, o terapeuta consegue liberar o fluxo de energia do corpo, proporcionando alívio imediato do estresse, melhora na postura e aumento da concentração. Cada sessão dura em média de 15 a 20 minutos, sendo perfeitamente adaptável à dinâmica corporativa.',
    benefits: [
      'Alívio de dores musculares e articulares',
      'Redução drástica do estresse e ansiedade',
      'Melhora significativa da postura',
      'Aumento imediato da produtividade e foco',
    ],
    icon: iconeQuickMassage,
  },
  {
    title: 'Terapia Auricular',
    description:
      'Estimulação de pontos específicos na orelha para promover o bem-estar físico e mental, reduzindo o estresse, ansiedade e tensões do dia a dia corporativo.',
    fullDescription:
      'A Auriculoterapia, ou Terapia Auricular, é uma técnica derivada da acupuntura que utiliza pequenas sementes ou esferas para estimular pontos específicos no pavilhão auricular. Como a orelha é um microssistema que representa todo o corpo humano, a estimulação desses pontos ajuda a reequilibrar o organismo, tratando queixas físicas e emocionais muito comuns no ambiente corporativo, como insônia, enxaqueca e tensões nervosas.',
    benefits: [
      'Tratamento eficaz de enxaquecas e cefaleias',
      'Melhora perceptível na qualidade do sono',
      'Reequilíbrio emocional e redução da irritabilidade',
      'Procedimento extremamente rápido e indolor',
    ],
    icon: 'https://img.usecurling.com/i?q=ear&shape=outline&color=green',
  },
  {
    title: 'Breathwork Corporativo',
    description:
      'Vivências de respiração consciente projetadas para regular o sistema nervoso, melhorar o foco, reduzir a ansiedade e aumentar a produtividade das equipes.',
    fullDescription:
      'O Breathwork Corporativo é uma prática guiada de respiração consciente que ajuda os colaboradores a acessarem estados de relaxamento profundo e clareza mental em apenas alguns minutos. Através de técnicas respiratórias específicas, é possível regular o sistema nervoso autônomo, diminuindo a produção de cortisol (o hormônio do estresse) e aumentando a oxigenação cerebral, o que resulta em melhores tomadas de decisão e maior resiliência emocional para a equipe.',
    benefits: [
      'Redução rápida e efetiva da ansiedade',
      'Aumento duradouro da clareza mental',
      'Melhora na oxigenação do cérebro',
      'Equilíbrio e regulação do sistema nervoso',
    ],
    icon: iconeBreathwork,
  },
  {
    title: 'SIPAT & Eventos Corporativos',
    description:
      'Participação ativa em semanas de prevenção de acidentes e eventos empresariais, com palestras e práticas de saúde preventiva engajadoras e transformadoras.',
    fullDescription:
      'Nossa participação na SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho) e em outros eventos corporativos vai muito além das palestras tradicionais monótonas. Levamos vivências práticas e interativas que realmente engajam os colaboradores com a sua própria saúde. Combinamos informações essenciais sobre ergonomia, saúde mental e qualidade de vida com demonstrações práticas das nossas terapias, criando um evento verdadeiramente memorável que atende perfeitamente às novas exigências da NR-1.',
    benefits: [
      'Adequação total às normas atualizadas da NR-1',
      'Engajamento real e ativo dos colaboradores',
      'Ações práticas, dinâmicas e vivenciais',
      'Conscientização profunda sobre saúde preventiva',
    ],
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card
                  className="cursor-pointer border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#2D9B5C] transition-all duration-300 group flex flex-col h-full bg-white animate-fade-in-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9B5C] focus-visible:ring-offset-2"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  tabIndex={0}
                  role="button"
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
                  <CardContent className="text-center grow flex flex-col justify-between">
                    <CardDescription className="text-base text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="mt-auto pt-4">
                      <span className="text-[#2D9B5C] font-semibold text-sm group-hover:underline underline-offset-4 flex items-center justify-center gap-1">
                        Ver detalhes <span className="text-lg leading-none">&rarr;</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] gap-6">
                <DialogHeader className="space-y-4">
                  <div className="mx-auto w-20 h-20 flex items-center justify-center bg-slate-50 rounded-full shadow-inner border border-slate-100 p-4">
                    <img
                      src={service.icon}
                      alt={`Ícone ${service.title}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <DialogTitle className="text-2xl text-center text-slate-900">
                    {service.title}
                  </DialogTitle>
                  <DialogDescription className="text-center text-base text-slate-600">
                    {service.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-100 shadow-sm">
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base text-justify">
                      {service.fullDescription}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg flex items-center gap-3">
                      <span className="w-8 h-1 rounded-full bg-[#2D9B5C] inline-block"></span>
                      Principais Benefícios
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-100 shadow-sm transition-colors hover:border-[#2D9B5C]/30"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#2D9B5C] mt-1.5 mr-3 flex-shrink-0" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-2 flex justify-center pt-6 border-t border-slate-100">
                  <DialogClose asChild>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[#2D9B5C] hover:bg-[#2D9B5C]/90 text-white font-bold tracking-wide shadow-md h-12 px-8"
                      onClick={() => {
                        setTimeout(() => {
                          document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                        }, 150)
                      }}
                    >
                      SOLICITAR ORÇAMENTO
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
