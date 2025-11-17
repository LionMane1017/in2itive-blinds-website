import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, Moon, Sun, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { AudioPlayer } from "@/components/AudioPlayer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlayerOpen, setAudioPlayerOpen] = useState(false);
  const [showAudioPrompt, setShowAudioPrompt] = useState(true);
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAudioPrompt(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Condensed report sections removed per user request
  
  const elaboratedReportSections = [
    { title: "Executive Summary", path: "/elab-executive-summary" },
    { title: "Vendor Lock-in", path: "/elab-vendor-lockin" },
    { title: "CTO Strategic Vision", path: "/elab-cto-vision" },
    { title: "Current Infrastructure", path: "/elab-current-infrastructure" },
    { title: "The Solution", path: "/elab-solution" },
    { title: "Financial Analysis", path: "/elab-financial-analysis" },
    { title: "Technical Strategy", path: "/elab-technical-strategy" },
    { title: "CTO Validation", path: "/elab-cto-validation" },
    { title: "Supporting Evidence", path: "/elab-supporting-evidence" },
    { title: "Conclusion", path: "/elab-conclusion" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Wise Media" className="h-10" />
          <span className="text-[9px] font-semibold text-muted-foreground tracking-wider">I.T. CONSULTANCY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          
          {/* Reports Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              Reports
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel>Elaborated Report</DropdownMenuLabel>
              {elaboratedReportSections.map((section) => (
                <DropdownMenuItem key={section.path} asChild>
                  <Link href={section.path} className="cursor-pointer">
                    {section.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/study" className="cursor-pointer font-medium">
                  📄 Condensed Study PDF
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/elaborated-study" className="cursor-pointer font-medium">
                  📄 Elaborated Study PDF
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/blog" className="cursor-pointer">
                  📝 Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/case-studies" className="cursor-pointer">
                  📊 Case Studies
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/demo" className="cursor-pointer">
                  🎥 Media & Videos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources" className="cursor-pointer">
                  📦 Downloads
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" className="cursor-pointer">
                  ❓ FAQ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              Tools
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/tools" className="cursor-pointer">
                  🧮 ROI Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/comparison" className="cursor-pointer">
                  ⚖️ Provider Comparison
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          
          <Link href="/contact-sales" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setAudioPlayerOpen(true);
                setShowAudioPrompt(false);
              }}
              className="ml-2 relative"
            >
              <Headphones className="h-5 w-5" />
              {showAudioPrompt && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              )}
            </Button>
            {showAudioPrompt && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover text-popover-foreground p-3 rounded-lg shadow-lg border animate-in fade-in slide-in-from-top-2 z-50">
                <p className="text-xs font-medium">🎧 Listen to our Audio Blog!</p>
                <p className="text-xs text-muted-foreground mt-1">Click to start</p>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setAudioPlayerOpen(true);
              setShowAudioPrompt(false);
              setMobileMenuOpen(false);
            }}
            className="relative"
          >
            <Headphones className="h-5 w-5" />
            {showAudioPrompt && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t max-h-[70vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col space-y-2">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Reports Collapsible Section */}
            <div>
              <button
                onClick={() => setReportsExpanded(!reportsExpanded)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                <span>Reports</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${reportsExpanded ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${reportsExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  {elaboratedReportSections.map((section) => (
                    <Link
                      key={section.path}
                      href={section.path}
                      className="block text-sm hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {section.title}
                    </Link>
                  ))}
                  <Link
                    href="/study"
                    className="block text-sm font-medium hover:text-primary transition-colors py-1 mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📄 Condensed Study PDF
                  </Link>
                  <Link
                    href="/elaborated-study"
                    className="block text-sm font-medium hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📄 Elaborated Study PDF
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resources Collapsible Section */}
            <div>
              <button
                onClick={() => setResourcesExpanded(!resourcesExpanded)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesExpanded ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${resourcesExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  <Link
                    href="/blog"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📝 Blog
                  </Link>
                  <Link
                    href="/case-studies"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📊 Case Studies
                  </Link>
                  <Link
                    href="/demo"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🎥 Media & Videos
                  </Link>
                  <Link
                    href="/resources"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📦 Downloads
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ❓ FAQ
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Tools Collapsible Section */}
            <div>
              <button
                onClick={() => setToolsExpanded(!toolsExpanded)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                <span>Tools</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${toolsExpanded ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${toolsExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  <Link
                    href="/tools"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🧮 ROI Calculator
                  </Link>
                  <Link
                    href="/comparison"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ⚖️ Provider Comparison
                  </Link>
                </div>
              </div>
            </div>
            
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact-sales"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      
      <AudioPlayer isOpen={audioPlayerOpen} onClose={() => setAudioPlayerOpen(false)} />
    </header>
  );
}
