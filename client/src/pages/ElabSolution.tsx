import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabSolution() {
  const { previousPage, nextPage } = getPageNavigation("/elab-solution");

  return (
      <>
      <SEO 
        title="Proposed Solution Explained"
        description="Clear explanation of proposed infrastructure solution and its business benefits."
        keywords="infrastructure solution, business benefits, hybrid cloud, owned infrastructure"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "The Solution" }]} />
        <ProgressIndicator current={5} total={10} sectionTitle="The Solution" />
        <h1 className="text-4xl font-bold mb-8">The Solution: The "Wise Cluster" 💡</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            The solution is to replace all 10 rental instances with a single, resilient system: a <strong>Proxmox 
            Cluster</strong> built from 10 ZimaBoard 2 servers.
          </p>

          <ul className="text-lg space-y-4 my-6 list-disc pl-6">
            <li>
              <strong>Wise Cluster (ELI5):</strong> Instead of one giant, expensive truck that carries everything, we are 
              buying a fleet of 10 small, smart delivery vans for $2,900. If one van gets a flat tire, the other 9 simply 
              pick up its packages. Nobody even notices. This is <strong>High Availability</strong> at a fraction of the cost 
              of a traditional server.
            </li>
          </ul>

          <div className="my-8 p-6 bg-muted/30 border border-border/40 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-2">
              <li>✓ <strong>Eliminates $360/month cloud costs</strong> - Pure savings after 8-month ROI</li>
              <li>✓ <strong>No CPU throttling</strong> - Dedicated resources, always fast</li>
              <li>✓ <strong>High availability</strong> - Cluster design prevents single points of failure</li>
              <li>✓ <strong>Enables new products</strong> - Hardware video encoding for WiseWare & WiseCloud</li>
              <li>✓ <strong>Avoids vendor lock-in</strong> - Full infrastructure ownership and control</li>
            </ul>
          </div>

          <div className="my-8">
            <img 
              src="/zimaboard-product.jpg" 
              alt="ZimaBoard 2 Server" 
              className="w-full max-w-2xl mx-auto rounded-lg border border-border/40"
            />
            <p className="text-center text-sm text-muted-foreground mt-2">ZimaBoard 2: Enterprise performance in a compact form factor</p>
          </div>

          <div className="my-8">
            <img 
              src="/cluster-rack.jpg" 
              alt="10-node cluster rack" 
              className="w-full max-w-2xl mx-auto rounded-lg border border-border/40"
            />
            <p className="text-center text-sm text-muted-foreground mt-2">Sample rack configuration: 10 ZimaBoards in high-availability cluster</p>
          </div>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
