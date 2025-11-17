import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Cloud, HardDrive, Shield } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function TechnicalStrategy() {
  const { previousPage, nextPage } = getPageNavigation("/technical-strategy");

  return (
      <>
      <SEO 
        title="Technical Implementation Strategy"
        description="Step-by-step technical strategy for implementing and managing hybrid infrastructure."
        keywords="technical strategy, implementation plan, infrastructure deployment, migration strategy"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "Technical Strategy" }]} />
        <ProgressIndicator current={7} total={10} sectionTitle="Technical Strategy" />
        <h1 className="text-4xl font-bold mb-8">Technical Strategy: Sovereign Hybrid Redundancy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl leading-relaxed">
            This plan future-proofs the company by solving for scaling, uptime, and disaster recovery. This is the modern, hybrid approach every good CTO should use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <HardDrive className="h-10 w-10 mb-3 text-primary" />
              <CardTitle>Static Sites (The Free Tier)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All simple static HTML websites will be hosted from S3 BUCKETS (using cheap storage like Backblaze B2). This costs us next to nothing and frees our cluster for high-value services.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 mb-3 text-primary" />
              <CardTitle>Local Uptime (Power Outages)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We will connect the entire server rack to an Uninterruptible Power Supply (UPS). This is a battery that keeps everything running perfectly during short outages.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cloud className="h-10 w-10 mb-3 text-primary" />
              <CardTitle>Disaster Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>All customer data is backed up every night to AWS S3, GCP, and Oracle Cloud using their cheap, geographically diverse storage tiers.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 bg-muted/30 border-border/40">
          <CardHeader>
            <CardTitle>Disaster Recovery: Fire or Flood</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                This is where our hybrid plan shines:
              </p>
              <ul className="text-lg space-y-3 list-disc pl-6">
                <li>All customer data is backed up every night to <strong>AWS S3, GCP, and Oracle Cloud</strong> (using their cheap, geographically diverse storage tiers).</li>
                <li><strong>Recovery Time:</strong> If our entire physical location is destroyed (fire/flood), we can simply download the latest backups from one of the three cloud providers and restore our entire operation on new hardware (or a rental cloud server) in a different physical location in just a few hours.</li>
                <li>This fast recovery is only possible because we are not locked into one provider.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}