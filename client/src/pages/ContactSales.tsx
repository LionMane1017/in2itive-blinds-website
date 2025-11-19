import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";

export default function ContactSales() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Connect to database/API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      
      setIsSubmitted(true);
      toast.success("Thank you! We'll contact you within 24 hours to schedule your free consultation.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Free Consultation - In2itive Blinds Ontario"
        description="Get a free in-home consultation for custom window blinds, shades, and coverings in Ontario. Expert advice, professional measurement, and personalized recommendations."
        keywords="free consultation, blinds quote, window covering estimate, in-home measurement, Ontario blinds"
      />
      
      <div className="min-h-screen flex flex-col bg-muted/30">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get Your Free In-Home Consultation
                </h1>
                <p className="text-xl text-muted-foreground">
                  Our experts bring the showroom to you. Professional measurement, personalized recommendations, and a no-obligation quote.
                </p>
              </div>
            </div>
          </section>

          {/* Form Section with Split Layout */}
          <section className="pb-20">
            <div className="container max-w-6xl">
              {isSubmitted ? (
                <Card className="p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                    <p className="text-lg text-muted-foreground mb-8">
                      We've received your request and will contact you within 24 hours to schedule your free consultation.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} size="lg">
                      Submit Another Request
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card className="overflow-hidden shadow-2xl">
                  <div className="grid md:grid-cols-5">
                    {/* Left Sidebar - Why Choose Us */}
                    <div className="md:col-span-2 bg-primary p-10 text-primary-foreground flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                        <ul className="space-y-6">
                          <li className="flex items-start gap-3">
                            <Check className="mt-1 flex-shrink-0 h-5 w-5" />
                            <span>
                              <strong className="block mb-1">Professional Measurement</strong>
                              We take precise laser measurements to guarantee a perfect fit for every window.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="mt-1 flex-shrink-0 h-5 w-5" />
                            <span>
                              <strong className="block mb-1">Expert Advice</strong>
                              We help you navigate fabrics, opacities, lift systems, and smart home integration.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="mt-1 flex-shrink-0 h-5 w-5" />
                            <span>
                              <strong className="block mb-1">All-In Pricing</strong>
                              No hidden fees. Product, hardware, and professional installation all included.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                        <p className="text-primary-foreground/80 text-sm mb-2">Have questions? Call us directly.</p>
                        <p className="text-2xl font-bold">(555) 123-4567</p>
                        <p className="text-sm text-primary-foreground/80 mt-1">info@in2itiveblinds.com</p>
                      </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:col-span-3 p-10">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              className="h-12"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                              Phone Number *
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(555) 123-4567"
                              className="h-12"
                            />
                          </div>
                          <div>
                            <label htmlFor="address" className="block text-sm font-medium mb-2">
                              City / Area in Ontario
                            </label>
                            <Input
                              id="address"
                              name="address"
                              type="text"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="Toronto, Brampton, etc."
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                            Project Type
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full h-12 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">Select a project type</option>
                            <option value="residential">Residential (Home)</option>
                            <option value="commercial">Commercial (Office/Business)</option>
                            <option value="film-production">Film/TV Production (Commercial)</option>
                            <option value="new-construction">New Construction</option>
                            <option value="renovation">Renovation/Replacement</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            How can we help?
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="I'm looking for motorized shades for my living room..."
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-12"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Request Free Consultation
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By submitting this form, you agree to be contacted by our sales team.
                        </p>
                      </form>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
