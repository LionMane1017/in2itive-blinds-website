import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "In2itive Blinds transformed our home with beautiful motorized roller shades. The installation was flawless and the smart home integration works perfectly!",
    author: "Sarah Chen",
    title: "Homeowner",
    company: "Toronto, ON",
    logo: "🏡"
  },
  {
    quote: "We needed custom blinds for our entire office building. In2itive delivered premium quality on time and within budget. Highly recommended!",
    author: "Michael Rodriguez",
    title: "Facilities Manager",
    company: "Markham Business Center",
    logo: "🏢"
  },
  {
    quote: "The honeycomb shades have made a noticeable difference in our energy bills. Plus they look amazing! Best investment we've made for our home.",
    author: "Jennifer Park",
    title: "Homeowner",
    company: "Mississauga, ON",
    logo: "🏠"
  },
  {
    quote: "Professional service from start to finish. The free consultation helped us choose the perfect blinds for each room. Couldn't be happier!",
    author: "David Thompson",
    title: "Homeowner",
    company: "Oakville, ON",
    logo: "🏡"
  },
  {
    quote: "In2itive's outdoor awnings and screens have completely transformed our patio. We can now enjoy our outdoor space all summer long!",
    author: "Lisa Martinez",
    title: "Homeowner",
    company: "Burlington, ON",
    logo: "🏠"
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
            Hear from satisfied customers across Ontario who love their new window treatments
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
