export function GallerySection() {
  const images = [
    'https://img.usecurling.com/p/600/400?q=office%20massage',
    'https://img.usecurling.com/p/400/600?q=corporate%20wellness',
    'https://img.usecurling.com/p/500/500?q=meditation%20office',
    'https://img.usecurling.com/p/600/400?q=happy%20employees',
    'https://img.usecurling.com/p/400/500?q=ergonomics',
    'https://img.usecurling.com/p/600/600?q=team%20building',
  ]

  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ação na Prática</h2>
          <p className="text-lg text-white/70">
            Transformando a atmosfera de grandes corporações, evento após evento.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative group overflow-hidden rounded-xl"
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
