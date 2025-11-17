import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function Evidence() {
  const { previousPage, nextPage } = getPageNavigation("/evidence");

  const videoId = "7amxEUoJvkU";
  const timestamps = [
    { time: "03:24", seconds: 204, description: "Prediction that Cloud costs less than hardware was wrong" },
    { time: "04:41", seconds: 281, description: "Cost is the #1 Driver for repatriation projects" },
    { time: "14:22", seconds: 862, description: "Recurring cloud costs become way too high" },
    { time: "06:44", seconds: 404, description: "Best of Breed Strategy validation" }
  ];

  return (
      <>
      <SEO 
        title="Supporting Evidence & Documentation"
        description="Comprehensive evidence supporting infrastructure transformation including case studies and technical documentation."
        keywords="supporting evidence, case studies, technical documentation, infrastructure proof"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Supporting Evidence: Cloud Cost Video Summary</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-xl leading-relaxed">
            The following video from a recognized industry expert confirms the necessity and wisdom of this pivot.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Summary for the CEO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                The speaker is <strong>Jeff Geerling</strong>, a highly-respected infrastructure expert and author of Ansible for DevOps. The video background—his personal server rack—is a perfect illustration of the Sovereign Core strategy we are adopting. He provides direct validation for our move:
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl mb-6">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Cloud Cost Analysis"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Key Timestamps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timestamps.map((ts) => (
                <div key={ts.time} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <a
                    href={`https://www.youtube.com/watch?v=${videoId}&t=${ts.seconds}s`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono font-bold text-primary hover:underline min-w-20"
                  >
                    {ts.time}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-lg flex-1">{ts.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-muted/30 border-border/40">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              This directly confirms our strategy: We are acting now to avoid a multi-million-dollar problem later and are correctly using the multi-cloud vendors only for their cheap, best-of-breed storage.
            </p>
          </CardContent>
        </Card>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}