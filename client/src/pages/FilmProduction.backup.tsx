import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Check, X, Film, Award, FileText, ArrowRight, Shield } from "lucide-react";
import { Link } from "wouter";

export default function FilmProduction() {
  return (
    <>
      <SEO 
        title="Film Production & Commercial Division"
        description="Professional corded window treatments for film, television, and commercial productions. Legal commercial exemption for authentic on-screen aesthetics."
        keywords="film production blinds, commercial window coverings, corded blinds film industry, movie set blinds, television production window treatments"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-yellow-500 text-black font-bold px-4 py-2 rounded text-sm mb-6">
                COMMERCIAL ONLY
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <Film className="h-12 w-12 text-primary" />
                <h1 className="text-4xl md:text-6xl font-bold">Film & TV Production Services</h1>
              </div>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Specialized window covering solutions for set design, compliant with Canadian regulations for commercial use.
              </p>
            </div>
          </div>
        </section>

        {/* Critical Safety Information */}
        <section className="py-12 bg-destructive/10 border-y border-destructive/20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-destructive mb-2">Critical Safety Information</h2>
                  <p className="text-foreground">
                    Corded window coverings pose serious strangulation hazards to children. These products are ONLY available for verified commercial use.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="text-4xl font-bold text-destructive mb-2">39</div>
                    <CardTitle className="text-base">Deaths in Canada</CardTitle>
                    <CardDescription>Between 1989-2018 from cord strangulation</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="text-4xl font-bold text-destructive mb-2">22cm</div>
                    <CardTitle className="text-base">Danger Threshold</CardTitle>
                    <CardDescription>Minimum cord length that can strangle a child</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-destructive/20">
                  <CardHeader>
                    <div className="text-4xl font-bold text-destructive mb-2">6min</div>
                    <CardTitle className="text-base">Time to Death</CardTitle>
                    <CardDescription>How quickly strangulation can occur</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Legal Framework & Compliance</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Shield className="h-10 w-10 mb-4 text-primary" />
                    <CardTitle>The Regulations</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      Canada's <strong>Corded Window Coverings Regulations (SOR/2019-97)</strong>, effective May 1, 2021, prohibit the sale of corded blinds for residential/consumer use due to child strangulation hazards.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2019-97/FullText.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                      View Official Regulations
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Award className="h-10 w-10 mb-4 text-primary" />
                    <CardTitle>Commercial Exemption</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      <strong>Film and commercial productions are exempt</strong> when products are "sold exclusively to commercial entities for commercial purposes" and not for residential use.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/industry-professionals/corded-window-coverings-regulations/scope.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                      Learn About Exemptions
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Film Needs Corded Blinds */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Film Productions Need Corded Blinds</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Film className="h-10 w-10 mb-4 text-primary" />
                    <CardTitle>Authentic Aesthetics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Period pieces require historically accurate window treatments</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Traditional corded blinds look more natural on camera</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Visible cords and chains add realism to residential scenes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Matches audience expectations for authentic home interiors</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Zap className="h-10 w-10 mb-4 text-primary" />
                    <CardTitle>Practical Production Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Crew can quickly adjust blinds between takes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Precise control over lighting and shadows</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>No batteries or motors to fail during filming</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Silent operation won't interfere with audio recording</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Requirements */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Commercial Verification Process</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-green-200 bg-green-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                      <CardTitle className="text-green-900">Eligible Buyers</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-green-900">
                    <div>• Film production companies</div>
                    <div>• Television studios and networks</div>
                    <div>• Commercial video production</div>
                    <div>• Theater and stage productions</div>
                    <div>• Set design and prop companies</div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      <X className="h-6 w-6 text-red-600" />
                      <CardTitle className="text-red-900">NOT Eligible</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-red-900">
                    <div>• Homeowners and residential customers</div>
                    <div>• Individual consumers (even for "film use")</div>
                    <div>• Residential rental properties</div>
                    <div>• Home-based businesses</div>
                    <div>• Any installation in homes with children</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Required Documentation</CardTitle>
                  <CardDescription>
                    To purchase corded window coverings for commercial use, you must provide:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                      <div>
                        <div className="font-semibold">Business Registration</div>
                        <div className="text-sm text-muted-foreground">Valid business license or incorporation documents</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                      <div>
                        <div className="font-semibold">Commercial Invoice</div>
                        <div className="text-sm text-muted-foreground">Company letterhead with production details</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                      <div>
                        <div className="font-semibold">Attestation of Commercial Use</div>
                        <div className="text-sm text-muted-foreground">Signed declaration that products are for commercial purposes only</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                      <div>
                        <div className="font-semibold">Project Details</div>
                        <div className="text-sm text-muted-foreground">Film/production name, timeline, and set location</div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</div>
                      <div>
                        <div className="font-semibold">Record Keeping</div>
                        <div className="text-sm text-muted-foreground">We maintain compliance documentation for all commercial sales</div>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Available Products */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Available Products for Film Production</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Traditional corded window treatments for authentic on-screen appearance
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Corded Roller Shades</CardTitle>
                    <CardDescription>
                      Classic pull-cord operation with light-filtering and blackout fabrics
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chain-Operated Venetian Blinds</CardTitle>
                    <CardDescription>
                      Traditional horizontal blinds with continuous loop chain control
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Corded Vertical Blinds</CardTitle>
                    <CardDescription>
                      Pull-cord operation for large windows and patio door scenes
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Roman Shades with Cords</CardTitle>
                    <CardDescription>
                      Elegant fabric shades with traditional cord lift system
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Corded Cellular Shades</CardTitle>
                    <CardDescription>
                      Energy-efficient honeycomb design with cord operation
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pull-Cord Drapery</CardTitle>
                    <CardDescription>
                      Traditional drapery with cord-operated traverse rods
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Safety Warning */}
        <section className="py-12 bg-destructive text-destructive-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  English Warning
                </h3>
                <p className="leading-relaxed">
                  <strong>DANGER - STRANGULATION HAZARD:</strong> Young children can strangle in window covering cords. These products are for COMMERCIAL USE ONLY and must NOT be installed in residential settings. Keep cords out of reach of children.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Avertissement Français
                </h3>
                <p className="leading-relaxed">
                  <strong>DANGER - RISQUE D'ÉTRANGLEMENT:</strong> Les jeunes enfants peuvent s'étrangler avec les cordons de couvre-fenêtres. Ces produits sont UNIQUEMENT À USAGE COMMERCIAL et ne doivent PAS être installés dans des environnements résidentiels. Gardez les cordons hors de portée des enfants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Redirect */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Looking for Blinds for Your Home?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer a wide range of safe, cordless, and motorized window treatments for residential customers
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Cordless Blinds</CardTitle>
                    <CardDescription>Safe for homes with children</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Motorized Solutions</CardTitle>
                    <CardDescription>Smart home integration</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Spring-Loaded Shades</CardTitle>
                    <CardDescription>No cords or chains</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products/roller-shades">
                  <Button size="lg" variant="outline">
                    View Residential Products
                  </Button>
                </Link>
                <Link href="/contact-sales">
                  <Button size="lg">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Film className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Ready to Equip Your Production?</h2>
              <p className="text-lg mb-8 opacity-90">
                Contact our Commercial Division to discuss your film or television production needs. We'll guide you through the verification process and provide authentic window treatments for your set.
              </p>
              <Link href="/contact-sales">
                <Button size="lg" variant="secondary" className="gap-2">
                  Contact Commercial Division
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm mt-4 opacity-75">
                Please have your business documentation ready
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-8 bg-muted/30 border-t">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>In2itive Blinds Film Production Division</strong>
              </p>
              <p>
                Compliance with Canadian Corded Window Coverings Regulations (SOR/2019-97)
              </p>
              <p className="mt-4">
                For residential window treatments, <Link href="/products/roller-shades" className="text-primary hover:underline">visit our main product pages</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Missing import
import { Zap } from "lucide-react";
