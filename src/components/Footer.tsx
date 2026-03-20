import { Link } from 'react-router-dom'
import {
  Leaf,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-white/80 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1 */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-bold text-xl tracking-tight"
            >
              <Leaf className="h-6 w-6 text-primary" />
              <span>Zen Viver</span>
            </Link>
            <p className="text-sm text-white/60">
              Bem-estar corporativo desde 2013. Transformando ambientes de trabalho através da saúde
              integrada.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Acesso Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#servicos" className="hover:text-primary transition-colors">
                  Serviços Corporativos
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog & Artigos
                </Link>
              </li>
              <li>
                <a href="/#sobre" className="hover:text-primary transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="/#contato" className="hover:text-primary transition-colors">
                  Solicitar Proposta
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Rua Senador Dantas, 75 — Sala 2016
                  <br />
                  Centro, Rio de Janeiro - RJ
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>
                  Telefone: (21) 99289-7044
                  <br />
                  WhatsApp: (21) 99191-6285
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Atendimento: Seg a Sex, 09:00–22:30</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Col 5 - Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50">
          <p>
            Zen Viver Terapias Corporativas © {new Date().getFullYear()}. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>CNPJ: 22.041.285/0001-41</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-white">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
