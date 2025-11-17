import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/images/hero_slider_1.jpg",
    title: "Infrastructure Excellence",
    subtitle: "Modern data center solutions for enterprise growth"
  },
  {
    image: "/images/hero_slider_2.jpg",
    title: "Substantial Cost Savings",
    subtitle: "Achieve rapid ROI by eliminating recurring cloud expenses"
  },
  {
    image: "/images/hero_slider_3.jpg",
    title: "Cloud Cost Optimization",
    subtitle: "Break free from vendor lock-in"
  },
  {
    image: "/images/hero_slider_4.jpg",
    title: "Micro Server Cluster",
    subtitle: "Enterprise reliability at fraction of the cost"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Slowed down from 5000ms to 7000ms

    return () => clearInterval(timer);
  }, []);

  // Delayed overlay fade-in effect
  useEffect(() => {
    setShowOverlay(false);
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);

    return () => clearTimeout(overlayTimer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-1500 ease-in-out ${
              showOverlay ? "opacity-100" : "opacity-0"
            }`} />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl text-gray-200">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
