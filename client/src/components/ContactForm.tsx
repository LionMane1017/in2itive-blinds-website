import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = trpc.contact.sendEmail.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Track analytics event for form submission
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('contact_form_submitted', {
          email,
          company: company || 'Not provided'
        });
      }
      
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail.mutate({ name, email, company, message });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Mail className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Schedule a Strategy Session</CardTitle>
            <CardDescription>
              Get expert guidance on your infrastructure transformation journey
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your infrastructure needs and goals..."
                rows={6}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={sendEmail.isPending}
            >
              {sendEmail.isPending ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              By submitting this form, you agree to be contacted about your infrastructure needs.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
