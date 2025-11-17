import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabFinancialAnalysis() {
  const { previousPage, nextPage } = getPageNavigation("/elab-financial-analysis");

  return (
      <>
      <SEO 
        title="Financial Impact Analysis"
        description="Simple breakdown of costs, savings, and ROI for infrastructure transformation."
        keywords="financial impact, cost savings, ROI explained, investment analysis"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Financial Analysis" }]} />
        <ProgressIndicator current={2} total={10} sectionTitle="Financial Analysis" />
        <h1 className="text-4xl font-bold mb-8">Financial Analysis & Rollout Strategies 💰</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-3 text-left">Metric</th>
                  <th className="border border-border/40 p-3 text-left">Full Cluster (Strategy A)</th>
                  <th className="border border-border/40 p-3 text-left">Conservative Start (Strategy B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Initial Investment</td>
                  <td className="border border-border/40 p-3">$2,900 USD</td>
                  <td className="border border-border/40 p-3">$1,575 USD</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Boards Purchased</td>
                  <td className="border border-border/40 p-3">10 ZimaBoards</td>
                  <td className="border border-border/40 p-3">5 ZimaBoards</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Capacity</td>
                  <td className="border border-border/40 p-3">Full 160 GB RAM / 40 Cores</td>
                  <td className="border border-border/40 p-3">80 GB RAM / 20 Cores</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">ROI Period</td>
                  <td className="border border-border/40 p-3 font-bold text-green-600 dark:text-green-400">8.05 Months</td>
                  <td className="border border-border/40 p-3">4.4 Months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Cumulative Cost Projection (The 8-Month ROI)</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The graph below clearly shows the moment the initial investment in the Wise Cluster is recovered by the 
            monthly cloud savings. After 8.05 months, the project is pure profit.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Annual Recurring Cost Comparison: Scaling to 10,000 Sites</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The graph below demonstrates the staggering difference in operational expenditure (OpEx) when scaling. 
            Scaling in the cloud is financially ruinous; scaling on our cluster costs almost nothing.
          </p>

          <div className="my-8 p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-100">Financial Recommendation</h3>
            <p className="text-lg leading-relaxed text-blue-900 dark:text-blue-100">
              Strategy A (Full Cluster) provides the fastest path to infrastructure sovereignty and maximum long-term 
              savings. Strategy B offers a more conservative entry point with faster initial ROI. Both strategies 
              deliver exceptional value compared to continued cloud dependency.
            </p>
          </div>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
