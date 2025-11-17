import { SEO } from "@/components/SEO";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { Breadcrumb } from "@/components/Breadcrumb";
import PageNavigation from "@/components/PageNavigation";
import { getPageNavigation } from "@/lib/navigation";

export default function ElabSupportingEvidence() {
  const { previousPage, nextPage } = getPageNavigation("/elab-supporting-evidence");

  return (
      <>
      <SEO 
        title="Supporting Evidence Summary"
        description="Key evidence and success stories supporting infrastructure transformation decision."
        keywords="evidence summary, success stories, case studies, proof points"
      />
      <div className="min-h-screen py-12 bg-background">
      <div className="container max-w-5xl">
        <Breadcrumb items={[{ label: "Elaborated Report" }, { label: "Supporting Evidence" }]} />
        <ProgressIndicator current={9} total={10} sectionTitle="Supporting Evidence" />
        <h1 className="text-4xl font-bold mb-8">Supporting Evidence: Cloud Cost Video Summary</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            The following video from a recognized industry expert confirms the necessity and wisdom of this pivot.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6">Summary for the CEO:</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            The speaker is <strong>Jeff Geerling</strong>, a highly-respected infrastructure expert and author of "Ansible 
            for DevOps." The video's background—his personal server rack—is a perfect illustration of the "Sovereign Core" 
            strategy we are adopting. He provides direct validation for our move:
          </p>

          <div className="my-8 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7amxEUoJvkU"
              title="Cloud Cost Analysis"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg border border-border/40"
            ></iframe>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Key Timestamps:</h3>
          
          <ul className="text-lg space-y-4 my-6 list-disc pl-6">
            <li>
              <a href="https://youtu.be/7amxEUoJvkU?t=204" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>03:24</strong>
              </a> - He states his long-held, and now proven, prediction that "Cloud costs less than hardware" was wrong.
            </li>
            <li>
              <a href="https://youtu.be/7amxEUoJvkU?t=281" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>04:41</strong>
              </a> - <strong>Cost is the #1 Driver:</strong> He confirms that in 2025, enterprises are spending millions on 
              "repatriation projects"—the painful process of escaping the exact vendor lock-in we are about to avoid.
            </li>
            <li>
              <a href="https://youtu.be/7amxEUoJvkU?t=862" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>14:22</strong>
              </a> - Recurring cloud costs simply become "way too high" for any company that scales.
            </li>
            <li>
              <a href="https://youtu.be/7amxEUoJvkU?t=404" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <strong>06:44</strong>
              </a> - <strong>"Best of Breed" Strategy:</strong> He validates our hybrid approach, stating that a single cloud 
              (like AWS) is "almost never ever going to be the best of breed" for all needs.
            </li>
          </ul>

          <p className="text-lg leading-relaxed mt-8">
            This directly confirms our strategy: We are acting <em>now</em> to avoid a multi-million-dollar problem later 
            and are correctly using the multi-cloud vendors <em>only</em> for their cheap, best-of-breed storage.
          </p>
        </div>

        <PageNavigation previousPage={previousPage} nextPage={nextPage} />
      </div>
    </div>
    </>
  );
}
