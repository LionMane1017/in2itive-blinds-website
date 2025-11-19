import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions"
        description="Get answers to common questions about blinds, shades, installation, motorization, and our services. Expert advice from In2itive Blinds."
        keywords="blinds FAQ, window covering questions, installation guide, blinds maintenance, motorization questions"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our blinds, shades, and window covering services
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              
              {/* General Questions */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">General Questions</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      Do you offer free consultations?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! We provide complimentary in-home consultations where our design experts bring samples directly to you. We'll measure your windows, discuss your needs and style preferences, and provide a detailed quote—all at no cost and with no obligation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      What areas do you serve?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We serve residential and commercial clients throughout Ontario, including Toronto, Mississauga, Brampton, Oakville, Burlington, Hamilton, and surrounding areas. Contact us to confirm service availability in your specific location.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      How long does the process take from consultation to installation?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Typically 2-4 weeks. After your consultation and order confirmation, custom window treatments are manufactured to your exact specifications (usually 10-14 days). We then schedule professional installation at your convenience, which typically takes 2-4 hours depending on the number of windows.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Products & Options */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Products & Options</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-5" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      What's the difference between blinds and shades?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong>Blinds</strong> have individual slats (horizontal or vertical) that can be tilted to control light. <strong>Shades</strong> are made from a single piece of material that rolls, folds, or pleats. Both offer excellent light control and privacy—the choice depends on your aesthetic preference and functional needs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      Which window treatments are best for energy efficiency?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong>Honeycomb (cellular) shades</strong> are the most energy-efficient option, with air pockets that insulate against heat and cold. They can reduce energy costs by up to 20%. Other good options include thermal-backed roller shades and layered treatments like drapery over blinds.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      Can any blind or shade be motorized?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! Most window treatments can be motorized, including roller shades, honeycomb shades, vertical blinds, venetian blinds, and drapery. Motorization is especially popular for hard-to-reach windows, large windows, and smart home integration.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Installation */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Installation & Measurement</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-10" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      Do you provide professional measurement and installation?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! Professional measurement and installation are included with all our custom window treatments. Our trained installers ensure perfect fit and operation.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-12" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      What's the difference between inside mount and outside mount?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <strong>Inside mount</strong> means the blinds fit inside the window frame for a clean look. <strong>Outside mount</strong> means the blinds are mounted on the wall above the window, making windows appear larger and providing better light blocking.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to help! Reach out and we'll be happy to answer any questions.
              </p>
              <Link href="/contact-sales">
                <Button size="lg">
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
