import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AlertTriangle } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function VendorLockin() {
  const { previousPage, nextPage } = getPageNavigation("/vendor-lockin");

  return (
      <>
      <SEO 
        title="Vendor Lock-in Analysis - Infrastructure Study"
        description="Understanding the risks and costs of cloud vendor lock-in and strategies for maintaining infrastructure flexibility."
        keywords="vendor lock-in, cloud dependency, infrastructure flexibility, multi-cloud"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "Vendor Lock-in" }]} />
        <ProgressIndicator current={2} total={10} sectionTitle="Vendor Lock-in" />
        <h1 className="text-4xl font-bold mb-8">The Critical Urgency: Avoiding Vendor Lock-in</h1>
        
        <Card className="mb-8 border-orange-500/50 bg-orange-50 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
              <AlertTriangle className="h-6 w-6" />
              Critical Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              This switch must be done <strong>now</strong>, before we launch our first customer campaign. The alternative is financial disaster.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What is Vendor Lock-in? (ELI5)</h2>
            <p className="text-lg leading-relaxed">
              It's like building your new house inside the rental car. If we wait and start signing up thousands of customers while using AWS, all our data and software will become trapped inside Amazon's system. Moving later—once our services are in production—would be incredibly complex, expensive, and risky, causing outages and costing us hundreds of thousands of dollars.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Proof</h2>
            <p className="text-lg leading-relaxed">
              As validated by the former CTO in the video (see Supporting Evidence section), large companies today are spending millions on painful "repatriation projects" just to escape this exact trap.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Benefit</h2>
            <p className="text-lg leading-relaxed">
              By moving to our own Wise Cluster now, we retain full ownership of our infrastructure and are free to use any cloud (AWS, GCP, Oracle) only for cheap, non-critical services like backups.
            </p>
          </section>

          <Card className="bg-muted/30 border-border/40 mt-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Key Takeaway</h3>
              <p className="text-lg">
                Acting now prevents a multi-million-dollar problem later. We maintain infrastructure sovereignty while using cloud providers strategically for their best-of-breed services.
              </p>
            </CardContent>
          </Card>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
