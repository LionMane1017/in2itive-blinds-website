import { SEO } from "@/components/SEO";
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
      <>
      <SEO 
        title="Infrastructure Excellence"
        description="Modern data center solutions for enterprise growth. Comprehensive feasibility study demonstrating $3,420+ annual savings with 8-month ROI."
        keywords="infrastructure, cloud savings, ROI, data center, Proxmox, ZimaBoard"
      />
      <div className="min-h-screen">
      <HeroSlider />
      
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Feasibility Study: Owned Infrastructure vs. Cloud Providers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive analysis demonstrating how enterprises achieve substantial annual savings with rapid ROI while enabling new revenue streams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <DollarSign className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Substantial Annual Savings</CardTitle>
                <CardDescription>
                  Eliminate recurring cloud costs with strategic one-time infrastructure investment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Rapid ROI</CardTitle>
                <CardDescription>
                  Fast payback period (typically 6-12 months) with guaranteed profit after first year
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>Zero Vendor Lock-in</CardTitle>
                <CardDescription>
                  Full infrastructure ownership and multi-cloud flexibility
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/elab-executive-summary">
              <Button size="lg" className="gap-2">
                Read Full Report
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">The Simple Truth</h3>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg">
                  Many companies are paying <strong>$5,000-$50,000+ per month</strong> to rent cloud servers that automatically throttle performance when usage increases, forcing expensive upgrades.
                </p>
                <p className="text-lg">
                  By investing in owned infrastructure, organizations can eliminate recurring cloud costs with a <strong>one-time hardware investment</strong> that typically pays for itself in 6-12 months.
                </p>
                <p className="text-lg">
                  After the payback period, companies retain <strong>full ownership</strong> of their infrastructure while saving <strong>tens of thousands to millions annually</strong>—pure profit that would otherwise go to cloud providers.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/images/zimaboard_product.png" 
                alt="ZimaBoard 2 Server" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>


      <Testimonials />
    </div>
    </>
  );
}
