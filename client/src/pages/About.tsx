import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, MapPin, Globe, CheckCircle } from "lucide-react";

export default function About() {
  return (
      <>
      <SEO 
        title="About Wise Media I.T. Consultancy"
        description="Professional IT consultancy specializing in infrastructure optimization and cloud cost reduction strategies."
        keywords="IT consultancy, infrastructure consulting, cloud optimization"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Wise Media</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for digital transformation and infrastructure innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Digital Business Card Embed */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-background/60 backdrop-blur-sm border-border/40">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6" />
                Connect With Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[850px]">
                <iframe
                  src="https://id.mywisemedia.com"
                  className="w-full h-full border-0"
                  title="Wise Media Digital Business Card"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-muted/30">
                <Button asChild className="w-full" size="lg">
                  <a href="https://id.mywisemedia.com" target="_blank" rel="noopener noreferrer">
                    View Full Digital Card
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* About Content */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Wise Media, we're passionate about helping businesses build powerful digital presence through innovative infrastructure solutions and strategic technology consulting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold flex-shrink-0">
                    CM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Christian McNeil</h3>
                    <p className="text-primary font-medium mb-2">Digital Innovation Specialist</p>
                    <p className="text-muted-foreground">
                      Leading the charge in digital transformation strategy and infrastructure modernization for forward-thinking organizations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:christian@mail.mywisemedia.com" className="hover:underline">
                    christian@mail.mywisemedia.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+14165551234" className="hover:underline">
                    +1 (416) 555-1234
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Brampton, ON, Canada</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <a href="https://mywisemedia.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    mywisemedia.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Digital Transformation Strategy</h3>
                  <p className="text-muted-foreground">
                    Comprehensive roadmaps for modernizing your technology infrastructure and business processes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Brand Identity & UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Creating compelling visual identities and user experiences that drive engagement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Web & Mobile App Development</h3>
                  <p className="text-muted-foreground">
                    Full-stack development solutions tailored to your business objectives
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">AI-Powered Automation Solutions</h3>
                  <p className="text-muted-foreground">
                    Leveraging artificial intelligence to streamline operations and boost productivity
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-background/60 backdrop-blur-sm border-border/40">
            <CardContent className="pt-6">
              <p className="text-lg italic mb-4">
                "Christian's strategic insights were pivotal in our digital transformation. The results have been phenomenal, boosting our online engagement by over 200%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-foreground/10 border border-border/40 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">CEO of Innovate Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm border-border/40">
            <CardContent className="pt-6">
              <p className="text-lg italic mb-4">
                "An exceptional partner for any business looking to navigate the complexities of modern technology. Highly recommended for their expertise and professionalism."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-foreground/10 border border-border/40 flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-muted-foreground">CTO at Tech Solutions Ltd.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
}
