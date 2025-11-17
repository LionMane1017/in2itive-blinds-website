import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Switching to owned infrastructure reduced our cloud costs by 73% in the first year. The ROI was even faster than projected.",
    author: "Sarah Chen",
    title: "VP of Infrastructure",
    company: "TechFlow Solutions",
    logo: "🏢" // Placeholder - replace with actual logo
  },
  {
    quote: "We eliminated vendor lock-in and gained complete control over our infrastructure. The cost savings have been transformational for our bottom line.",
    author: "Michael Rodriguez",
    title: "CTO",
    company: "DataSync Corp",
    logo: "🏛️" // Placeholder - replace with actual logo
  },
  {
    quote: "The payback period was just 8 months. Now we're saving over $50,000 annually while maintaining enterprise-grade reliability.",
    author: "Jennifer Park",
    title: "Director of IT Operations",
    company: "CloudScale Industries",
    logo: "🏭" // Placeholder - replace with actual logo
  },
  {
    quote: "Our infrastructure costs dropped 68% after migrating to owned servers. The performance improvements were an unexpected bonus.",
    author: "David Thompson",
    title: "Chief Technology Officer",
    company: "InnovateTech Group",
    logo: "🏢" // Placeholder - replace with actual logo
  },
  {
    quote: "We achieved full infrastructure ownership in under a year. The annual savings now fund our entire R&D department.",
    author: "Lisa Martinez",
    title: "VP of Engineering",
    company: "NextGen Systems",
    logo: "🏛️" // Placeholder - replace with actual logo
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from enterprise leaders who transformed their infrastructure economics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background border rounded-lg p-12 shadow-sm">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            {/* Testimonial Content */}
            <div className="relative z-10">
              <blockquote className="text-xl text-foreground mb-8 italic leading-relaxed">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Company Logo Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                    {current.logo}
                  </div>

                  {/* Author Info */}
                  <div>
                    <div className="font-semibold text-foreground">{current.author}</div>
                    <div className="text-sm text-muted-foreground">{current.title}</div>
                    <div className="text-sm text-muted-foreground font-medium">{current.company}</div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
