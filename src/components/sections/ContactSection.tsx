import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { services } from '@/lib/data'

const formSchema = z.object({
  nome: z.string().min(2, 'Nome é obrigatório'),
  cargo: z.string().min(2, 'Cargo é obrigatório'),
  empresa: z.string().min(2, 'Empresa é obrigatória'),
  colaboradores: z.string().min(1, 'Informe o número estimado'),
  email: z
    .string()
    .email('Email inválido')
    .refine((val) => !val.endsWith('@gmail.com') && !val.endsWith('@hotmail.com'), {
      message: 'Por favor, use um email corporativo',
    }),
  telefone: z.string().min(10, 'Telefone inválido'),
  servico: z.string().min(1, 'Selecione um serviço de interesse'),
  necessidade: z.string().min(10, 'A mensagem é obrigatória e deve ter pelo menos 10 caracteres'),
})

export function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      cargo: '',
      empresa: '',
      colaboradores: '',
      email: '',
      telefone: '',
      servico: '',
      necessidade: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)

      // Simula o envio do email para o destino especificado
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('Email enviado para atendimento@zenviver.com.br com o payload:', values)

      toast({
        title: 'Sua mensagem foi enviada com sucesso!',
        description: 'Nossa equipe comercial entrará em contato em breve.',
        className: 'bg-primary text-primary-foreground border-none',
      })

      form.reset()
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem.',
        description: 'Por favor, tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-24 bg-muted scroll-m-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/800/800?q=pattern&color=white')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua equipe?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Preencha o formulário para solicitar uma proposta customizada ou agendar a
                demonstração gratuita na sua empresa.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="font-medium">Análise de perfil corporativo</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="font-medium">Proposta sem compromisso</p>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="font-medium">Implantação ágil e guiada</p>
                </li>
              </ul>
            </div>
            <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
              <p className="text-sm font-medium opacity-80">
                Retorno garantido em até 2 horas úteis.
              </p>
            </div>
          </div>

          <div className="p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cargo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cargo (RH/Gestão)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Empresa</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="colaboradores"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nº Colaboradores</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 50-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Corporativo</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone / WhatsApp</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="servico"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Serviço de Interesse</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || undefined}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.id}>
                              {s.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="outro">
                            Consultoria Completa / Não sei ainda
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="necessidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual a principal necessidade hoje?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Alto índice de afastamento, semana da SIPAT..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-6 font-bold text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR PROPOSTA'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
