import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";
import { TableOfContents } from "@/components/TableOfContents";

export default function ExecutiveSummary() {
  const tocItems = [
    { id: "overview", title: "Overview", level: 2 },
    { id: "key-findings", title: "Key Findings", level: 2 },
    { id: "strategic-recommendation", title: "Strategic Recommendation", level: 2 },
  ];

  const { previousPage, nextPage } = getPageNavigation("/executive-summary");
  
  return (
      <>
      <SEO 
        title="Executive Summary - Infrastructure Feasibility Study"
        description="Strategic analysis of infrastructure transformation with proven cost savings and 8-month ROI timeline."
        keywords="executive summary, infrastructure strategy, cost analysis, ROI"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "Executive Summary" }]} />
        <ProgressIndicator current={1} total={10} sectionTitle="Executive Summary" />
        <h1 className="text-4xl font-bold mb-8">Executive Summary: The 8-Month ROI & Strategic Necessity</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl leading-relaxed">
            This report confirms your CTO's proposal is critically sound and financially necessary. This is a strategic move to enable our new product lines while simultaneously cutting our current infrastructure costs by over 90% and avoiding future vendor lock-in.
          </p>
          
          <p className="text-lg leading-relaxed">
            Our current cloud bill for our 10 servers is <strong>$360.00 USD per month</strong>. By investing a one-time cost of <strong>$2,900</strong> in our own dedicated hardware fleet (the "Wise Cluster"), we can eliminate this entire bill, yielding an <strong>8-month Return on Investment (ROI)</strong>.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Metric</th>
                    <th className="text-left p-3 font-semibold">Current Cloud Spend (Actual)</th>
                    <th className="text-left p-3 font-semibold">Proposed Wise Cluster Cost</th>
                    <th className="text-left p-3 font-semibold">Annual Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">Current Annual Spend</td>
                    <td className="p-3">$4,320.00 USD</td>
                    <td className="p-3">~$600-$900 CAD (Electricity Only)</td>
                    <td className="p-3 font-bold text-green-600 dark:text-green-400">$3,420+ USD</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">Initial Investment</td>
                    <td className="p-3">$0 (Upfront)</td>
                    <td className="p-3">$2,900 USD (Total Hardware)</td>
                    <td className="p-3 font-bold">Fastest ROI Possible</td>
                  </tr>
                  <tr>
                    <td className="p-3">Investment Recovery</td>
                    <td className="p-3">N/A</td>
                    <td className="p-3 font-bold text-primary">8.05 Months</td>
                    <td className="p-3 font-bold">Guaranteed Profit after 1st Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/30 border-border/40">
          <CardHeader>
            <CardTitle className="flex items-start gap-3">
              <span className="text-3xl">🚗💨</span>
              <span>The Simple Truth (Explained like you are 5)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-lg">
              <p>
                We are currently paying <strong>$360 every month</strong> to rent 10 cars that automatically slow down when our customers start driving them (Throttling).
              </p>
              <p>
                The CTO wants us to spend <strong>$2,900 once</strong> to buy our own fleet of 10 faster, dedicated, fuel-efficient cars (the ZimaBoards).
              </p>
              <p>
                <strong>The Key:</strong> We stop paying the expensive $360 rental fee and, in just 8 months, we get back every penny we spent. After that, we own the fleet, and the savings (<strong>$3,420 every year</strong>) are pure profit.
              </p>
            </div>
          </CardContent>
        </Card>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
