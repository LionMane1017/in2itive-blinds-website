import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ROIChart, ScalingCostChart } from "@/components/Charts";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function FinancialAnalysis() {
  const { previousPage, nextPage } = getPageNavigation("/financial-analysis");

  return (
      <>
      <SEO 
        title="Financial Analysis & ROI Projection"
        description="Comprehensive financial analysis demonstrating $3,420+ annual savings with 8-month ROI timeline."
        keywords="financial analysis, ROI calculation, cost savings, infrastructure investment"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "Financial Analysis" }]} />
        <ProgressIndicator current={6} total={10} sectionTitle="Financial Analysis" />
        <h1 className="text-4xl font-bold mb-8">Financial Analysis & Rollout Strategies</h1>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Rollout Strategy Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Metric</th>
                    <th className="text-left p-3 font-semibold">Full Cluster (Strategy A)</th>
                    <th className="text-left p-3 font-semibold">Conservative Start (Strategy B)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">Initial Investment</td><td className="p-3 font-bold">$2,900 USD</td><td className="p-3 font-bold">$1,575 USD</td></tr>
                  <tr className="border-b"><td className="p-3">Boards Purchased</td><td className="p-3">10 ZimaBoards</td><td className="p-3">5 ZimaBoards</td></tr>
                  <tr className="border-b"><td className="p-3">Capacity</td><td className="p-3">Full 160 GB RAM / 40 Cores</td><td className="p-3">80 GB RAM / 20 Cores</td></tr>
                  <tr><td className="p-3 font-bold">ROI Period</td><td className="p-3 text-lg font-bold text-primary">8.05 Months</td><td className="p-3 text-lg font-bold text-primary">4.4 Months</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Cumulative Cost Projection (The 8-Month ROI)</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="w-full h-96">
                <ROIChart />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                The graph clearly shows the moment the initial investment in the Wise Cluster is recovered by the monthly cloud savings. After 8.05 months, the project is pure profit.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Annual Recurring Cost Comparison: Scaling to 10,000 Sites</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="w-full h-96">
                <ScalingCostChart />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                The graph demonstrates the staggering difference in operational expenditure when scaling. Scaling in the cloud is financially ruinous; scaling on our cluster costs almost nothing.
              </p>
            </CardContent>
          </Card>
        </section>
        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}