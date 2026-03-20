import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { services } from '@/lib/data'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false)
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Quem Somos', id: 'sobre' },
    { name: 'Serviços Corporativos', id: 'servicos', isDropdown: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', id: 'contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight"
        >
          <Leaf className="h-6 w-6" />
          <span>
            Zen Viver<span className="text-secondary">Terapias</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.name} className="relative group cursor-pointer">
                <span
                  className={cn(
                    'flex items-center gap-1 font-medium text-sm transition-colors hover:text-primary',
                    isScrolled || !isHome ? 'text-secondary' : 'text-white/90 hover:text-white',
                  )}
                >
                  {link.name} <ChevronDown className="h-4 w-4" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleScrollTo('servicos')}
                      className="text-left px-3 py-2 text-sm rounded hover:bg-muted text-secondary"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : link.path ? (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-medium text-sm transition-colors hover:text-primary',
                  isScrolled || !isHome ? 'text-secondary' : 'text-white/90 hover:text-white',
                )}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id!)}
                className={cn(
                  'font-medium text-sm transition-colors hover:text-primary',
                  isScrolled || !isHome ? 'text-secondary' : 'text-white/90 hover:text-white',
                )}
              >
                {link.name}
              </button>
            ),
          )}
          <Button
            onClick={() => handleScrollTo('contato')}
            variant={isScrolled || !isHome ? 'default' : 'secondary'}
            className={cn(
              'font-bold',
              !isScrolled && isHome && 'bg-white text-primary hover:bg-white/90',
            )}
          >
            SOLICITAR PROPOSTA
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(isScrolled || !isHome ? 'text-secondary' : 'text-white')}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col gap-6 pt-12">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              {navLinks.map((link) =>
                link.path ? (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-secondary"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleScrollTo(link.id!)}
                    className="text-left text-lg font-medium text-secondary"
                  >
                    {link.name}
                  </button>
                ),
              )}
              <Button onClick={() => handleScrollTo('contato')} className="mt-4 font-bold w-full">
                SOLICITAR PROPOSTA
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
