import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, ArrowLeft, Share2 } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/404" replace />
  }

  // Schema.org structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image,
    datePublished: '2025-01-01T08:00:00+08:00', // Placeholder ISO
    author: {
      '@type': 'Organization',
      name: 'Zen Viver Terapias',
    },
  }

  return (
    <article className="pt-24 pb-20 bg-background min-h-screen">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
        </Link>

        <header className="mb-10 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-sm">
            {post.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Share2 className="h-4 w-4" /> Compartilhar
            </button>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-12"
        />

        <div className="prose prose-lg prose-green mx-auto max-w-3xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Inner CTA Box */}
        <div className="mt-16 max-w-3xl mx-auto bg-[#f0fdf4] border border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            A teoria não muda a cultura. A ação sim.
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Descubra como aplicar essas estratégias na prática. Agende uma avaliação gratuita com a
            equipe Zen Viver e conheça o impacto das nossas terapias in-loco.
          </p>
          <Link to="/#contato">
            <Button size="lg" className="font-bold text-base h-14 px-8">
              AGENDAR AVALIAÇÃO GRATUITA
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
