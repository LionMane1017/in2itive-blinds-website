import { SEO } from "@/components/SEO";
import ROICalculator from "@/components/ROICalculator";
import ResourcesDownload from "@/components/ResourcesDownload";
import { Calculator, Download } from "lucide-react";

export default function Tools() {
  return (
      <>
      <SEO 
        title="Infrastructure Tools & Calculators"
        description="Interactive ROI calculator and resources for infrastructure decision-making. Calculate your potential savings instantly."
        keywords="ROI calculator, infrastructure tools, cost calculator, savings calculator"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Infrastructure Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive calculators and resources to help you make informed infrastructure decisions
          </p>
        </div>

        {/* ROI Calculator Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calculator className="h-10 w-10 text-primary" />
              <h2 className="text-4xl font-bold">ROI Calculator</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your potential savings with infrastructure ownership. Input your current cloud costs and see instant ROI projections.
            </p>
          </div>
          <ROICalculator />
        </section>

        {/* Resources Download Section */}
        <section className="py-20 bg-muted/30 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Download className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold">Download Resources</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the complete feasibility study with detailed analysis, charts, and expert recommendations in PDF format.
              </p>
            </div>
            <ResourcesDownload />
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
