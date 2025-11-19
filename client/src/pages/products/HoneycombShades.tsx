import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductNavigator from "@/components/ProductNavigator";

export default function HoneycombShades() {
  return (
    <>
      <ProductNavigator currentPath="/products/honeycomb-shades" />
      <SEO 
        title="Honeycomb Shades - Energy-Efficient Cellular Shades Ontario"
        description="Premium honeycomb cellular shades for maximum energy efficiency and insulation. Light-filtering and blackout options. Free consultation in Ontario."
        keywords="honeycomb shades, cellular shades, energy efficient shades, insulating shades, blackout cellular shades Ontario"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Honeycomb Shades</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Superior energy efficiency meets elegant design. Our cellular honeycomb shades provide exceptional insulation, reducing heating and cooling costs while enhancing your home's comfort and style.
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
                  src="/images/products/honeycomb-shades-bedroom.jpg" 
                  alt="Custom Honeycomb Cellular Shades" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Highlight */}
        <section className="py-20 bg-primary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Save Up to 40% on Energy Costs</h2>
              <p className="text-xl text-muted-foreground mb-8">
                The unique honeycomb structure traps air in pockets, creating an insulating barrier that keeps your home warmer in winter and cooler in summer. This can significantly reduce your heating and cooling bills year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Honeycomb Shades?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Maximum Energy Efficiency</CardTitle>
                  <CardDescription>
                    Cellular design provides superior insulation, reducing heat transfer
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Light Control Options</CardTitle>
                  <CardDescription>
                    From sheer light-filtering to complete room-darkening blackout
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Noise Reduction</CardTitle>
                  <CardDescription>
                    Air pockets dampen sound, creating a quieter, more peaceful environment
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Cell Sizes & Options */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Cell Sizes & Configurations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Single Cell (3/8" - 1/2")</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lightweight and economical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Good insulation properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ideal for standard windows</span>
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
                  <CardTitle>Double Cell (3/4")</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Two layers for maximum insulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Superior energy efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Enhanced noise reduction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Recommended for extreme climates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top-Down/Bottom-Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Operate from top or bottom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Maximum privacy and light control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Perfect for street-facing windows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Versatile light positioning</span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Fabric & Opacity Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sheer</CardTitle>
                  <CardDescription>
                    Soft diffused light, maintains view
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Light-Filtering</CardTitle>
                  <CardDescription>
                    Reduces glare, provides privacy
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Room-Darkening</CardTitle>
                  <CardDescription>
                    Blocks most light, good for bedrooms
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Blackout</CardTitle>
                  <CardDescription>
                    Complete darkness, ideal for media rooms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Features */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Special Features Available</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Cordless & Motorized</CardTitle>
                  <CardDescription>
                    Child-safe cordless lift or smart motorization with remote, app, or voice control
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Specialty Shapes</CardTitle>
                  <CardDescription>
                    Custom solutions for arches, angles, skylights, and unique window shapes
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Start Saving on Energy Costs Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule your free consultation and discover how honeycomb shades can reduce your bills
            </p>
            <Link href="/contact-sales">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Free Energy Assessment
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
