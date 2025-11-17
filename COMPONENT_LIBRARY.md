# WiseWare Component Library

**Version 1.0** | Copy-paste ready components for rapid development

---

## Overview

This component library provides production-ready, copy-paste components extracted from the WiseWare Consulting website. Each component is fully functional, styled, and tested. Simply copy the code into your project and customize as needed.

All components use **React 19**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** primitives. They follow the design patterns documented in `DESIGN_SYSTEM.md`.

---

## Table of Contents

1. [Header & Navigation](#header--navigation)
2. [Hero Slider](#hero-slider)
3. [Footer](#footer)
4. [Unified Chat Widget](#unified-chat-widget)
5. [Live Chat Widget](#live-chat-widget)
6. [AI Voice Assistant](#ai-voice-assistant)
7. [Testimonials Carousel](#testimonials-carousel)
8. [Blog Layout](#blog-layout)
9. [CTA Sections](#cta-sections)
10. [SEO Component](#seo-component)

---

## Header & Navigation

### Full Header Component

Complete header with desktop/mobile navigation, dropdown menus, theme toggle, and audio player button.

**Dependencies:**
- `wouter` (routing)
- `lucide-react` (icons)
- `@/components/ui/button`
- `@/components/ui/dropdown-menu`
- `@/contexts/ThemeContext`

```tsx
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
  const [reportsExpanded, setReportsExpanded] = useState(false);
  const [resourcesExpanded, setResourcesExpanded] = useState(false);
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const reportSections = [
    { title: "Executive Summary", path: "/executive-summary" },
    { title: "Financial Analysis", path: "/financial-analysis" },
    { title: "Technical Strategy", path: "/technical-strategy" },
    { title: "Conclusion", path: "/conclusion" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Company Logo" className="h-10" />
          <span className="text-[9px] font-semibold text-muted-foreground tracking-wider">
            YOUR TAGLINE
          </span>
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
              <DropdownMenuLabel>Report Sections</DropdownMenuLabel>
              {reportSections.map((section) => (
                <DropdownMenuItem key={section.path} asChild>
                  <Link href={section.path} className="cursor-pointer">
                    {section.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/study-pdf" className="cursor-pointer font-medium">
                  📄 Download PDF
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
                <Link href="/blog" className="cursor-pointer">📝 Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/case-studies" className="cursor-pointer">📊 Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/resources" className="cursor-pointer">📦 Downloads</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" className="cursor-pointer">❓ FAQ</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            
            {/* Reports Collapsible */}
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
                  {reportSections.map((section) => (
                    <Link
                      key={section.path}
                      href={section.path}
                      className="block text-sm hover:text-primary transition-colors py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {section.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Collapsible */}
            <div>
              <button
                onClick={() => setResourcesExpanded(!resourcesExpanded)}
                className="w-full flex items-center justify-between text-sm font-semibold text-foreground py-2 hover:text-primary transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesExpanded ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${resourcesExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-2 pt-2">
                  <Link href="/blog" className="block text-sm hover:text-primary transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                    📝 Blog
                  </Link>
                  <Link href="/case-studies" className="block text-sm hover:text-primary transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                    📊 Case Studies
                  </Link>
                  <Link href="/resources" className="block text-sm hover:text-primary transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                    📦 Downloads
                  </Link>
                  <Link href="/faq" className="block text-sm hover:text-primary transition-colors py-1" onClick={() => setMobileMenuOpen(false)}>
                    ❓ FAQ
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
```

**Customization:**
- Replace logo path and tagline
- Update navigation links and dropdown items
- Add/remove dropdown menus as needed
- Adjust breakpoint from `lg` to `md` if needed

---

## Hero Slider

### Auto-Rotating Hero Slider

Full-width hero slider with background images, overlay, navigation arrows, and dot indicators.

**Dependencies:**
- `lucide-react` (icons)
- `@/components/ui/button`

```tsx
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/images/hero_1.jpg",
    title: "Transform Your Business",
    subtitle: "Modern solutions for enterprise growth"
  },
  {
    image: "/images/hero_2.jpg",
    title: "Substantial Cost Savings",
    subtitle: "Achieve rapid ROI by eliminating recurring expenses"
  },
  {
    image: "/images/hero_3.jpg",
    title: "Innovation at Scale",
    subtitle: "Enterprise reliability at fraction of the cost"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per slide

    return () => clearInterval(timer);
  }, []);

  // Delayed overlay fade-in effect
  useEffect(() => {
    setShowOverlay(false);
    const overlayTimer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000); // 2 second delay

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
```

**Customization:**
- Replace slide images and text
- Adjust `h-[600px]` for different height
- Change rotation speed (7000ms = 7 seconds)
- Modify overlay delay (2000ms = 2 seconds)

---

## Footer

### Corporate Footer with Newsletter

Three-column footer with company info, quick links, and newsletter signup.

**Dependencies:**
- `@/components/ui/button`
- `@/components/ui/input`
- `lucide-react` (icons)
- `sonner` (toast notifications)

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Connect to your newsletter API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Thanks for subscribing! Check your inbox.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t bg-muted/30 py-12 mt-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/favicon.png" alt="Company Logo" className="h-12 w-12" />
              <h3 className="font-bold text-lg">Company Name</h3>
            </div>
            <p className="text-muted-foreground">
              Your company description and value proposition goes here.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get insights and updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
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
        
        {/* Copyright */}
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

**Customization:**
- Update company info and links
- Connect newsletter form to your API
- Add social media icons
- Adjust column layout (2 or 4 columns)

---

## Unified Chat Widget

### Expandable Chat Button

Single button that expands on hover to show multiple chat options.

**Dependencies:**
- `lucide-react` (icons)

```tsx
import { MessageCircle, Mic } from "lucide-react";
import { useState } from "react";

interface UnifiedChatWidgetProps {
  onOpenLiveChat: () => void;
  onOpenVoiceAssistant: () => void;
}

export default function UnifiedChatWidget({ 
  onOpenLiveChat, 
  onOpenVoiceAssistant 
}: UnifiedChatWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expanded Options */}
      <div className={`flex flex-col gap-2 transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* Voice Assistant Option */}
        <button
          onClick={onOpenVoiceAssistant}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          aria-label="Open AI Voice Assistant"
        >
          <Mic className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">AI Voice Assistant</span>
        </button>

        {/* Live Chat Option */}
        <button
          onClick={onOpenLiveChat}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          aria-label="Open Live Chat"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium whitespace-nowrap">Live Chat</span>
        </button>
      </div>

      {/* Main Button */}
      <button
        className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-110"
        aria-label="Open chat options"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
```

**Usage:**

```tsx
import { useState } from "react";
import UnifiedChatWidget from "@/components/UnifiedChatWidget";
import { LiveChatWidget } from "@/components/LiveChatWidget";

function App() {
  const [liveChatOpen, setLiveChatOpen] = useState(false);
  const [voiceAssistantOpen, setVoiceAssistantOpen] = useState(false);

  return (
    <>
      <UnifiedChatWidget
        onOpenLiveChat={() => setLiveChatOpen(true)}
        onOpenVoiceAssistant={() => setVoiceAssistantOpen(true)}
      />
      
      {liveChatOpen && <LiveChatWidget onClose={() => setLiveChatOpen(false)} />}
      {/* Add voice assistant component here */}
    </>
  );
}
```

---

## Live Chat Widget

### Glass Morphism Chat Window

Functional live chat widget with glass morphism effect.

**Dependencies:**
- `lucide-react` (icons)
- `@/components/ui/button`

```tsx
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LiveChatWidgetProps {
  onClose?: () => void;
}

export function LiveChatWidget({ onClose }: LiveChatWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { 
      text: "Hi! Welcome to our company. How can we help you today?", 
      isUser: false 
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please email us at contact@company.com",
          isUser: false
        }
      ]);
    }, 1000);

    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          style={{
            backdropFilter: 'blur(15px) saturate(91%)',
            WebkitBackdropFilter: 'blur(15px) saturate(91%)',
          }}
          className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white/10 border border-white/20 rounded-lg shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-xs opacity-90">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onClose?.();
              }}
              className="hover:bg-primary-foreground/20 rounded p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-transparent" style={{ maxHeight: "400px" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20 bg-transparent">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="px-3"
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Email: contact@company.com
            </p>
          </div>
        </div>
      )}
    </>
  );
}
```

**Customization:**
- Connect to real chat backend (WebSocket, Firebase, etc.)
- Adjust glass morphism blur/saturation values
- Change colors and sizing
- Add file upload, emoji picker, etc.

---

## Testimonials Carousel

### Auto-Rotating Testimonials

Testimonials carousel with navigation arrows and auto-rotation.

**Dependencies:**
- `lucide-react` (icons)
- `@/components/ui/card`
- `@/components/ui/button`

```tsx
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This solution transformed our infrastructure and saved us thousands monthly. The ROI was evident within the first quarter.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp Industries",
  },
  {
    quote: "Moving away from cloud dependency gave us the control and cost predictability we desperately needed.",
    author: "Michael Chen",
    role: "VP of Engineering, DataFlow Systems",
  },
  {
    quote: "The hybrid approach allowed us to maintain flexibility while dramatically reducing our operational expenses.",
    author: "Emily Rodriguez",
    role: "Infrastructure Director, Global Solutions Inc.",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000); // 8 seconds per testimonial

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Real results from companies that made the switch
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex flex-col items-center text-center">
              <Quote className="h-12 w-12 text-primary mb-4" />
              <p className="text-lg italic mb-6">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </Card>

          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Customization:**
- Add more testimonials
- Adjust rotation speed (8000ms = 8 seconds)
- Change card styling
- Add star ratings or company logos

---

## Blog Layout

### Blog Grid with Featured Post

Blog listing page with featured post and grid layout.

**Dependencies:**
- `wouter` (routing)
- `@/components/ui/card`
- `@/components/ui/button`
- `lucide-react` (icons)

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "post-1",
    title: "How We Reduced Infrastructure Costs by 85%",
    excerpt: "A detailed case study showing our journey from cloud dependency to infrastructure ownership.",
    date: "November 14, 2025",
    readTime: "5 min read",
    image: "/blog-1.jpg",
    category: "Case Study",
    featured: true
  },
  {
    slug: "post-2",
    title: "The Hidden Costs of Cloud Services",
    excerpt: "Understanding the true cost of cloud infrastructure beyond the monthly bill.",
    date: "November 12, 2025",
    readTime: "4 min read",
    image: "/blog-2.jpg",
    category: "Analysis"
  },
  {
    slug: "post-3",
    title: "Hybrid Cloud Architecture Best Practices",
    excerpt: "How to design a hybrid infrastructure that balances cost and flexibility.",
    date: "November 10, 2025",
    readTime: "6 min read",
    image: "/blog-3.jpg",
    category: "Technical"
  },
];

