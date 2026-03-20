import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Building2, ShieldCheck } from 'lucide-react'
import heroBg from '@/assets/generatedimage_1774036240218-ec2db.png'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary/5">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-[#2D9B5C]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md animate-fade-in-up">
            <Sparkles className="mr-2 h-4 w-4 text-emerald-300" />
            <span className="text-emerald-50">Transformando o ambiente corporativo</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Bem-estar que <span className="text-emerald-300">Impulsiona</span> Resultados
          </h1>

          <p
            className="max-w-[42rem] leading-normal text-emerald-50 sm:text-xl sm:leading-8 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Programas corporativos de Shiatsu, Reflexologia e Breathwork para reduzir o estresse,
            aumentar o foco e promover a saúde integral da sua equipe.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-900/20"
            >
              Agendar Avaliação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
            >
              Conhecer Programas
            </Button>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 md:pt-16 w-full max-w-3xl mx-auto border-t border-white/10 mt-12 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-2">
                <Building2 className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-lg">+50 Empresas</h3>
              <p className="text-sm text-emerald-100/70">Atendidas com Excelência</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-2">
                <ShieldCheck className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-lg">100% Seguro</h3>
              <p className="text-sm text-emerald-100/70">Terapeutas Certificados</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white col-span-2 md:col-span-1">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-2">
                <Sparkles className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="font-semibold text-lg">+10k Sessões</h3>
              <p className="text-sm text-emerald-100/70">Realizadas com sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
