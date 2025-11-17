import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Mail, Phone, DollarSign, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";

export default function ContactSales() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    cloudSpend: "",
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
      toast.success("Thank you! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        companyName: "",
        email: "",
        phone: "",
        cloudSpend: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact Sales - Get a Custom Infrastructure Quote"
        description="Contact our sales team for a personalized infrastructure assessment and ROI analysis. Learn how owned infrastructure can reduce your cloud costs by 60-80%."
        keywords="contact sales, infrastructure quote, ROI analysis, cloud cost reduction, custom assessment"
      />
      
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-muted/30">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Talk to Sales
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Get a Custom Infrastructure Assessment
                </h1>
                <p className="text-xl text-muted-foreground">
                  Speak with our infrastructure experts to discover how much you can save by transitioning from cloud providers to owned infrastructure.
                </p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-16">
            <div className="container max-w-4xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Benefits */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Custom ROI Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Detailed breakdown of your potential savings, payback period, and 5-year TCO comparison.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Infrastructure Design</h3>
                        <p className="text-sm text-muted-foreground">
                          Tailored hardware recommendations based on your workload requirements and budget.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Migration Roadmap</h3>
                        <p className="text-sm text-muted-foreground">
                          Step-by-step plan for transitioning from cloud to owned infrastructure with minimal disruption.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Card className="mt-8 p-6 bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Average Response Time:</strong> 24 hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Typical Savings:</strong> 60-80% reduction in infrastructure costs
                    </p>
                  </Card>
                </div>

                {/* Right Column - Form */}
                <div>
                  <Card className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground mb-6">
                          We've received your inquiry and will contact you within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>
                          Submit Another Request
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                            Company Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="companyName"
                              name="companyName"
                              type="text"
                              required
                              value={formData.companyName}
                              onChange={handleChange}
                              className="pl-10"
                              placeholder="Acme Corporation"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="pl-10"
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              className="pl-10"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="cloudSpend" className="block text-sm font-medium mb-2">
                            Current Monthly Cloud Spend
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                              id="cloudSpend"
                              name="cloudSpend"
                              type="text"
                              value={formData.cloudSpend}
                              onChange={handleChange}
                              className="pl-10"
                              placeholder="e.g., $5,000/month"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Helps us provide accurate savings estimates
                          </p>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell us about your infrastructure needs, challenges, or questions..."
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Request Consultation
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By submitting this form, you agree to be contacted by our sales team.
                        </p>
                      </form>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
