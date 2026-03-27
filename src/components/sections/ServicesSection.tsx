import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { services } from '@/lib/data'

export function ServicesSection() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null)

  const handleRequestBudget = () => {
    setOpenServiceId(null)
    // Delay scrolling slightly to allow the Radix UI Dialog to completely unmount
    // and remove the body scroll lock (pointer-events & overflow: hidden)
    setTimeout(() => {
      const contactEl = document.getElementById('contato')
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

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
            <Dialog
              key={service.id}
              open={openServiceId === service.id}
              onOpenChange={(isOpen) => setOpenServiceId(isOpen ? service.id : null)}
            >
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
                        src={service.imgIcon}
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
                      src={service.imgIcon}
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
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#2D9B5C] hover:bg-[#2D9B5C]/90 text-white font-bold tracking-wide shadow-md h-12 px-8"
                    onClick={handleRequestBudget}
                  >
                    SOLICITAR ORÇAMENTO
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
