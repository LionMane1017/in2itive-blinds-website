import SEO from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { products, getProductIndex, getProductByPath } from "@/lib/productData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductNavigator from "@/components/ProductNavigator";

export default function RollerShades() {
  const currentPath = "/products/roller-shades";
  const currentIndex = getProductIndex(currentPath);
  const currentProduct = getProductByPath(currentPath);
  const totalProducts = products.length;

  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: currentProduct?.name || "Roller Shades" },
  ];

  return (
    <>
      <ProductNavigator currentPath={currentPath} />
      <SEO 
        title="Roller Shades - Custom Window Shades Ontario"
        description="Premium custom roller shades in Ontario. Light-filtering, blackout, and motorized options available. Free consultation and professional installation."
        keywords="roller shades, window shades, blackout shades, light filtering shades, motorized roller shades Ontario"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            <ProgressIndicator 
              current={currentIndex + 1} 
              total={totalProducts} 
              sectionTitle="Product Overview" 
            />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Roller Shades</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Clean, modern design meets superior functionality. Our custom roller shades offer the perfect blend of style, light control, and energy efficiency for any space.
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
                  src="/images/products/roller-shades-living-room.jpg" 
                  alt="Custom Roller Shades" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Roller Shades?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sleek & Modern</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Minimalist design that complements any décor. Clean lines and smooth operation create an uncluttered, contemporary look.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Light Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from sheer, light-filtering, or blackout fabrics to control exactly how much light enters your space.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Energy Efficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Insulating fabrics help reduce heat gain in summer and heat loss in winter, lowering your energy bills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fabric Options */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Fabric Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sheer</CardTitle>
                  <CardDescription>Soft, diffused light</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Maintains view while filtering light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Reduces glare on screens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>UV protection for furniture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Light Filtering</CardTitle>
                  <CardDescription>Balanced privacy & light</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Softly diffuses natural light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Daytime privacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Energy efficient</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Blackout</CardTitle>
                  <CardDescription>Complete light blocking</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Blocks 99% of light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Perfect for bedrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Maximum privacy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Solar Screen</CardTitle>
                  <CardDescription>Heat & glare reduction</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Blocks up to 95% of UV rays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Reduces heat gain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>Maintains outside view</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Motorization Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Motorization Options</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Upgrade your roller shades with motorization for ultimate convenience and smart home integration.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Voice Control:</strong> Works with Alexa, Google Home, and Siri
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>App Control:</strong> Operate from anywhere with your smartphone
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Scheduling:</strong> Automate opening and closing times
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Battery or Hardwired:</strong> Flexible power options
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/products/motorization">
                    <Button className="gap-2">
                      Learn About Motorization
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  src="/images/hero_slider_2.jpg" 
                  alt="Motorized Roller Shades" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule your free in-home consultation and we'll bring samples directly to you
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
