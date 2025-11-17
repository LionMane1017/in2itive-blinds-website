import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { EmailGateModal } from "@/components/EmailGateModal";

export default function ElaboratedStudy() {
  const [showEmailGate, setShowEmailGate] = useState(false);

  const handleDownload = () => {
    setShowEmailGate(true);
  };

  return (
      <>
      <SEO 
        title="Elaborated Feasibility Study PDF"
        description="Download the complete elaborated feasibility study with CEO-friendly explanations and business focus."
        keywords="elaborated study, executive report, business case PDF, infrastructure study"
      />
      <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Elaborated Feasibility Study</h1>
            <p className="text-xl text-muted-foreground">
              Proxmox Wise Cluster vs. AWS Lightsail - In-Depth Executive Analysis
            </p>
          </div>

          <Card className="mb-8 bg-muted/30 border-border/40">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-2xl">Download Full Report</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Comprehensive analysis demonstrating $3,420+ annual savings with 8-month ROI
                    </p>
                  </div>
                </div>
                <Button onClick={handleDownload} size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download PDF
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-background/60 backdrop-blur-sm border-border/40">
            <CardContent className="p-0">
              <div className="w-full" style={{ height: '800px' }}>
                <iframe
                  src="/ElaboratedReport.pdf"
                  className="w-full h-full border-0 rounded-lg"
                  title="Elaborated Proxmox Wise Cluster Feasibility Study"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="bg-muted/30 border-border/40">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">CTO Critical Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic urgency and executive-level decision framework for infrastructure transformation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-border/40">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">ELI5 Explanations</h3>
                <p className="text-sm text-muted-foreground">
                  Complex technical concepts explained in simple terms for all stakeholders
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-border/40">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Verified Methodology</h3>
                <p className="text-sm text-muted-foreground">
                  Audit-verified calculations and industry-standard financial projections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <EmailGateModal
        open={showEmailGate}
        onOpenChange={setShowEmailGate}
        pdfType="elaborated_study"
        pdfUrl="/ElaboratedReport.pdf"
        pdfFileName="Elaborated-Proxmox-Wise-Cluster-Feasibility-Study.pdf"
      />
    </div>
    </>
  );
}
