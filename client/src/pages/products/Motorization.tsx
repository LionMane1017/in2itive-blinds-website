import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Smartphone, Clock, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import ProductNavigator from "@/components/ProductNavigator";

export default function Motorization() {
  return (
    <>
      <ProductNavigator currentPath="/products/motorization" />
      <SEO 
        title="Motorized Blinds & Smart Home Integration - In2itive Blinds"
        description="Upgrade to motorized blinds with smart home integration. Voice control, app control, and automation for ultimate convenience. Somfy and Lutron compatible."
        keywords="motorized blinds, smart blinds, automated window coverings, voice control blinds, Somfy, Lutron, smart home Ontario"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-5xl font-bold mb-6">Motorization & Smart Home Integration</h1>
              <p className="text-xl text-muted-foreground">
                Experience the ultimate in convenience and control with motorized window treatments. Seamlessly integrate with your smart home for effortless operation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Smartphone className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>App Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Control your blinds from anywhere using your smartphone or tablet
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>Voice Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Works with Alexa, Google Home, and Apple HomeKit for hands-free operation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Automate your blinds to open and close at specific times
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create the appearance of occupancy when you're away from home
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Motorize Your Window Treatments?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Ultimate Convenience</h3>
                      <p className="text-muted-foreground">
                        No more reaching for cords or wands. Control all your blinds with a single tap or voice command.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Energy Savings</h3>
                      <p className="text-muted-foreground">
                        Automate your blinds to optimize natural light and reduce heating/cooling costs by up to 30%.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Child & Pet Safety</h3>
                      <p className="text-muted-foreground">
                        Eliminate dangerous cords and chains, creating a safer environment for children and pets.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Hard-to-Reach Windows</h3>
                      <p className="text-muted-foreground">
                        Perfect solution for skylights, high windows, and large window walls.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Increased Home Value</h3>
                      <p className="text-muted-foreground">
                        Smart home features are increasingly desirable to homebuyers and can increase property value.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/images/hero_slider_3.jpg" 
                  alt="Smart Home Motorized Blinds" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Trusted Integration Partners</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We partner with industry-leading brands to ensure seamless integration with your smart home ecosystem
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Somfy</CardTitle>
                  <CardDescription>World leader in motorization</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Premium motors with whisper-quiet operation and exceptional reliability. Compatible with all major smart home platforms.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>5-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Battery or hardwired options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>TaHoma smart home hub</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lutron</CardTitle>
                  <CardDescription>Premium smart shading solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Sophisticated control systems with advanced features and seamless integration with Lutron lighting systems.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Caseta wireless platform</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Geofencing capabilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Works with 100+ brands</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hunter Douglas</CardTitle>
                  <CardDescription>PowerView automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Innovative PowerView system allows you to schedule and automate your shades throughout the day.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Scene creation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Sunrise/sunset automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Rechargeable batteries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Power Options */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Power Options</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Battery Powered</CardTitle>
                  <CardDescription>Wireless convenience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>No electrical work required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy installation and relocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Batteries last 1-5 years depending on usage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Rechargeable or replaceable options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hardwired</CardTitle>
                  <CardDescription>Permanent power solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>No battery replacement needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ideal for new construction or renovations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Consistent, reliable power</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Best for large or heavy window treatments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compatible Products */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Compatible Window Treatments</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nearly all of our window treatments can be motorized for your convenience
            </p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Link href="/products/roller-shades">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Roller Shades</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products/vertical-blinds">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Vertical Blinds</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products/venetian-blinds">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Venetian Blinds</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products/honeycomb-shades">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Honeycomb Shades</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products/drapery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Drapery</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products/awnings">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Awnings</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/products/outdoor-screens">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">Outdoor Screens</CardTitle>
                  </CardHeader>
                </Card>
              </Link>

              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="text-lg text-muted-foreground">And More...</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Upgrade to Smart Blinds?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our experts will help you choose the perfect motorization solution for your home
            </p>
            <Link href="/contact-sales">
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
