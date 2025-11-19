import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  name: string;
  path: string;
  icon: string;
}

const products: Product[] = [
  { name: "Roller Shades", path: "/products/roller-shades", icon: "🪟" },
  { name: "Vertical Blinds", path: "/products/vertical-blinds", icon: "📏" },
  { name: "Venetian Blinds", path: "/products/venetian-blinds", icon: "🎚️" },
  { name: "Honeycomb Shades", path: "/products/honeycomb-shades", icon: "🐝" },
  { name: "Custom Drapery", path: "/products/drapery", icon: "🎭" },
  { name: "Motorization", path: "/products/motorization", icon: "⚡" },
  { name: "Retractable Awnings", path: "/products/awnings", icon: "☂️" },
  { name: "Outdoor Screens", path: "/products/outdoor-screens", icon: "🌿" },
];

interface ProductNavigatorProps {
  currentPath: string;
}

export default function ProductNavigator({ currentPath }: ProductNavigatorProps) {
  const currentIndex = products.findIndex(p => p.path === currentPath);
  
  if (currentIndex === -1) return null;
  
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;
  
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <AnimatePresence>
            {prevProduct && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="pointer-events-auto"
              >
                <Link href={prevProduct.path}>
                  <button className="group flex items-center gap-3 px-6 py-4 rounded-r-2xl bg-background/80 backdrop-blur-xl border border-l-0 border-border/40 hover:bg-background/95 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:pr-8">
                    <ChevronLeft className="w-6 h-6 text-primary group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <div className="text-2xl mb-1">{prevProduct.icon}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Previous</div>
                      <div className="text-sm font-semibold text-foreground">{prevProduct.name}</div>
                    </div>
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {nextProduct && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="pointer-events-auto ml-auto"
              >
                <Link href={nextProduct.path}>
                  <button className="group flex items-center gap-3 px-6 py-4 rounded-l-2xl bg-background/80 backdrop-blur-xl border border-r-0 border-border/40 hover:bg-background/95 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:pl-8">
                    <div className="text-right">
                      <div className="text-2xl mb-1">{nextProduct.icon}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Next</div>
                      <div className="text-sm font-semibold text-foreground">{nextProduct.name}</div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
