import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function Solution() {
  const { previousPage, nextPage } = getPageNavigation("/solution");

  return (
      <>
      <SEO 
        title="Proposed Infrastructure Solution"
        description="Detailed solution architecture for hybrid infrastructure with owned hardware and cloud integration."
        keywords="infrastructure solution, hybrid architecture, Proxmox cluster, ZimaBoard"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "The Solution" }]} />
        <ProgressIndicator current={5} total={10} sectionTitle="The Solution" />
        <h1 className="text-4xl font-bold mb-8">The Solution: The Wise Cluster</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl leading-relaxed">
            The solution is to replace all 10 rental instances with a single, resilient system: a Proxmox Cluster built from 10 ZimaBoard 2 servers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="/images/zimaboard_product.png" alt="ZimaBoard 2" className="rounded-lg shadow-lg w-full" />
            <p className="text-center text-sm text-muted-foreground mt-2">ZimaBoard 2 Single Board Server</p>
          </div>
          <div>
            <img src="/images/rack_cluster.jpg" alt="Server Rack Cluster" className="rounded-lg shadow-lg w-full" />
            <p className="text-center text-sm text-muted-foreground mt-2">10-Node Micro Server Cluster Configuration</p>
          </div>
        </div>

        <Card className="mb-12 bg-muted/30 border-border/40">
          <CardHeader>
            <CardTitle>Wise Cluster (ELI5)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Instead of one giant, expensive truck that carries everything, we are buying a fleet of 10 small, smart delivery vans for $2,900. If one van gets a flat tire, the other 9 simply pick up its packages. Nobody even notices. This is High Availability at a fraction of the cost of a traditional server.
            </p>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Micro Server Advantage: Brains over Budget</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              The CTO choice of a 10-node micro server cluster is not just a cost-saving trick; it is a strategic move that copies the exact architecture of Big Corp cloud providers, using brains (smart architecture) instead of budget (massive, expensive hardware).
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">The Old Monolithic Way</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Buy one giant, $20,000 server using a powerful Epyc or Xeon chip. This creates a massive Single Point of Failure. If that server fails, the entire company goes offline. The solution? Buy a second $20,000 server for redundancy. This is a game of budget, not brains.</p>
                </CardContent>
              </Card>

              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">The Wise Cluster Way</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We treat cheap, individual servers as disposable, just like Google and Amazon do. If one of the 10 ZimaBoards fails, the Proxmox cluster instantly and automatically moves its workload to the other 9 nodes. The system heals itself with no downtime.</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Future-Proofing & The Small Guy Advantage</h3>
            <p className="text-lg leading-relaxed">
              This architecture is fundamentally future-proof. It allows us to create a heterogeneous cluster—a smart mix of different server types working together.
            </p>

            <ul className="text-lg space-y-3 my-6 list-disc pl-6">
              <li><strong>Heavy Lifting:</strong> The powerful x86-based ZimaBoards will run our demanding customer-facing services: the WiseWare virtual desktops, the CRMs, and the Axigen/Nextcloud databases.</li>
              <li><strong>Lighter Lifting:</strong> We can then add ultra-efficient ARM-based micro servers (like Raspberry Pis) to the same cluster to handle lighter loads. These low-wage, high-value workers can run basic web servers, network-wide ad-blocking, internal monitoring dashboards, and DNS services for a negligible cost.</li>
            </ul>

            <p className="text-lg leading-relaxed">
              This is how the small guy rivals the giants. By combining open-source software (Proxmox) with a right-tool-for-the-job hardware cluster, we build a system that is more resilient, more efficient, and scales at a near-zero cost for basic functions. It is a victory of brainpower over brute-force spending.
            </p>
          </div>
        </section>
        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}