import { MessageCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/5521991916285?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20corporativos%20da%20Zen%20Viver.'

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-elevation hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="font-medium mr-2">
        <p>Fale conosco no WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  )
}
