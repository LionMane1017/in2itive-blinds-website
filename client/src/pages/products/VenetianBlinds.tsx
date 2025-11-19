import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductNavigator from "@/components/ProductNavigator";

export default function VenetianBlinds() {
  return (
    <>
      <ProductNavigator currentPath="/products/venetian-blinds" />
      <SEO 
        title="Venetian Blinds - Classic Horizontal Blinds Ontario"
        description="Premium custom Venetian blinds in wood, faux wood, and aluminum. Timeless style with precise light control. Free consultation and installation in Ontario."
        keywords="venetian blinds, horizontal blinds, wood blinds, faux wood blinds, aluminum blinds Ontario"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Venetian Blinds</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Timeless elegance meets modern functionality. Our custom Venetian blinds offer classic horizontal slat design with precise light control and lasting durability.
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
                  src="/images/products/venetian-blinds-main.jpg" 
                  alt="Custom Venetian Blinds" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Venetian Blinds?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Precise Light Control</CardTitle>
                  <CardDescription>
                    Tilt slats to any angle for perfect lighting and privacy balance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Classic Versatility</CardTitle>
                  <CardDescription>
                    Complements any interior style from traditional to contemporary
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Easy Maintenance</CardTitle>
                  <CardDescription>
                    Simple to clean with a damp cloth or duster, stays looking new
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Material Options */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Material & Slat Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Real Wood</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Premium basswood or bamboo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Natural warmth and beauty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Stained or painted finishes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Eco-friendly sustainable options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>1" or 2" slat widths</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Faux Wood</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Authentic wood appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Moisture and humidity resistant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Won't warp, crack, or fade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Perfect for kitchens and bathrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>2" slat width standard</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Aluminum</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lightweight and durable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Wide range of colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Budget-friendly option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ideal for commercial applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>1" micro or 1" standard slats</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Control Options */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Control Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cordless Lift</CardTitle>
                  <CardDescription>
                    Safe, child-friendly operation
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wand Control</CardTitle>
                  <CardDescription>
                    Easy tilt and lift operation
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Motorized</CardTitle>
                  <CardDescription>
                    Remote or smart home control
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Film Production</CardTitle>
                  <CardDescription>
                    Traditional corded (commercial only)
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Discover Timeless Elegance</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule your free consultation and explore our extensive collection of Venetian blinds
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
