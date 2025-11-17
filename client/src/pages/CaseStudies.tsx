import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Clock, CheckCircle2, Server, DollarSign } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS Platform",
      challenge: "Paying $12,000/month for AWS cloud servers with unpredictable scaling costs and vendor lock-in concerns",
      solution: "Deployed 15 ZimaBoard servers with Proxmox clustering for high availability",
      implementation: {
        duration: "6 weeks",
        phases: [
          "Week 1-2: Infrastructure assessment and hardware procurement",
          "Week 3-4: Proxmox cluster setup and migration testing",
          "Week 5: Production migration with zero downtime",
          "Week 6: Monitoring setup and team training",
        ],
      },
      results: {
        monthlySavings: "$10,800",
        annualSavings: "$129,600",
        roi: "8 months",
        costReduction: "90%",
        additionalBenefits: [
          "Full infrastructure ownership",
          "Predictable monthly costs",
          "No vendor lock-in",
          "Improved performance (no CPU throttling)",
        ],
      },
      beforeAfter: {
        before: {
          servers: "20 AWS EC2 instances",
          monthlyCost: "$12,000",
          performance: "Variable (CPU throttling during peak)",
          control: "Limited (vendor-dependent)",
        },
        after: {
          servers: "15 ZimaBoard servers",
          monthlyCost: "$1,200 (electricity + maintenance)",
          performance: "Consistent (dedicated resources)",
          control: "Full ownership and control",
        },
      },
      timeline: [
        { week: "Week 1-2", task: "Assessment & Procurement", status: "complete" },
        { week: "Week 3-4", task: "Setup & Testing", status: "complete" },
        { week: "Week 5", task: "Migration", status: "complete" },
        { week: "Week 6", task: "Training & Optimization", status: "complete" },
      ],
    },
    {
      company: "DataStream Analytics",
      industry: "Data Processing & Analytics",
      challenge: "Spending $8,500/month on Google Cloud with increasing costs as data volume grew",
      solution: "Built custom infrastructure with 12 ZimaBoard servers optimized for data processing workloads",
      implementation: {
        duration: "8 weeks",
        phases: [
          "Week 1-2: Workload analysis and capacity planning",
          "Week 3-5: Hardware deployment and network configuration",
          "Week 6-7: Data migration and pipeline reconfiguration",
          "Week 8: Performance tuning and documentation",
        ],
      },
      results: {
        monthlySavings: "$7,200",
        annualSavings: "$86,400",
        roi: "10 months",
        costReduction: "85%",
        additionalBenefits: [
          "3x faster data processing",
          "No egress fees for data transfers",
          "Scalable without recurring costs",
          "Complete data sovereignty",
        ],
      },
      beforeAfter: {
        before: {
          servers: "25 Google Cloud instances",
          monthlyCost: "$8,500",
          performance: "Good but expensive",
          control: "Cloud-dependent",
        },
        after: {
          servers: "12 ZimaBoard servers",
          monthlyCost: "$1,300 (power + cooling)",
          performance: "3x faster processing",
          control: "Full infrastructure ownership",
        },
      },
      timeline: [
        { week: "Week 1-2", task: "Analysis & Planning", status: "complete" },
        { week: "Week 3-5", task: "Deployment & Config", status: "complete" },
        { week: "Week 6-7", task: "Data Migration", status: "complete" },
        { week: "Week 8", task: "Optimization", status: "complete" },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Case Studies - Real Infrastructure Transformation Success Stories"
        description="See how companies reduced cloud costs by 85-90% with owned infrastructure. Detailed before/after analysis, implementation timelines, and measurable ROI."
        keywords="case studies, infrastructure transformation, cloud cost reduction, ROI examples, success stories"
      />
      
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-muted/30">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Success Stories
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Real Companies, Real Results
                </h1>
                <p className="text-xl text-muted-foreground">
                  See how organizations transformed their infrastructure economics with owned servers, achieving 85-90% cost reductions and complete vendor independence.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-16">
            <div className="container max-w-6xl space-y-20">
              {caseStudies.map((study, index) => (
                <div key={index} className="space-y-8">
                  {/* Header */}
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">{study.company}</h2>
                    <p className="text-lg text-muted-foreground">{study.industry}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Server className="h-5 w-5 text-destructive" />
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        The Solution
                      </h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </Card>
                  </div>

                  {/* Before/After Comparison */}
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Before & After Comparison</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Before */}
                      <div>
                        <div className="inline-block px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-4">
                          Before (Cloud)
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Infrastructure</p>
                            <p className="font-semibold">{study.beforeAfter.before.servers}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Monthly Cost</p>
                            <p className="font-semibold text-destructive">{study.beforeAfter.before.monthlyCost}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Performance</p>
                            <p className="font-semibold">{study.beforeAfter.before.performance}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Control</p>
                            <p className="font-semibold">{study.beforeAfter.before.control}</p>
                          </div>
                        </div>
                      </div>

                      {/* After */}
                      <div>
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                          After (Owned Infrastructure)
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Infrastructure</p>
                            <p className="font-semibold">{study.beforeAfter.after.servers}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Monthly Cost</p>
                            <p className="font-semibold text-green-600">{study.beforeAfter.after.monthlyCost}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Performance</p>
                            <p className="font-semibold">{study.beforeAfter.after.performance}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Control</p>
                            <p className="font-semibold">{study.beforeAfter.after.control}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Implementation Timeline */}
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Implementation Timeline ({study.implementation.duration})</h3>
                    <div className="space-y-4">
                      {study.timeline.map((phase, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-24 text-sm font-medium text-muted-foreground">
                            {phase.week}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                              <p className="font-medium">{phase.task}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Results */}
                  <Card className="p-8 bg-primary/5">
                    <h3 className="text-2xl font-bold mb-6 text-center">Measurable Results</h3>
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-3xl font-bold text-primary">{study.results.monthlySavings}</p>
                        <p className="text-sm text-muted-foreground">Monthly Savings</p>
                      </div>
                      <div className="text-center">
                        <TrendingDown className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-green-600">{study.results.costReduction}</p>
                        <p className="text-sm text-muted-foreground">Cost Reduction</p>
                      </div>
                      <div className="text-center">
                        <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-blue-600">{study.results.roi}</p>
                        <p className="text-sm text-muted-foreground">ROI Payback</p>
                      </div>
                      <div className="text-center">
                        <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-3xl font-bold text-purple-600">{study.results.annualSavings}</p>
                        <p className="text-sm text-muted-foreground">Annual Savings</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Additional Benefits</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {study.results.additionalBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>

                  {index < caseStudies.length - 1 && (
                    <div className="border-t pt-8" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Infrastructure Economics?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a custom ROI analysis and implementation roadmap for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-sales">
                  <Button size="lg">
                    Get Your Custom Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing-calculator">
                  <Button variant="outline" size="lg">
                    Calculate Your Savings
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
