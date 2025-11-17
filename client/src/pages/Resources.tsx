import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, FileText, BarChart3, CheckSquare } from "lucide-react";

const resources = [
  {
    title: "ROI Calculator Spreadsheet",
    description: "Interactive Excel template to calculate your infrastructure ROI. Input your current cloud costs and server requirements to see projected savings and payback period.",
    icon: FileSpreadsheet,
    fileSize: "45 KB",
    format: "XLSX",
    downloadUrl: "#", // Placeholder - would link to actual file
    features: [
      "Customizable cost inputs",
      "Automatic payback calculation",
      "3-year projection charts",
      "Cloud vs owned comparison"
    ]
  },
  {
    title: "Migration Checklist PDF",
    description: "Comprehensive 25-point checklist for planning and executing your cloud-to-owned infrastructure migration. Covers planning, execution, and validation phases.",
    icon: CheckSquare,
    fileSize: "320 KB",
    format: "PDF",
    downloadUrl: "#",
    features: [
      "Pre-migration planning steps",
      "Risk assessment framework",
      "Testing and validation criteria",
      "Rollback procedures"
    ]
  },
  {
    title: "Hardware Comparison Guide",
    description: "Detailed comparison of server options including ZimaBoard, Raspberry Pi, Intel NUC, and traditional rack servers. Includes performance benchmarks and cost analysis.",
    icon: BarChart3,
    fileSize: "1.2 MB",
    format: "PDF",
    downloadUrl: "#",
    features: [
      "Performance benchmarks",
      "Power consumption data",
      "Price-performance ratios",
      "Use case recommendations"
    ]
  },
  {
    title: "Cost Analysis Template",
    description: "Financial modeling template for presenting infrastructure proposals to executives. Includes TCO calculations, risk analysis, and ROI projections.",
    icon: FileText,
    fileSize: "78 KB",
    format: "XLSX",
    downloadUrl: "#",
    features: [
      "Executive summary template",
      "5-year TCO calculator",
      "Risk/benefit analysis",
      "Budget impact projections"
    ]
  }
];

export default function Resources() {
  return (
    <>
      <SEO 
        title="Downloadable Resources"
        description="Free tools and templates for infrastructure planning: ROI calculator, migration checklist, hardware comparison guide, and cost analysis templates."
        keywords="ROI calculator, migration checklist, infrastructure tools, cost analysis, hardware comparison"
      />
      <div className="min-h-screen bg-background">
        <div className="bg-primary/5 py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Downloadable Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Free tools and templates to help you evaluate, plan, and present your infrastructure transformation
            </p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{resource.title}</CardTitle>
                          <div className="flex gap-2 text-xs text-muted-foreground">
                            <span>{resource.format}</span>
                            <span>•</span>
                            <span>{resource.fileSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {resource.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-auto" asChild>
                      <a href={resource.downloadUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download {resource.format}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Need Custom Analysis?</CardTitle>
                <CardDescription>
                  Our team can provide personalized infrastructure assessments tailored to your specific requirements and constraints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="mailto:contact@wisemedia.com">
                    Request Custom Analysis
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
