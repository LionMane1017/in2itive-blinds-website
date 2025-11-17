import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabConclusion() {
  const { previousPage, nextPage } = getPageNavigation("/elab-conclusion");

  return (
      <>
      <SEO 
        title="Conclusion & Next Steps"
        description="Summary of recommendations and clear next steps for infrastructure transformation."
        keywords="conclusion, recommendations, next steps, action items"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Conclusion" }]} />
        <ProgressIndicator current={10} total={10} sectionTitle="Conclusion" />
        <h1 className="text-4xl font-bold mb-8">Conclusion & CTO Recommendation 🎯</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            This comprehensive study confirms the massive financial benefit of transitioning to the Wise Cluster. It is 
            the only way to launch our ambitious new product suite (WiseWare Workspaces, WiseCloud Home Hub) while 
            simultaneously cutting our current operational costs and achieving a gold-standard hybrid redundancy setup.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I strongly recommend immediate approval for the CTO's proposed investment, whether starting with the conservative 
            $1,575 (Strategy B) or the full $2,900 (Strategy A), to begin this critical migration.
          </p>

          <div className="my-8 p-6 bg-primary/10 border border-primary/30 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Final Recommendation</h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Approve the Wise Cluster investment immediately.</strong> This is not just a cost-saving measure—it's 
              a strategic enabler for our next generation of products and a critical step to avoid vendor lock-in before we 
              scale our customer base.
            </p>
            <p className="text-lg leading-relaxed italic">
              Prepared by [Your Firm Name] on behalf of the CTO. Pleading the cause for a smarter, faster, and cheaper 
              infrastructure.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">📋 Final Audit Report: Complete Server List Verification</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            This audit ensures that the condensed list presented in Section 4 correctly accounts for all 10 original cloud 
            servers and their aggregated resources, confirming the initial $360.00 USD monthly cost calculation.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Source Data: Original 10 Lightsail Servers</h3>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40 text-sm">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-2 text-left">Server Name</th>
                  <th className="border border-border/40 p-2 text-left">RAM / vCPUs / SSD</th>
                  <th className="border border-border/40 p-2 text-left">Monthly Cost (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border/40 p-2">1. WiseOS_32GB_Server1</td><td className="border border-border/40 p-2">32 GB / 8 vCPUs / 640 GB</td><td className="border border-border/40 p-2">$164.00</td></tr>
                <tr><td className="border border-border/40 p-2">2. Nextcloud_Server_16GB</td><td className="border border-border/40 p-2">8 GB / 2 vCPUs / 160 GB</td><td className="border border-border/40 p-2">$44.00</td></tr>
                <tr><td className="border border-border/40 p-2">3. Ubuntu-8GB</td><td className="border border-border/40 p-2">8 GB / 2 vCPUs / 160 GB</td><td className="border border-border/40 p-2">$44.00</td></tr>
                <tr><td className="border border-border/40 p-2">4. WISE_Invoicing_Server_1</td><td className="border border-border/40 p-2">4 GB / 2 vCPUs / 80 GB</td><td className="border border-border/40 p-2">$24.00</td></tr>
                <tr><td className="border border-border/40 p-2">5. Wise_CRM_Krayin</td><td className="border border-border/40 p-2">4 GB / 2 vCPUs / 80 GB</td><td className="border border-border/40 p-2">$24.00</td></tr>
                <tr><td className="border border-border/40 p-2">6. Windows_Server_2022...</td><td className="border border-border/40 p-2">4 GB / 2 vCPUs / 80 GB</td><td className="border border-border/40 p-2">$24.00</td></tr>
                <tr><td className="border border-border/40 p-2">7. Nextcloud_H.P. Backend</td><td className="border border-border/40 p-2">2 GB / 2 vCPUs / 60 GB</td><td className="border border-border/40 p-2">$12.00</td></tr>
                <tr><td className="border border-border/40 p-2">8. LAMP_WP_MULTI_DEPLOY</td><td className="border border-border/40 p-2">1 GB / 2 vCPUs / 40 GB</td><td className="border border-border/40 p-2">$7.00</td></tr>
                <tr><td className="border border-border/40 p-2">9. WordPress-Example</td><td className="border border-border/40 p-2">1 GB / 2 vCPUs / 40 GB</td><td className="border border-border/40 p-2">$7.00</td></tr>
                <tr><td className="border border-border/40 p-2">10. Sam_Portfolio_MULTI</td><td className="border border-border/40 p-2">1 GB / 2 vCPUs / 40 GB</td><td className="border border-border/40 p-2">$7.00</td></tr>
                <tr className="font-bold bg-muted/20">
                  <td className="border border-border/40 p-2">TOTALS</td>
                  <td className="border border-border/40 p-2">69 GB RAM / 24 vCPUs / 1,320 GB SSD</td>
                  <td className="border border-border/40 p-2">**$360.00 USD**</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-muted/30 border border-border/40 rounded-lg">
            <h4 className="font-bold mb-2">Audit Conclusion</h4>
            <p className="text-base leading-relaxed">
              The total resources and cost derived from these 10 individual servers exactly match the aggregated totals 
              presented in the Executive Summary and the body of the report. No servers are missing from the total capacity 
              calculation.
            </p>
            <p className="text-base leading-relaxed mt-4">
              <strong>Source of Truth for Audit:</strong> Initial data used for Feasibility Analysis derived from the 
              company's internal AWS Lightsail Instance list.
            </p>
          </div>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
