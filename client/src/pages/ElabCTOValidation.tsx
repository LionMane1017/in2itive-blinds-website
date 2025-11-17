import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabCTOValidation() {
  const { previousPage, nextPage } = getPageNavigation("/elab-cto-validation");

  return (
      <>
      <SEO 
        title="Technical Validation Summary"
        description="Summary of technical validation and expert approval of proposed infrastructure solution."
        keywords="technical validation, expert review, solution approval, technical assessment"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "CTO Validation" }]} />
        <ProgressIndicator current={8} total={10} sectionTitle="CTO Validation" />
        <h1 className="text-4xl font-bold mb-8">CTO Approach Validation and Suggestions</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            The CTO's plan is excellent. It is based on a modern, cost-aware architecture that anticipates future needs 
            and failures.
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse border border-border/40">
              <thead>
                <tr className="bg-muted/30">
                  <th className="border border-border/40 p-3 text-left">Element</th>
                  <th className="border border-border/40 p-3 text-left">Rationale</th>
                  <th className="border border-border/40 p-3 text-left">Suggestion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Sovereign Core</td>
                  <td className="border border-border/40 p-3">
                    Eliminates rental cost and provides dedicated power needed for WiseWare video streaming.
                  </td>
                  <td className="border border-border/40 p-3">
                    None. This is the correct, strategic move.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Multi-Cloud Backups</td>
                  <td className="border border-border/40 p-3">
                    Avoids vendor lock-in and protects against a single cloud provider failure.
                  </td>
                  <td className="border border-border/40 p-3">
                    <strong>Formalize a Two-Site Recovery Plan:</strong> We have our main physical cluster (Site 1) and 
                    our cloud backup sites (Site 2/3). This guarantees resilience.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border/40 p-3 font-semibold">Quick Recovery</td>
                  <td className="border border-border/40 p-3">
                    By keeping backups on S3 (cheap cloud storage), we can restore the full system in a few hours if 
                    the primary cluster is destroyed.
                  </td>
                  <td className="border border-border/40 p-3">
                    Your estimate of "a few hours" for full recovery is realistic and excellent for a disaster scenario.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-8 p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-100">Validation Summary</h3>
            <p className="text-lg leading-relaxed text-green-900 dark:text-green-100">
              The CTO's infrastructure strategy demonstrates deep understanding of modern cloud economics, vendor lock-in 
              risks, and disaster recovery best practices. The hybrid approach balances cost optimization with operational 
              resilience. This plan is technically sound and financially prudent.
            </p>
          </div>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
