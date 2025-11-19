import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductNavigator from "@/components/ProductNavigator";

export default function VerticalBlinds() {
  return (
    <>
      <ProductNavigator currentPath="/products/vertical-blinds" />
      <SEO 
        title="Vertical Blinds - Custom Window Blinds Ontario"
        description="Premium custom vertical blinds for large windows and patio doors in Ontario. Available in fabric, vinyl, and wood alternatives. Free consultation."
        keywords="vertical blinds, patio door blinds, sliding door blinds, fabric vertical blinds, vinyl vertical blinds Ontario"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Vertical Blinds</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The perfect solution for large windows and patio doors. Our custom vertical blinds provide excellent light control, privacy, and style for expansive glass areas.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact-sales">
                    <Button size="lg">Get Free Quote</Button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline">View Gallery</Button>
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  src="/images/products/vertical-blinds-main.jpg" 
                  alt="Custom Vertical Blinds" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vertical Blinds?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Perfect for Large Openings</CardTitle>
                  <CardDescription>
                    Ideal for patio doors, sliding glass doors, and wide windows up to 16 feet
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Versatile Light Control</CardTitle>
                  <CardDescription>
                    Rotate vanes for precise light filtering or stack to one side for full view
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Easy Operation</CardTitle>
                  <CardDescription>
                    Smooth gliding system with wand or cord control, motorization available
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Material Options */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Material Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fabric Vanes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hundreds of colors and textures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Light-filtering and room-darkening options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Soft, elegant appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Energy-efficient insulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vinyl Vanes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Durable and moisture-resistant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Perfect for high-humidity areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy to clean and maintain</span>
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
                  <CardTitle>Faux Wood Vanes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Authentic wood grain appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Won't warp, crack, or fade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Premium look and feel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ideal for any decor style</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patio Doors</CardTitle>
                  <CardDescription>
                    Smooth operation for daily use
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sliding Glass Doors</CardTitle>
                  <CardDescription>
                    Stack neatly to one side
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Large Windows</CardTitle>
                  <CardDescription>
                    Cover expansive glass areas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Commercial Spaces</CardTitle>
                  <CardDescription>
                    Durable for high-traffic areas
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule your free in-home consultation and discover the perfect vertical blinds for your windows
            </p>
            <Link href="/contact-sales">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
