import { Link } from 'react-router-dom'
import { Calendar, ChevronRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function BlogIndex() {
  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <div className="pt-24 pb-20 bg-muted min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Blog Zen Viver</h1>
          <p className="text-lg text-muted-foreground">
            Insights sobre saúde ocupacional, regulamentações (NR-1) e estratégias para reter
            talentos através do bem-estar.
          </p>
        </div>

        {/* Featured Post */}
        <Link to={`/blog/${featuredPost.slug}`} className="block mb-12 group">
          <Card className="overflow-hidden border-none shadow-elevation hover:shadow-xl transition-all duration-300 bg-card">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {featuredPost.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {featuredPost.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">{featuredPost.excerpt}</p>
                <span className="font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler artigo completo <ChevronRight className="h-4 w-4" />
                </span>
              </CardContent>
            </div>
          </Card>
        </Link>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group h-full">
              <Card className="h-full overflow-hidden border-none shadow-subtle hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs text-secondary">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="font-semibold text-sm text-primary flex items-center gap-1 mt-auto">
                    Ler mais <ChevronRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
