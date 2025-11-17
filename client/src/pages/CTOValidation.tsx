import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CheckCircle2 } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function CTOValidation() {
  const { previousPage, nextPage } = getPageNavigation("/cto-validation");

  return (
      <>
      <SEO 
        title="CTO Validation & Technical Review"
        description="Technical validation of proposed infrastructure solution by experienced CTO leadership."
        keywords="technical validation, CTO review, infrastructure approval, technical assessment"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Condensed Report" }, { label: "CTO Validation" }]} />
        <ProgressIndicator current={8} total={10} sectionTitle="CTO Validation" />
        <h1 className="text-4xl font-bold mb-8">CTO Approach Validation and Suggestions</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl leading-relaxed">
            The CTO plan is excellent. It is based on a modern, cost-aware architecture that anticipates future needs and failures.
          </p>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Validation Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Element</th>
                    <th className="text-left p-3 font-semibold">Rationale</th>
                    <th className="text-left p-3 font-semibold">Suggestion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Sovereign Core</td>
                    <td className="p-3">Eliminates rental cost and provides dedicated power needed for WiseWare video streaming.</td>
                    <td className="p-3"><span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-600" /> None. This is the correct, strategic move.</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Multi-Cloud Backups</td>
                    <td className="p-3">Avoids vendor-lock-in and protects against a single cloud provider failure.</td>
                    <td className="p-3">Formalize a Two-Site Recovery Plan: We have our main physical cluster (Site 1) and our cloud backup sites (Site 2/3). This guarantees resilience.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Quick Recovery</td>
                    <td className="p-3">By keeping backups on S3 (cheap cloud storage), we can restore the full system in a few hours if the primary cluster is destroyed.</td>
                    <td className="p-3">Your estimate of a few hours for full recovery is realistic and excellent for a disaster scenario.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/30 border-border/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-6 w-6" />
              Final Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              The CTO approach is validated as sound, strategic, and financially prudent. The architecture demonstrates forward-thinking planning that balances cost efficiency with enterprise-grade reliability.
            </p>
          </CardContent>
        </Card>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}