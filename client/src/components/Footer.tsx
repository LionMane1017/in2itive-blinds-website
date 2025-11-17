import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <footer className="border-t bg-muted/30 py-12 mt-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/favicon.png" alt="Wise Media" className="h-12 w-12" />
              <h3 className="font-bold text-lg">Wise Media</h3>
            </div>
            <p className="text-muted-foreground">
              Infrastructure feasibility analysis demonstrating cost-effective alternatives to cloud services.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/executive-summary" className="hover:text-primary transition-colors">Executive Summary</a></li>
              <li><a href="/financial-analysis" className="hover:text-primary transition-colors">Financial Analysis</a></li>
              <li><a href="/solution" className="hover:text-primary transition-colors">The Solution</a></li>
              <li><a href="/conclusion" className="hover:text-primary transition-colors">Conclusion</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Infrastructure Insights Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get cost-saving tips, ROI calculators, and infrastructure best practices delivered to your inbox.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                try {
                  // TODO: Connect to database/API
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  toast.success("Thanks for subscribing! Check your inbox.");
                  setEmail("");
                } catch (error) {
                  toast.error("Something went wrong. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="flex gap-2"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Wise Cluster Feasibility Study. All rights reserved.</p>
          <p className="mt-2 text-sm">Prepared by Technology Feasibility Division</p>
        </div>
      </div>
    </footer>
  );
}
