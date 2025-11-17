import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import PageNavigation from "@/components/PageNavigation";
import ContactForm from "@/components/ContactForm";
import { getPageNavigation } from "@/lib/navigation";

export default function Conclusion() {
  return (
      <>
      <SEO 
        title="Conclusion & Recommendations"
        description="Final recommendations and next steps for infrastructure transformation initiative."
        keywords="infrastructure conclusion, recommendations, next steps, action plan"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "Conclusion" }]} />
        <ProgressIndicator current={10} total={10} sectionTitle="Conclusion" />
        <h1 className="text-4xl font-bold mb-8">Conclusion & CTO Recommendation</h1>
        
        <Card className="mb-12 bg-background/60 backdrop-blur-sm border-border/40 border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed">
                This comprehensive study confirms the massive financial benefit of transitioning to the Wise Cluster. It is the only way to launch our ambitious new product suite (WiseWare Workspaces, WiseCloud Home Hub) while simultaneously cutting our current operational costs and achieving a gold-standard hybrid redundancy setup.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-green-500/50 bg-green-50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Financial Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>$3,420+ annual savings</strong> after ROI period</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>8-month ROI</strong> with full cluster</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-green-600 flex-shrink-0" />
                  <span><strong>4.4-month ROI</strong> with conservative start</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-green-600 flex-shrink-0" />
                  <span>Eliminates CPU throttling penalties</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-500/50 bg-blue-50 dark:bg-blue-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <CheckCircle2 className="h-6 w-6" />
                Strategic Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Enables new product launches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Zero vendor lock-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>High availability architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-blue-600 flex-shrink-0" />
                  <span>Multi-cloud disaster recovery</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 border-primary/50">
          <CardHeader>
            <CardTitle className="text-2xl">Final Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed font-semibold">
                I strongly recommend immediate approval for the CTO proposed investment, whether starting with the conservative $1,575 (Strategy B) or the full $2,900 (Strategy A), to begin this critical migration.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Prepared by [Your Firm Name] on behalf of the CTO.
              </p>
              <p className="text-lg leading-relaxed italic">
                Pleading the cause for a smarter, faster, and cheaper infrastructure.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 pt-16 border-t">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how infrastructure ownership can benefit your organization
            </p>
          </div>
          <ContactForm />
        </div>

        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" variant="outline">
              Back to Home
            </Button>
          </Link>
        </div>

        <PageNavigation />
      </div>
    </div>
    </>
  );
}