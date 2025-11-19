import { SEO } from "@/components/SEO";
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Home as HomeIcon, Sparkles, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
      <>
      <SEO 
        title="Premium Custom Blinds & Window Coverings Ontario"
        description="In2itive Blinds offers premium custom blinds, shades, and window coverings for residential and commercial spaces in Ontario. Free consultation, professional installation, motorization available."
        keywords="blinds Ontario, window coverings, custom blinds, motorized blinds, roller shades, vertical blinds, drapery, awnings"
      />
      <div className="min-h-screen">
      <HeroSlider />
      
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transform Your Space with Custom Window Coverings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium blinds, shades, and drapery tailored to your style and space. From modern motorized solutions to elegant traditional designs, we bring beauty and function to every window.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card-light hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Sparkles className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Custom Design</CardTitle>
                <CardDescription>
                  Every window treatment is custom-made to your exact specifications with premium materials and expert craftsmanship
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card-light hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Smart Home Integration</CardTitle>
                <CardDescription>
                  Motorized blinds with seamless integration to Somfy, Lutron, and other smart home systems for ultimate convenience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card-light hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Professional Installation</CardTitle>
                <CardDescription>
                  Expert installation by our trained team ensures perfect fit and flawless operation for years to come
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact-sales">
              <Button size="lg" className="gap-2">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Product Range</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From classic to contemporary, we offer a comprehensive selection of window treatments for every style and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/products/roller-shades">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Roller Shades</CardTitle>
                  <CardDescription>
                    Clean, modern design with light-filtering and blackout options. Perfect for any room.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/vertical-blinds">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Vertical Blinds</CardTitle>
                  <CardDescription>
                    Ideal for large windows and patio doors. Available in fabric, vinyl, and wood alternatives.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/venetian-blinds">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Venetian Blinds</CardTitle>
                  <CardDescription>
                    Classic horizontal blinds in aluminum, wood, or faux wood for timeless elegance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/honeycomb-shades">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Honeycomb Shades</CardTitle>
                  <CardDescription>
                    Energy-efficient cellular design provides superior insulation and noise reduction.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/drapery">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Custom Drapery</CardTitle>
                  <CardDescription>
                    Elegant fabric treatments with hundreds of patterns, textures, and styles to choose from.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/motorization">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-primary">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Motorization</CardTitle>
                  <CardDescription>
                    Upgrade any window treatment with smart motorization for voice and app control.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose In2itive Blinds?</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Free In-Home Consultation</h4>
                    <p className="text-muted-foreground">Our design experts bring samples to your home and help you choose the perfect solution</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ontario's Trusted Provider</h4>
                    <p className="text-muted-foreground">Serving residential and commercial clients across Ontario with local expertise</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quality Guarantee</h4>
                    <p className="text-muted-foreground">Premium materials, expert installation, and comprehensive warranty protection</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Energy Efficiency</h4>
                    <p className="text-muted-foreground">Save on heating and cooling costs with our insulating window treatments</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button variant="outline" className="gap-2">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src="/images/hero_slider_1.jpg" 
                alt="Beautiful custom blinds installation" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Outdoor Solutions</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extend your living space with our premium outdoor window treatments and shading solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/products/awnings">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Retractable Awnings</CardTitle>
                  <CardDescription>
                    Protect your outdoor space from sun and rain with stylish, durable awnings
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/outdoor-screens">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Pergolas</CardTitle>
                  <CardDescription>
                    Create an elegant outdoor living area with our custom pergola solutions
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/products/outdoor-screens">
              <Card className="glass-card-light hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>Outdoor Screens</CardTitle>
                  <CardDescription>
                    Privacy and protection from insects while maintaining airflow and views
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Windows?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule your free in-home consultation today and discover the perfect window treatments for your space
          </p>
          <Link href="/contact-sales">
            <Button size="lg" variant="secondary" className="gap-2">
              Get Your Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
