import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";

interface PageNavigationProps {
  previousPage?: { title: string; path: string };
  nextPage?: { title: string; path: string };
}

export default function PageNavigation({ previousPage, nextPage }: PageNavigationProps) {
  const [, setLocation] = useLocation();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavigation = (path: string) => {
    setLocation(path);
    // Force immediate scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  };

  return (
    <div className="border-t border-border/30 py-12 mt-16">
      <div className="container max-w-5xl">
        <div className="flex justify-between items-center gap-8">
          {previousPage ? (
            <button
              onClick={() => handleNavigation(previousPage.path)}
              className="group flex items-center gap-4 px-6 py-4 rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="p-2 rounded-full border border-border/40 group-hover:border-foreground/30 transition-colors">
                <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Previous</div>
                <div className="text-sm font-medium text-foreground">{previousPage.title}</div>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextPage ? (
            <button
              onClick={() => handleNavigation(nextPage.path)}
              className="group flex items-center gap-4 px-6 py-4 rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300 ml-auto"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Next</div>
                <div className="text-sm font-medium text-foreground">{nextPage.title}</div>
              </div>
              <div className="p-2 rounded-full border border-border/40 group-hover:border-foreground/30 transition-colors">
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
