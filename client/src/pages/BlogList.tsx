import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "the-2900-decision",
    title: "The $2,900 Decision: When Renting Servers Becomes a Financial Prison",
    excerpt: "A single $2,900 investment can save over $3,400 annually with an eight-month ROI. Discover how owning infrastructure transforms your financial future.",
    date: "November 14, 2025",
    readTime: "4 min read",
    image: "/blog-1.jpg",
    category: "Financial Analysis"
  },
  {
    slug: "video-case-study",
    title: "Real-World Validation: Former CTO Explains Why Cloud Repatriation Makes Sense",
    excerpt: "Watch industry expert David Linthicum explain why major enterprises are spending millions to escape cloud vendor lock-in and bring infrastructure home.",
    date: "November 14, 2025",
    readTime: "8 min read",
    image: "/blog-cto-strategy.jpg",
    category: "Case Study",
    featured: true
  },
  {
    slug: "hybrid-cloud-architecture",
    title: "Hybrid Cloud Architecture: How Forward-Thinking CTOs Are Redefining Infrastructure",
    excerpt: "Explore how cutting-edge technology leaders are adopting hybrid cloud models to maintain sovereignty while leveraging cloud benefits strategically.",
    date: "November 12, 2025",
    readTime: "6 min read",
    image: "/blog-enterprise-transformation.jpg",
    category: "Strategy"
  },
  {
    slug: "network-engineers-perspective",
    title: "Infrastructure Sovereignty: Why Network Engineers Are Choosing Ownership Over Rental",
    excerpt: "Network professionals share why they're moving away from pure cloud solutions toward owned infrastructure for better control and economics.",
    date: "November 10, 2025",
    readTime: "5 min read",
    image: "/blog-network-engineer.jpg",
    category: "Technical"
  },
  {
    slug: "cloud-repatriation-trends",
    title: "The Great Cloud Repatriation: Why Enterprises Are Bringing Infrastructure Home",
    excerpt: "Industry trends show a massive shift as companies discover the hidden costs of cloud dependency and invest in infrastructure ownership.",
    date: "November 8, 2025",
    readTime: "7 min read",
    image: "/blog-server-room.jpg",
    category: "Industry Trends"
  },
  {
    slug: "cost-optimization-strategies",
    title: "Infrastructure Cost Optimization: Modern Strategies for Maximum ROI",
    excerpt: "Learn proven strategies for optimizing infrastructure spending while maintaining performance, reliability, and scalability.",
    date: "November 6, 2025",
    readTime: "6 min read",
    image: "/blog-mini-cluster.jpg",
    category: "Cost Optimization"
  },
  {
    slug: "enterprise-transformation",
    title: "Enterprise Infrastructure Transformation: Real-World Success Stories",
    excerpt: "Discover how leading enterprises are achieving dramatic cost savings and performance improvements through hybrid infrastructure strategies.",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "/blog-enterprise-transformation.jpg",
    category: "Case Studies"
  }
];

export default function BlogList() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
      <>
      <SEO 
        title="Infrastructure Insights Blog"
        description="Expert insights on hybrid cloud architecture, cost optimization, and infrastructure modernization strategies."
        keywords="infrastructure blog, cloud insights, IT strategy, hybrid cloud"
      />
      <div className="min-h-screen bg-background">
      <div className="bg-background/60 backdrop-blur-sm border-border/40 py-16">
        <div className="container max-w-6xl">
          <h1 className="text-5xl font-bold mb-4">Infrastructure Insights Blog</h1>
          <p className="text-xl text-muted-foreground">
            Expert perspectives on cloud economics, hybrid architecture, and infrastructure sovereignty
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
      </div>
    </div>
    </>
  );
}