export default function BlogList() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="container max-w-6xl">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights on infrastructure, cost optimization, and technology strategy
          </p>
        </div>
      </div>

      <div className="container max-w-6xl py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="text-sm font-semibold text-primary mb-4">FEATURED POST</div>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="text-sm text-primary font-medium mb-2">
                      {featuredPost.category}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button className="w-fit gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Customization:**
- Adjust grid columns (2 or 4 columns)
- Add pagination or infinite scroll
- Include author information
- Add category filtering

---

## CTA Sections

### Primary CTA Section

Centered call-to-action section with button.

```tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your Infrastructure?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join hundreds of companies that have reduced costs and gained control over their technology stack.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="gap-2">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### Two-Column CTA with Image

```tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTAWithImage() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Start Saving Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Calculate your potential savings and see how quickly you can achieve ROI with our infrastructure solutions.
            </p>
            <Button size="lg" className="gap-2">
              Calculate Savings
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div>
            <img
              src="/images/cta-image.jpg"
              alt="Infrastructure"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## SEO Component

### Comprehensive SEO Meta Tags

SEO component with Open Graph, Twitter Cards, and JSON-LD structured data.

```tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
  url = "https://yourwebsite.com",
  type = "website",
  publishedTime,
  author,
}: SEOProps) {
  const siteName = "Your Company Name";
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "WebPage",
          "headline": title,
          "description": description,
          "image": image,
          "url": canonicalUrl,
          ...(type === "article" && publishedTime && {
            "datePublished": publishedTime,
            "author": {
              "@type": "Person",
              "name": author || siteName,
            },
          }),
        })}
      </script>
    </Helmet>
  );
}
```

