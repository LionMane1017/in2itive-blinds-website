import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabCTOVision() {
  const { previousPage, nextPage } = getPageNavigation("/elab-cto-vision");

  return (
      <>
      <SEO 
        title="CTO Strategic Vision Explained"
        description="Clear explanation of technical leadership vision for infrastructure transformation."
        keywords="CTO strategy, technical vision, infrastructure leadership, IT direction"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "CTO Vision" }]} />
        <ProgressIndicator current={3} total={10} sectionTitle="CTO Vision" />
        <h1 className="text-4xl font-bold mb-8">The CTO's Strategic Vision (The "Why")</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            This hardware switch is the critical enabler for our next two major product launches. Building 
            these on the cloud would be prohibitively expensive and offer a worse customer experience.
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-3 text-left">Product</th>
                  <th className="border border-border/40 p-3 text-left">CTO's Advantage</th>
                  <th className="border border-border/40 p-3 text-left">ELI5 Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">WiseWare Business Workspaces (Wise OS Workspaces)</td>
                  <td className="border border-border/40 p-3">Premium Video Quality, Zero Cost</td>
                  <td className="border border-border/40 p-3">
                    The ZimaBoard's special "video chip" handles high-performance desktop streaming (like Netflix 
                    for a computer screen) for free, delivering a fast, premium experience our rental-based 
                    competitors can't match.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">WiseCloud Home Hub</td>
                  <td className="border border-border/40 p-3">Family Powerhouse: Games, Movies, Collab</td>
                  <td className="border border-border/40 p-3">
                    This hub handles family services (movies via Plex/Jellyfin, games via RetroArch, chat, and calls). 
                    The hardware's video encoding power is essential for smooth 4K movie streaming and fast retro game 
                    emulation. Trying this in the public cloud would cost a fortune and give poor performance.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Boosting Our Entire Software Stack</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            To be clear, the <strong>WiseWare Business Workspaces</strong> are fast, secure <strong>remote virtual desktops</strong> 
            (running Windows or Linux) that our team and clients can access from anywhere. This hardware change provides 
            a massive performance boost to our entire software stack, which is built on powerful open-source platforms:
          </p>

          <ul className="text-lg space-y-2 my-6 list-disc pl-6">
            <li><strong>Axigen Mail:</strong> Our professional email server.</li>
            <li><strong>Nextcloud:</strong> Our private "Google Drive" and collaboration suite.</li>
            <li><strong>Krayin CRM:</strong> Our core sales and customer management tool.</li>
            <li><strong>Mautic:</strong> Our marketing automation platform.</li>
            <li><strong>Espo CRM:</strong> Our secondary CRM and business management tool.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            By moving from throttled, shared cloud servers to dedicated, high-speed hardware (especially with fast SSDs 
            and a powerful video chip), the user experience for this entire stack will be transformed. <strong>The CRM will 
            be instant, email searches will be immediate, and Nextcloud file syncing will be seamless. All lag and 
            unresponsiveness will be eliminated.</strong>
          </p>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
