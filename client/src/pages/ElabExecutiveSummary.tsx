import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabExecutiveSummary() {
  const { previousPage, nextPage } = getPageNavigation("/elab-executive-summary");

  return (
      <>
      <SEO 
        title="Executive Summary - Elaborated Infrastructure Study"
        description="CEO-friendly overview of infrastructure transformation opportunity with clear business benefits."
        keywords="executive summary, business case, infrastructure ROI, strategic overview"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Executive Summary" }]} />
        <ProgressIndicator current={1} total={10} sectionTitle="Executive Summary" />
        <h1 className="text-4xl font-bold mb-8">Executive Summary: The 8-Month ROI & Strategic Necessity</h1>
        
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            Dear CEO, this report confirms your CTO's proposal is critically sound and financially necessary. 
            This is a strategic move to enable our new product lines while simultaneously cutting our current 
            infrastructure costs by over 90% and avoiding future vendor lock-in.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Our current cloud bill for our 10 servers is <strong>$360.00 USD per month</strong>. By investing a one-time 
            cost of $2,900 in our own dedicated hardware fleet (the "Wise Cluster"), we can eliminate this 
            entire bill, yielding an 8-month Return on Investment (ROI).
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-3 text-left">Metric</th>
                  <th className="border border-border/40 p-3 text-left">Current Cloud Spend (Actual)</th>
                  <th className="border border-border/40 p-3 text-left">Proposed Wise Cluster Cost</th>
                  <th className="border border-border/40 p-3 text-left">Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Current Annual Spend</td>
                  <td className="border border-border/40 p-3">$4,320.00 USD</td>
                  <td className="border border-border/40 p-3">Approx $600 (Electricity Only)</td>
                  <td className="border border-border/40 p-3 font-bold text-green-600 dark:text-green-400">$3,420+ USD</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Initial Investment</td>
                  <td className="border border-border/40 p-3">$0 (Upfront)</td>
                  <td className="border border-border/40 p-3">$2,900 USD (Total Hardware)</td>
                  <td className="border border-border/40 p-3">Fastest ROI Possible</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Investment Recovery</td>
                  <td className="border border-border/40 p-3">N/A</td>
                  <td className="border border-border/40 p-3 font-bold">8.05 Months</td>
                  <td className="border border-border/40 p-3">Guaranteed Profit after 1st Year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Simple Truth (Explained like you are 5): 🚗💨</h2>
          
          <p className="text-lg leading-relaxed mb-4">
            We are currently paying $360 every month to rent 10 cars that automatically slow down when 
            our customers start driving them (Throttling).
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            The CTO wants us to spend $2,900 <em>once</em> to buy our own fleet of 10 faster, dedicated, 
            fuel-efficient cars (the ZimaBoards).
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            <strong>The Key:</strong> We stop paying the expensive $360 rental fee and, in just 8 months, we get back 
            every penny we spent. After that, we own the fleet, and the savings (**$3,420 every year**) are 
            pure profit.
          </p>
        </div>
        

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
