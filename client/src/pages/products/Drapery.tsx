import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductNavigator from "@/components/ProductNavigator";

export default function Drapery() {
  return (
    <>
      <ProductNavigator currentPath="/products/drapery" />
      <SEO 
        title="Custom Drapery & Curtains - Elegant Window Treatments Ontario"
        description="Luxury custom drapery and curtains in Ontario. Hundreds of fabrics, styles, and hardware options. Professional design consultation and installation."
        keywords="custom drapery, curtains, window drapes, luxury curtains, custom curtains, drapery hardware Ontario"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Custom Drapery</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Elevate your space with luxurious custom drapery. From classic elegance to contemporary sophistication, our expert designers create window treatments that perfectly complement your style and enhance your home's beauty.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact-sales">
                    <Button size="lg">Schedule Design Consultation</Button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline">View Gallery</Button>
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  src="/images/products/drapery-main.jpg" 
                  alt="Custom Luxury Drapery" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Custom Drapery?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Endless Design Possibilities</CardTitle>
                  <CardDescription>
                    Hundreds of fabrics, colors, patterns, and styles to match any decor
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expert Design Service</CardTitle>
                  <CardDescription>
                    Professional designers help you select the perfect fabrics and styles
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Perfect Fit Guaranteed</CardTitle>
                  <CardDescription>
                    Custom-made to your exact window measurements for flawless appearance
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Drapery Styles */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Drapery Styles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ripplefold Drapery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Modern, sleek appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Consistent, uniform waves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Smooth operation on track system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contemporary aesthetic</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pinch Pleat Drapery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Classic, traditional style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Elegant gathered pleats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Timeless sophistication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Works with rings or traverse rods</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grommet Drapery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contemporary, casual look</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy to open and close</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Metal rings slide smoothly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Modern, streamlined appearance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rod Pocket Drapery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Soft, gathered appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hides the curtain rod</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Romantic, traditional style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Budget-friendly option</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tab Top Drapery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Casual, relaxed style</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Fabric loops show decorative rod</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Perfect for informal spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy to install and maintain</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Inverted Pleat</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tailored, structured look</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pleats face inward</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Clean, modern aesthetic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Works well with patterns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fabric Options */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Fabric Collections</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sheer & Voile</CardTitle>
                  <CardDescription>
                    Light, airy fabrics for soft light diffusion
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Linen & Cotton</CardTitle>
                  <CardDescription>
                    Natural, breathable fabrics with texture
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Silk & Velvet</CardTitle>
                  <CardDescription>
                    Luxurious fabrics for elegant spaces
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Blackout & Thermal</CardTitle>
                  <CardDescription>
                    Energy-efficient, light-blocking fabrics
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Hardware & Accessories */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Hardware & Accessories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Decorative Rods</CardTitle>
                  <CardDescription>
                    Hundreds of finishes: brushed nickel, oil-rubbed bronze, polished chrome, brass, wrought iron, and custom colors
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Motorized Tracks</CardTitle>
                  <CardDescription>
                    Remote, app, or voice-controlled operation for ultimate convenience and modern luxury
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Finials & Tiebacks</CardTitle>
                  <CardDescription>
                    Decorative accents to complete your custom drapery design with style and elegance
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Layering Options */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Layering for Maximum Versatility</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Combine Drapery with Other Treatments</CardTitle>
                  <CardDescription className="text-base mt-4">
                    Layer drapery over roller shades, honeycomb shades, or blinds for the ultimate in light control, privacy, and style flexibility. Enjoy the softness and elegance of drapery while maintaining the practical benefits of your primary window treatment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <h4 className="font-semibold mb-2">Benefits of Layering:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Enhanced insulation and energy efficiency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Superior light control options</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Added depth and dimension</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Popular Combinations:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Drapery + Roller Shades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Drapery + Honeycomb Shades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Sheer Drapery + Privacy Blinds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Create Your Dream Window Treatments</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a complimentary design consultation and explore our extensive fabric collections
            </p>
            <Link href="/contact-sales">
              <Button size="lg" variant="secondary" className="gap-2">
                Book Design Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
