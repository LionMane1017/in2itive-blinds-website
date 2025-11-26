import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
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
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const productCategories = [
    { title: "Roller Shades", path: "/products/roller-shades" },

    { title: "Vertical Blinds", path: "/products/vertical-blinds" },
    { title: "Venetian Blinds", path: "/products/venetian-blinds" },
    { title: "Honeycomb Shades", path: "/products/honeycomb-shades" },
    { title: "Drapery", path: "/products/drapery" },
  ];

  const outdoorProducts = [
    { title: "Retractable Awnings", path: "/products/awnings" },

    { title: "Outdoor Screens", path: "/products/outdoor-screens" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="In2itive Blinds" className="h-10" />
          <span className="text-sm font-semibold text-foreground ml-2">Blinds</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              Products
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel>Indoor Window Coverings</DropdownMenuLabel>
              {productCategories.map((product) => (
                <DropdownMenuItem key={product.path} asChild>
                  <Link href={product.path} className="cursor-pointer">
                    {product.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Outdoor Solutions</DropdownMenuLabel>
              {outdoorProducts.map((product) => (
                <DropdownMenuItem key={product.path} asChild>
                  <Link href={product.path} className="cursor-pointer">
                    {product.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/products/motorization" className="cursor-pointer font-medium">
                  🔌 Motorization & Smart Home
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
                <Link href="/gallery" className="cursor-pointer">
                  🖼️ Gallery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog" className="cursor-pointer">
                  📝 Blog & Tips
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" className="cursor-pointer">
                  ❓ FAQ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/film-production" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
            Film Production
            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded font-bold">COMMERCIAL</span>
          </Link>

          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          
          <Link href="/contact-sales" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>

          <Link href="/contact-sales">
            <Button size="sm" className="ml-2">
              Free Consultation
            </Button>
          </Link>

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
            
            {/* Products Collapsible Section */}
            <div>
              <button
                onClick={() => setProductsExpanded(!productsExpanded)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsExpanded ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${productsExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Indoor Window Coverings</p>
                  {productCategories.map((product) => (
                    <Link
                      key={product.path}
                      href={product.path}
                      className="block text-sm hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {product.title}
                    </Link>
                  ))}
                  <p className="text-xs font-semibold text-muted-foreground mb-2 mt-4">Outdoor Solutions</p>
                  {outdoorProducts.map((product) => (
                    <Link
                      key={product.path}
                      href={product.path}
                      className="block text-sm hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {product.title}
                    </Link>
                  ))}
                  <Link
                    href="/products/motorization"
                    className="block text-sm font-medium hover:text-primary transition-colors py-1 mt-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🔌 Motorization & Smart Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Film Production Link */}
            <Link
              href="/film-production"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Film Production
              <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded font-bold ml-2">COMMERCIAL</span>
            </Link>
            <div>
              <button
                onClick={() => setResourcesExpanded(!resourcesExpanded)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesExpanded ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${resourcesExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  <Link
                    href="/gallery"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🖼️ Gallery
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-sm hover:text-primary transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📝 Blog & Tips
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

            <Link
              href="/contact-sales"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button size="sm" className="w-full mt-2">
                Free Consultation
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
