import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ResourcesDownload() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const captureLeadAndDownload = trpc.contact.sendEmail.useMutation({
    onSuccess: () => {
      setDownloaded(true);
      toast.success("Thank you! Your download will begin shortly.");
      
      // Track analytics event for PDF download
      if (typeof window !== 'undefined' && (window as any).umami) {
        (window as any).umami.track('pdf_download_completed', {
          email,
          company: company || 'Not provided'
        });
      }
      
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/ProxmoxWiseClusterFeasibilityStudy.pdf';
      link.download = 'Proxmox-Wise-Cluster-Feasibility-Study.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setName("");
      setEmail("");
      setCompany("");
      setTimeout(() => setDownloaded(false), 5000);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to process request. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Resource download request: Proxmox Wise Cluster Feasibility Study PDF`;
    captureLeadAndDownload.mutate({ name, email, company, message });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Download Full Feasibility Study</CardTitle>
            <CardDescription>
              Get the complete PDF report with detailed analysis and recommendations
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {downloaded ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Download Starting!</h3>
            <p className="text-muted-foreground">
              Your PDF should download automatically. If it doesn't, please check your downloads folder.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">What's Included:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Complete cost-benefit analysis with ROI calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Technical architecture and implementation strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>CTO validation and industry expert insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                  <span>Detailed comparison: Cloud vs. Owned Infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="download-name">Name *</Label>
                <Input
                  id="download-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="download-email">Work Email *</Label>
                <Input
                  id="download-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="download-company">Company (Optional)</Label>
              <Input
                id="download-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your Company Name"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={captureLeadAndDownload.isPending}
            >
              {captureLeadAndDownload.isPending ? (
                "Processing..."
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Report
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By downloading, you agree to receive occasional updates about infrastructure optimization strategies.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
