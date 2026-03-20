import { clientLogos } from '@/lib/data'

export function LogosSection() {
  return (
    <section className="py-8 bg-muted border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Empresas que confiam na nossa expertise
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group w-full opacity-60 hover:opacity-100 transition-opacity">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
          {clientLogos.map((logo, index) => (
            <span
              key={index}
              className="mx-8 text-xl font-display font-bold text-secondary/60 grayscale hover:grayscale-0 transition-all"
            >
              {logo}
            </span>
          ))}
          {clientLogos.map((logo, index) => (
            <span
              key={`dup-${index}`}
              className="mx-8 text-xl font-display font-bold text-secondary/60 grayscale hover:grayscale-0 transition-all"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
