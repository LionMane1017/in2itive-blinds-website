import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabVendorLockin() {
  const { previousPage, nextPage } = getPageNavigation("/elab-vendor-lockin");

  return (
      <>
      <SEO 
        title="Understanding Vendor Lock-in - Elaborated Report"
        description="Simple explanation of vendor lock-in risks and why infrastructure independence matters for business."
        keywords="vendor lock-in explained, business risk, infrastructure control, cloud dependency"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Vendor Lock-in" }]} />
        <ProgressIndicator current={2} total={10} sectionTitle="Vendor Lock-in" />
        <h1 className="text-4xl font-bold mb-8">The Critical Urgency: Avoiding Vendor Lock-in</h1>
        
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            This switch must be done <strong>now</strong>, before we launch our first customer campaign. The alternative is 
            financial disaster.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6">What is Vendor Lock-in? (ELI5)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            It's like building your new house <em>inside</em> the rental car. If we wait and start signing up thousands 
            of customers while using AWS, all our data and software will become trapped inside Amazon's system. 
            Moving later—once our services are in production—would be incredibly complex, expensive, and risky, 
            causing outages and costing us hundreds of thousands of dollars.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Proof (See Section 9)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            As validated by the former CTO in the video below, large companies today are spending millions on 
            painful "repatriation projects" just to escape this exact trap.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Benefit</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            By moving to our own Wise Cluster now, we retain full ownership of our infrastructure and are free 
            to use any cloud (AWS, GCP, Oracle) only for cheap, non-critical services like backups.
          </p>

          <div className="my-8 p-6 bg-muted/30 border border-border/40 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Key Takeaway</h3>
            <p className="text-lg leading-relaxed">
              Moving now prevents vendor lock-in and saves us from a multi-million dollar migration nightmare 
              in the future. This is our window of opportunity—before we have customers dependent on cloud infrastructure.
            </p>
          </div>
        </div>
        

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
