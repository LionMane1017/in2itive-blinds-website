import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "What happens if hardware fails?",
    answer: "All ZimaBoard servers come with a standard manufacturer warranty. Additionally, we recommend maintaining a spare unit for critical deployments. Hardware failure rates for these enterprise-grade components are typically under 2% annually. With proper redundancy configuration in Proxmox, a single hardware failure won't impact service availability. Replacement units can be deployed within 24-48 hours."
  },
  {
    question: "What kind of warranty coverage is included?",
    answer: "ZimaBoard servers include a 1-year manufacturer warranty covering defects and hardware failures. Extended warranty options are available for purchase. The warranty covers replacement of defective units and technical support from the manufacturer. We recommend purchasing extended warranties for mission-critical deployments to ensure long-term protection."
  },
  {
    question: "What technical support options are available?",
    answer: "Technical support is available through multiple channels: manufacturer support for hardware issues, Proxmox community forums and documentation for software questions, and optional paid support contracts for enterprise-level assistance. Our feasibility study includes setup documentation and configuration guides. For organizations requiring dedicated support, we can connect you with certified Proxmox partners who offer 24/7 enterprise support packages."
  },
  {
    question: "Can I scale beyond 10 servers?",
    answer: "Absolutely. Proxmox clusters can scale to hundreds of nodes. The 10-server configuration in our study represents an optimal starting point for most small to medium enterprises. As your needs grow, you can add additional nodes to the cluster seamlessly. Proxmox supports live migration, allowing you to expand capacity without downtime. Larger deployments may benefit from additional networking infrastructure and centralized storage solutions."
  },
  {
    question: "What about compliance certifications (SOC 2, HIPAA, etc.)?",
    answer: "Proxmox itself doesn't hold certifications, but it provides the tools necessary to build compliant infrastructure. Many organizations use Proxmox in SOC 2, HIPAA, and PCI-DSS compliant environments. Compliance depends on your implementation: proper access controls, encryption, audit logging, and security hardening. We recommend working with a compliance consultant to ensure your specific deployment meets regulatory requirements. Proxmox's flexibility allows you to implement whatever security controls your compliance framework requires."
  },
  {
    question: "How complex is the migration process?",
    answer: "Migration complexity varies by workload. Simple web applications and databases can typically be migrated in days. More complex environments with legacy dependencies may take weeks. Proxmox supports multiple migration methods: P2V (physical to virtual), V2V (virtual to virtual), and containerization. Our study includes a migration planning guide. Most organizations use a phased approach, migrating non-critical workloads first to gain experience before moving production systems."
  },
  {
    question: "What are the power and cooling requirements?",
    answer: "ZimaBoard servers are extremely power-efficient, consuming only 6-15W per unit under typical load. A 10-server cluster draws approximately 100-150W total—less than two standard light bulbs. No special cooling infrastructure is required; standard office air conditioning is sufficient. The low power consumption is a major cost advantage over traditional servers and contributes significantly to the ROI calculations in our study."
  },
  {
    question: "How does performance compare to cloud instances?",
    answer: "ZimaBoard servers provide dedicated resources without the CPU throttling common in cloud environments. While individual core performance is modest, you get consistent, predictable performance. For workloads that benefit from multiple cores and don't require extreme single-thread performance, ZimaBoards often outperform similarly-priced cloud instances. The key advantage is no performance degradation during peak usage—you own the full capacity 24/7."
  },
  {
    question: "What networking infrastructure do I need?",
    answer: "Minimum requirements: a managed gigabit switch and stable internet connection. For production deployments, we recommend: redundant network switches, separate management and production networks, and quality firewall/router hardware. The networking investment is typically $500-2000 depending on redundancy requirements. All networking costs are included in our total cost of ownership calculations."
  },
  {
    question: "Can I use this for production workloads?",
    answer: "Yes, with proper planning. Many organizations run production workloads on Proxmox clusters. Key considerations: implement proper backup strategies, configure high availability for critical services, maintain spare hardware for quick replacement, and establish monitoring and alerting. The ZimaBoard platform is suitable for production use in small to medium deployments. For mission-critical applications, ensure you have redundancy at every layer."
  }
];

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions"
        description="Common questions about owned infrastructure, Proxmox deployment, hardware warranties, compliance, scaling, and migration complexity."
        keywords="FAQ, infrastructure questions, Proxmox support, hardware warranty, compliance, scaling"
      />
      <div className="min-h-screen bg-background">
        <div className="bg-primary/5 py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Find answers to common questions about owned infrastructure, deployment, support, and compliance
            </p>
          </div>
        </div>

        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Contact our team for personalized answers to your infrastructure questions
              </p>
              <a 
                href="mailto:contact@wisemedia.com" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
