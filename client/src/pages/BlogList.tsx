import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "choosing-blinds-for-every-room",
    title: "The Ultimate Guide to Choosing Blinds for Every Room in Your Home",
    excerpt: "Discover how to select the perfect window coverings for each space in your home. From light control to privacy, energy efficiency to style—make informed decisions that enhance your living spaces.",
    date: "November 18, 2025",
    readTime: "8 min read",
    image: "/images/products/choosing-blinds-header.jpg",
    category: "Design Guide",
    featured: true
  }
];

export default function BlogList() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
      <>
      <SEO 
        title="Blinds & Window Covering Tips - In2itive Blinds Blog"
        description="Expert advice on choosing, installing, and maintaining window blinds, shades, and coverings. Design tips, product guides, and industry insights for Ontario homeowners."
        keywords="blinds blog, window covering tips, design guide, blinds advice, home decor Ontario"
      />
      <div className="min-h-screen bg-background">
      <div className="bg-muted/30 backdrop-blur-sm border-border/40 py-16">
        <div className="container max-w-6xl">
          <h1 className="text-5xl font-bold mb-4">Blinds & Design Tips</h1>
          <p className="text-xl text-muted-foreground">
            Expert advice on window coverings, interior design, and creating beautiful spaces
          </p>
        </div>
      </div>

      <div className="container max-w-6xl py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="text-sm font-semibold text-primary mb-4">FEATURED POST</div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="w-fit group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-background/90 text-foreground text-xs font-semibold rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <Card className="p-12 bg-muted/30">
            <h3 className="text-2xl font-bold mb-4">More Articles Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're working on more helpful guides about window treatments, design trends, and home improvement tips.
            </p>
            <Link href="/contact-sales">
              <Button>
                Get Your Free Consultation
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
