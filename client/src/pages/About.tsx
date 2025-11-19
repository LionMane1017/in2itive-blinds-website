import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Heart, Zap, Shield, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <>
      <SEO 
        title="About In2itive Blinds - Premium Window Coverings Ontario"
        description="Learn about In2itive Blinds, Ontario's trusted provider of custom blinds and window coverings. Quality products, expert installation, exceptional service."
        keywords="about In2itive Blinds, window coverings Ontario, blinds company, custom blinds installer"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About In2itive Blinds</h1>
              <p className="text-xl opacity-90">
                More than just window coverings—we're your partner in transforming spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In2itive Blinds was founded with a simple mission: to provide Ontario homeowners and businesses with premium window treatments that combine style, functionality, and value. We believe that the right window coverings can completely transform a space, enhancing both its aesthetic appeal and practical comfort.
                  </p>
                  <p>
                    What sets us apart is our commitment to understanding each client's unique needs. We don't just sell blinds—we create customized solutions that reflect your personal style, meet your functional requirements, and fit your budget. From the initial consultation to professional installation and beyond, we're with you every step of the way.
                  </p>
                  <p>
                    Today, we're proud to serve residential and commercial clients across Ontario, offering an extensive range of products from classic designs to cutting-edge motorized solutions. Our partnerships with industry leaders like Somfy, Lutron, and Hunter Douglas ensure you receive the highest quality products backed by comprehensive warranties.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/images/hero/hero2.jpg" 
                  alt="In2itive Blinds Showroom" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-xl font-bold mb-6">What We Stand For</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block mb-1">Quality Excellence</strong>
                        <span className="text-muted-foreground">We partner with premium manufacturers and use only the finest materials.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block mb-1">Customer First</strong>
                        <span className="text-muted-foreground">Your satisfaction is our priority. We listen, guide, and deliver beyond expectations.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block mb-1">Local Expertise</strong>
                        <span className="text-muted-foreground">Ontario-based with deep understanding of local climate and design preferences.</span>
                      </div>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8">
                  <h3 className="text-xl font-bold mb-6">Service Area</h3>
                  <p className="text-muted-foreground mb-6">
                    Proudly serving the Greater Toronto Area and surrounding regions throughout Ontario. Our mobile consultation service brings the showroom experience directly to your home.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Heart className="h-5 w-5" />
                    <span>Serving Southern Ontario</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose In2itive Blinds?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Free In-Home Consultation</h3>
                  <p className="text-muted-foreground">
                    Our design experts come to you with samples, measure your windows, and provide personalized recommendations—all at no cost.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our trained installers ensure perfect fit and flawless operation. We treat your home with respect and clean up completely when we're done.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    All our products come with comprehensive manufacturer warranties. We stand behind our work with our own satisfaction guarantee.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Design Advice</h3>
                  <p className="text-muted-foreground">
                    Not sure what you need? Our experienced team will guide you through options, helping you make informed decisions for your space.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Home Integration</h3>
                  <p className="text-muted-foreground">
                    We specialize in motorized solutions that integrate seamlessly with Alexa, Google Home, and other smart home systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Premium quality doesn't have to mean premium prices. We offer competitive rates and flexible payment options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Service Area */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Proudly Serving Ontario</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We provide professional window covering services throughout Ontario, bringing our showroom to your home for your convenience. Whether you're in Toronto, Ottawa, Hamilton, London, or anywhere in between, we're here to help transform your space.
              </p>
              <p className="text-muted-foreground">
                Our mobile consultation service means you can see our products in your own lighting, match them to your existing décor, and make confident decisions without leaving home.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to You</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At In2itive Blinds, we're committed to making your window treatment experience as smooth and enjoyable as possible. From your first inquiry to years after installation, we're here to support you.
                </p>
                <p>
                  We believe in transparency—no hidden fees, no pressure sales tactics, just honest advice and fair pricing. We'll work within your budget to find solutions that meet your needs without compromising on quality.
                </p>
                <p>
                  Our goal is simple: to create beautiful, functional window treatments that you'll love for years to come, backed by service that makes you want to recommend us to friends and family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the In2itive Blinds difference. Schedule your free in-home consultation today.
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
