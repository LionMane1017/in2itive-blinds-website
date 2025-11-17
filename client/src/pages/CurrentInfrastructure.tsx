import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AlertCircle } from "lucide-react";
import { CostComparisonChart } from "@/components/Charts";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function CurrentInfrastructure() {
  const { previousPage, nextPage } = getPageNavigation("/current-infrastructure");

  return (
      <>
      <SEO 
        title="Current Infrastructure Assessment"
        description="Comprehensive analysis of existing infrastructure costs, performance, and limitations."
        keywords="infrastructure assessment, current state analysis, IT audit, infrastructure review"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "Current Infrastructure" }]} />
        <ProgressIndicator current={4} total={10} sectionTitle="Current Infrastructure" />
        <h1 className="text-4xl font-bold mb-8">The Problem: Our Current Infrastructure</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-xl leading-relaxed">
            Our $360/month cost is spread across 10 separate, un-connected Lightsail instances. They are all single points of failure and are subject to CPU burst limits.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Current Server Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Server Name</th>
                    <th className="text-left p-3 font-semibold">RAM / vCPUs / SSD</th>
                    <th className="text-right p-3 font-semibold">Monthly Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-3">WiseOS_32GB_Server1</td><td className="p-3">32 GB / 8 vCPUs / 640 GB</td><td className="p-3 text-right">$164.00</td></tr>
                  <tr className="border-b"><td className="p-3">Nextcloud_Server_16GB</td><td className="p-3">8 GB / 2 vCPUs / 160 GB</td><td className="p-3 text-right">$44.00</td></tr>
                  <tr className="border-b"><td className="p-3">Ubuntu-8GB</td><td className="p-3">8 GB / 2 vCPUs / 160 GB</td><td className="p-3 text-right">$44.00</td></tr>
                  <tr className="border-b"><td className="p-3">WISE_Invoicing_Server_1</td><td className="p-3">4 GB / 2 vCPUs / 80 GB</td><td className="p-3 text-right">$24.00</td></tr>
                  <tr className="border-b"><td className="p-3">Wise_CRM_Krayin</td><td className="p-3">4 GB / 2 vCPUs / 80 GB</td><td className="p-3 text-right">$24.00</td></tr>
                  <tr className="border-b"><td className="p-3">Windows_Server_2022</td><td className="p-3">4 GB / 2 vCPUs / 80 GB</td><td className="p-3 text-right">$24.00</td></tr>
                  <tr className="border-b"><td className="p-3">Nextcloud_H.P. Backend</td><td className="p-3">2 GB / 2 vCPUs / 60 GB</td><td className="p-3 text-right">$12.00</td></tr>
                  <tr className="border-b"><td className="p-3">LAMP_WP_MULTI_DEPLOY</td><td className="p-3">1 GB / 2 vCPUs / 40 GB</td><td className="p-3 text-right">$7.00</td></tr>
                  <tr className="border-b"><td className="p-3">WordPress-Example</td><td className="p-3">1 GB / 2 vCPUs / 40 GB</td><td className="p-3 text-right">$7.00</td></tr>
                  <tr className="border-b"><td className="p-3">Sam_Portfolio_MULTI</td><td className="p-3">1 GB / 2 vCPUs / 40 GB</td><td className="p-3 text-right">$7.00</td></tr>
                  <tr className="border-t-2 font-bold"><td className="p-3">TOTAL</td><td className="p-3">69 GB RAM / 24 vCPUs / 1,320 GB SSD</td><td className="p-3 text-right text-lg">$360.00</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 border-red-500/50 bg-red-50 dark:bg-red-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
              <AlertCircle className="h-6 w-6" />
              The Hidden Cost: AWS CPU Throttling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              The $360/month price is cheap for a reason: <strong>AWS CPU Throttling</strong>.
            </p>
            <p className="text-lg">
              Our servers get a small allowance of CPU power (called credits). If a client website gets busy or a report is run, we instantly burn through that allowance. After that, Amazon dramatically slows down (throttles) the server, making our apps feel sluggish and unprofessional, right when our customers are busiest.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>True Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Infrastructure Option</th>
                    <th className="text-right p-3 font-semibold">Monthly Cost (USD)</th>
                    <th className="text-left p-3 font-semibold">How it Works</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-green-50 dark:bg-green-950/20"><td className="p-3 font-bold">Wise Cluster (Proposed)</td><td className="p-3 text-right font-bold">~$75.00</td><td className="p-3">Electricity only, post-ROI. Dedicated, full speed, always.</td></tr>
                  <tr className="border-b"><td className="p-3">Current Lightsail (Throttled)</td><td className="p-3 text-right">$360.00</td><td className="p-3">Cheap, but slows down under heavy load.</td></tr>
                  <tr className="border-b"><td className="p-3">EC2 Unlimited Burst</td><td className="p-3 text-right">~$571.00</td><td className="p-3">Base cost + penalties for every time we need heavy load.</td></tr>
                  <tr><td className="p-3">EC2 Always Fast</td><td className="p-3 text-right">~$911.00</td><td className="p-3">The true cost of getting guaranteed, non-throttled performance.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="w-full h-80">
              <CostComparisonChart />
            </div>
          </CardContent>
        </Card>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}