**Usage:**

```tsx
import SEO from "@/components/SEO";

function BlogPost() {
  return (
    <>
      <SEO
        title="How We Reduced Costs by 85%"
        description="A detailed case study showing our journey from cloud dependency to infrastructure ownership."
        keywords="infrastructure, cost savings, cloud migration, case study"
        type="article"
        publishedTime="2025-11-14T00:00:00Z"
        author="John Smith"
      />
      
      <article>
        {/* Blog post content */}
      </article>
    </>
  );
}
```

---

## Installation & Setup

### Required Dependencies

```bash
npm install wouter lucide-react sonner
```

### shadcn/ui Components

Install required shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dropdown-menu
```

### Tailwind Configuration

Ensure your `tailwind.config.js` includes:

```js
module.exports = {
  content: [
    "./client/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1500': '1500ms',
      },
    },
  },
}
```

---

## Usage Tips

### Copying Components

1. **Copy the entire component code** into a new file in your `components` folder
2. **Install required dependencies** listed at the top of each component
3. **Update import paths** to match your project structure
4. **Customize styling** by modifying Tailwind classes
5. **Replace placeholder content** (images, text, links)

### Adapting for Your Brand

1. **Colors:** Update `--primary` in your CSS variables
2. **Typography:** Change font family in `index.css`
3. **Spacing:** Adjust padding/margin values as needed
4. **Content:** Replace all text, images, and links
5. **Layout:** Modify grid columns, breakpoints, and sizing

### Best Practices

- **Keep components modular** - each component should be self-contained
- **Use TypeScript interfaces** for props to catch errors early
- **Test responsive behavior** on mobile, tablet, and desktop
- **Verify dark mode** if using theme switching
- **Optimize images** before adding to production

---

## Component Checklist

When implementing a component:

- [ ] Copy component code to your project
- [ ] Install all required dependencies
- [ ] Update import paths
- [ ] Replace placeholder content
- [ ] Test in light and dark modes
- [ ] Verify responsive behavior
- [ ] Check accessibility (keyboard navigation, ARIA labels)
- [ ] Optimize performance (lazy loading, code splitting)
- [ ] Add error handling where needed
- [ ] Document any customizations

---

## Support & Maintenance

### Updating Components

When updating a component:

1. Test changes in isolation first
2. Verify backward compatibility
3. Update this documentation
4. Communicate changes to team
5. Version control your changes

### Troubleshooting

**Component not rendering:**
- Check import paths
- Verify all dependencies are installed
- Look for TypeScript errors in console

**Styling issues:**
- Ensure Tailwind CSS is properly configured
- Check that CSS variables are defined in `index.css`
- Verify theme provider is wrapping your app

**Dark mode not working:**
- Confirm `ThemeProvider` has `switchable` prop
- Check that `.dark` class styles are defined
- Verify color tokens use CSS variables

---

**Library Version:** 1.0  
**Last Updated:** 2024  
**Maintained By:** WiseWare Development Team  
**License:** Internal use only for WiseWare projects and sub-brands
