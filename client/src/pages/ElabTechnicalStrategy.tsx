import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabTechnicalStrategy() {
  const { previousPage, nextPage } = getPageNavigation("/elab-technical-strategy");

  return (
      <>
      <SEO 
        title="Implementation Strategy Explained"
        description="Straightforward explanation of how infrastructure transformation will be implemented."
        keywords="implementation plan, rollout strategy, migration approach, deployment plan"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Technical Strategy" }]} />
        <ProgressIndicator current={7} total={10} sectionTitle="Technical Strategy" />
        <h1 className="text-4xl font-bold mb-8">Technical Strategy: Sovereign Hybrid Redundancy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            This plan future-proofs the company by solving for scaling, uptime, and disaster recovery. This is the 
            modern, hybrid approach every good CTO should use.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6">Static Sites (The "Free" Tier)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            All simple static HTML websites will be hosted from S3 BUCKETS (using cheap storage like Backblaze B2). 
            This costs us next to nothing and frees our cluster for high-value services.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Local Uptime (Power Outages)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            We will connect the entire server rack to an Uninterruptible Power Supply (UPS). This is a battery that 
            keeps everything running perfectly during short outages.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Disaster Recovery (Fire or Flood)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            This is where our hybrid plan shines:
          </p>

          <ul className="text-lg space-y-4 my-6 list-disc pl-6">
            <li>
              All customer data is backed up every night to <strong>AWS S3, GCP, and Oracle Cloud</strong> (using their 
              cheap, geographically diverse storage tiers).
            </li>
            <li>
              <strong>Recovery Time:</strong> If our entire physical location is destroyed (fire/flood), we can simply 
              download the latest backups from one of the three cloud providers and restore our entire operation on new 
              hardware (or a rental cloud server) in a different physical location in just a few hours. This fast recovery 
              is only possible because we aren't locked into one provider.
            </li>
          </ul>

          <div className="my-8 p-6 bg-muted/30 border border-border/40 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Hybrid Architecture Benefits</h3>
            <ul className="space-y-2">
              <li>✓ <strong>Multi-cloud backups</strong> - No single point of failure</li>
              <li>✓ <strong>Geographic diversity</strong> - Data replicated across regions</li>
              <li>✓ <strong>Fast disaster recovery</strong> - Restore from any provider in hours</li>
              <li>✓ <strong>Cost optimization</strong> - Use cloud only for storage, not compute</li>
              <li>✓ <strong>Vendor independence</strong> - Never locked into one ecosystem</li>
            </ul>
          </div>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
