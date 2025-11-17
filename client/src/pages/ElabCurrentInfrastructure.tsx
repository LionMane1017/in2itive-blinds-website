import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabCurrentInfrastructure() {
  const { previousPage, nextPage } = getPageNavigation("/elab-current-infrastructure");

  return (
      <>
      <SEO 
        title="Current Infrastructure Situation"
        description="Easy-to-understand assessment of current infrastructure costs and limitations."
        keywords="infrastructure assessment, current costs, infrastructure problems, IT spending"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Current Infrastructure" }]} />
        <ProgressIndicator current={4} total={10} sectionTitle="Current Infrastructure" />
        <h1 className="text-4xl font-bold mb-8">The Problem: Our Current Infrastructure ☁️</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            Our $360/month cost is spread across 10 separate Lightsail instances. They are not connected, 
            are all single points of failure, and are subject to CPU burst limits.
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-3 text-left">Current Server Name</th>
                  <th className="border border-border/40 p-3 text-left">RAM / vCPUs / SSD</th>
                  <th className="border border-border/40 p-3 text-left">Public IPv4 Address</th>
                  <th className="border border-border/40 p-3 text-left">Current Monthly Cost (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border/40 p-3">WiseOS_32GB_Server1</td>
                  <td className="border border-border/40 p-3">32 GB / 8 vCPUs / 640 GB</td>
                  <td className="border border-border/40 p-3">15.157.72.151</td>
                  <td className="border border-border/40 p-3">$164.00</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3">... 9 other servers ...</td>
                  <td className="border border-border/40 p-3">37 GB / 16 vCPUs / 880 GB</td>
                  <td className="border border-border/40 p-3">-</td>
                  <td className="border border-border/40 p-3">$196.00</td>
                </tr>
                <tr className="font-bold bg-muted/20">
                  <td className="border border-border/40 p-3">TOTAL MONTHLY CLOUD COST</td>
                  <td className="border border-border/40 p-3">69 GB RAM / 24 vCPUs</td>
                  <td className="border border-border/40 p-3">-</td>
                  <td className="border border-border/40 p-3">**$360.00 USD**</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Hidden Cost: AWS CPU Throttling</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The $360/month price is cheap for a reason: <strong>AWS CPU Throttling.</strong>
          </p>

          <ul className="text-lg space-y-3 my-6 list-disc pl-6">
            <li>
              <strong>ELI5:</strong> Our servers get a small 'allowance' of CPU power (called 'credits'). If a client's 
              website gets busy or a report is run, we <em>instantly</em> burn through that allowance. After that, 
              Amazon <strong>dramatically slows down ('throttles') the server</strong>, making our apps feel sluggish 
              and unprofessional, right when our customers are busiest.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            To avoid this, we would have to pay for 'unlimited' or 'always fast' servers, and the true cloud 
            costs are extreme.
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-3 text-left">Infrastructure Option</th>
                  <th className="border border-border/40 p-3 text-left">Monthly Cost (USD)</th>
                  <th className="border border-border/40 p-3 text-left">How it Works</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Wise Cluster (Proposed)</td>
                  <td className="border border-border/40 p-3">~ $75.00</td>
                  <td className="border border-border/40 p-3">(Electricity only, post-ROI). Dedicated, full speed, always.</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3">Current Lightsail (Throttled)</td>
                  <td className="border border-border/40 p-3">$360.00</td>
                  <td className="border border-border/40 p-3">Cheap, but slows down under heavy load.</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3">EC2 "Unlimited Burst"</td>
                  <td className="border border-border/40 p-3">~ $571.00</td>
                  <td className="border border-border/40 p-3">Base cost + <em>penalties</em> for every time we need heavy load.</td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-bold">EC2 "Always Fast"</td>
                  <td className="border border-border/40 p-3 font-bold">~ $911.00</td>
                  <td className="border border-border/40 p-3">The <em>true</em> cost of getting guaranteed, non-throttled performance.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg leading-relaxed mt-6">
            This chart visualizes the true choice.
          </p>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
