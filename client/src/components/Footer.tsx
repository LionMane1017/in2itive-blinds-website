import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Lock } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <footer className="border-t bg-muted/30 py-12 mt-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/favicon.png" alt="In2itive Blinds" className="h-12 w-12" />
              <h3 className="font-bold text-lg">In2itive Blinds</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Premium custom blinds and window coverings for residential and commercial spaces in Ontario, Canada.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving Ontario, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:1-888-000-0000" className="hover:text-primary">1-888-000-0000</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@in2itiveblinds.com" className="hover:text-primary">info@in2itiveblinds.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/products/roller-shades" className="hover:text-primary transition-colors">Roller Shades</a></li>
              <li><a href="/products/vertical-blinds" className="hover:text-primary transition-colors">Vertical Blinds</a></li>
              <li><a href="/products/venetian-blinds" className="hover:text-primary transition-colors">Venetian Blinds</a></li>
              <li><a href="/products/honeycomb-shades" className="hover:text-primary transition-colors">Honeycomb Shades</a></li>
              <li><a href="/products/drapery" className="hover:text-primary transition-colors">Custom Drapery</a></li>
              <li><a href="/products/motorization" className="hover:text-primary transition-colors">Motorization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog & Tips</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact-sales" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Design Inspiration Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get design tips, special offers, and window treatment inspiration delivered to your inbox.
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
        
        <div className="border-t pt-8 text-center text-muted-foreground relative">
          <p>&copy; {currentYear} In2itive Blinds. All rights reserved.</p>
          <p className="mt-2 text-sm">Premium Window Coverings in Ontario, Canada</p>
          
          {/* 🔒 Discrete Admin Access */}
          <a 
            href="/admin" 
            className="absolute right-0 bottom-0 opacity-10 hover:opacity-100 transition-opacity duration-300"
            title="Admin Access"
          >
            <Lock className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
