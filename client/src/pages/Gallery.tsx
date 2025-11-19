import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";

export default function Gallery() {
  // Placeholder gallery items
  const galleryItems = [
    { id: 1, title: "Modern Living Room Roller Shades", category: "Roller Shades", image: "/images/products/roller-shades.jpg" },
    { id: 2, title: "Elegant Drapery Installation", category: "Drapery", image: "/images/products/drapery.jpg" },
    { id: 3, title: "Honeycomb Shades for Energy Efficiency", category: "Honeycomb", image: "/images/products/honeycomb-shades.jpg" },
    { id: 4, title: "Vertical Blinds for Patio Doors", category: "Vertical Blinds", image: "/images/products/vertical-blinds.jpg" },
    { id: 5, title: "Wood Venetian Blinds", category: "Venetian Blinds", image: "/images/products/venetian-blinds.jpg" },
    { id: 6, title: "Smart Motorized Blinds", category: "Motorization", image: "/images/products/motorization.jpg" },
    { id: 7, title: "Outdoor Retractable Awning", category: "Awnings", image: "/images/products/awnings.jpg" },
    { id: 8, title: "Modern Pergola Installation", category: "Pergola", image: "/images/products/pergola.jpg" },
  ];

  return (
    <>
      <SEO 
        title="Project Gallery"
        description="Browse our portfolio of custom blinds, shades, and window covering installations across Ontario. Get inspired for your next project."
        keywords="blinds gallery, window treatment portfolio, installation photos, blinds inspiration, Ontario projects"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <ImageIcon className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
              <p className="text-xl text-muted-foreground">
                Explore our portfolio of custom window treatment installations across Ontario
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{item.category}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8 opacity-90">
                Let's create beautiful, functional window treatments for your space. Schedule a free consultation today.
              </p>
              <Link href="/contact-sales">
                <Button size="lg" variant="secondary">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
