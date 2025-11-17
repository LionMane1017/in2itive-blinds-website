import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function CTOVision() {
  const { previousPage, nextPage } = getPageNavigation("/cto-vision");

  return (
      <>
      <SEO 
        title="CTO Strategic Vision - Infrastructure Feasibility"
        description="Strategic vision for infrastructure transformation aligned with business objectives and technical requirements."
        keywords="CTO vision, IT strategy, infrastructure planning, technical leadership"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "CTO Strategic Vision" }]} />
        <ProgressIndicator current={3} total={10} sectionTitle="CTO Strategic Vision" />
        <h1 className="text-4xl font-bold mb-8">The CTO's Strategic Vision</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl leading-relaxed">
            This hardware switch is the critical enabler for our next two major product launches. Building these on the cloud would be prohibitively expensive and offer a worse customer experience.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Product Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Product</th>
                    <th className="text-left p-3 font-semibold">CTO Advantage</th>
                    <th className="text-left p-3 font-semibold">ELI5 Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">WiseWare Business Workspaces</td>
                    <td className="p-3">Premium Video Quality, Zero Cost</td>
                    <td className="p-3">The ZimaBoard special video chip handles high-performance desktop streaming for free, delivering a fast, premium experience our rental-based competitors cannot match.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">WiseCloud Home Hub</td>
                    <td className="p-3">Family Powerhouse: Games, Movies, Collab</td>
                    <td className="p-3">This hub handles family services. The hardware video encoding power is essential for smooth 4K movie streaming and fast retro game emulation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Boosting Our Entire Software Stack</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              The WiseWare Business Workspaces are fast, secure remote virtual desktops that our team and clients can access from anywhere. This hardware change provides a massive performance boost to our entire software stack:
            </p>
            
            <ul className="text-lg space-y-2 my-6 list-disc pl-6">
              <li><strong>Axigen Mail:</strong> Our professional email server</li>
              <li><strong>Nextcloud:</strong> Our private collaboration suite</li>
              <li><strong>Krayin CRM:</strong> Our core sales and customer management tool</li>
              <li><strong>Mautic:</strong> Our marketing automation platform</li>
              <li><strong>Espo CRM:</strong> Our secondary CRM and business management tool</li>
            </ul>

            <p className="text-lg leading-relaxed">
              By moving from throttled, shared cloud servers to dedicated, high-speed hardware, the user experience will be transformed. The CRM will be instant, email searches immediate, and Nextcloud file syncing seamless.
            </p>
          </div>
        </section>
        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}