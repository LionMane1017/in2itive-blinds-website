import { Play, CheckCircle2, Clock, Users, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

export default function VideoWalkthrough() {
  const setupSteps = [
    {
      phase: "Phase 1: Planning",
      duration: "1-2 hours",
      steps: [
        {
          title: "Infrastructure Assessment",
          description: "Review current cloud setup, identify workloads to migrate, and calculate expected savings.",
          icon: "📊",
        },
        {
          title: "Hardware Selection",
          description: "Choose ZimaBoard models based on your performance requirements and budget.",
          icon: "🖥️",
        },
        {
          title: "Network Planning",
          description: "Design network topology, IP addressing, and connectivity requirements.",
          icon: "🌐",
        },
      ],
    },
    {
      phase: "Phase 2: Setup",
      duration: "2-4 hours",
      steps: [
        {
          title: "Physical Installation",
          description: "Unbox ZimaBoards, mount in rack or enclosure, connect power and network cables.",
          icon: "🔧",
        },
        {
          title: "Proxmox Installation",
          description: "Install Proxmox VE on each node using USB boot media. Configure basic networking.",
          icon: "💿",
        },
        {
          title: "Cluster Formation",
          description: "Create Proxmox cluster, join all nodes, configure shared storage and high availability.",
          icon: "🔗",
        },
      ],
    },
    {
      phase: "Phase 3: Configuration",
      duration: "3-5 hours",
      steps: [
        {
          title: "Storage Configuration",
          description: "Set up ZFS pools, configure backup storage, and establish snapshot schedules.",
          icon: "💾",
        },
        {
          title: "Network Configuration",
          description: "Configure VLANs, bridges, firewall rules, and VPN access for remote management.",
          icon: "🔐",
        },
        {
          title: "VM Templates",
          description: "Create VM templates for common workloads (web servers, databases, applications).",
          icon: "📋",
        },
      ],
    },
    {
      phase: "Phase 4: Migration",
      duration: "4-8 hours",
      steps: [
        {
          title: "Data Migration",
          description: "Transfer application data, databases, and configuration files from cloud to cluster.",
          icon: "📦",
        },
        {
          title: "Application Deployment",
          description: "Deploy applications in VMs or containers, configure load balancing and failover.",
          icon: "🚀",
        },
        {
          title: "Testing & Validation",
          description: "Perform comprehensive testing, validate performance, and ensure all services are operational.",
          icon: "✅",
        },
      ],
    },
  ];

  const managementFeatures = [
    {
      title: "Web-Based Management",
      description: "Intuitive Proxmox web interface accessible from any browser. No complex CLI commands required for daily operations.",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "Live Migration",
      description: "Move running VMs between nodes with zero downtime. Perform maintenance without service interruption.",
      icon: <Users className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Automated Backups",
      description: "Schedule automatic VM backups, configure retention policies, and restore with one click.",
      icon: <Shield className="h-8 w-8 text-purple-600" />,
    },
    {
      title: "Monitoring & Alerts",
      description: "Real-time resource monitoring, performance graphs, and email alerts for critical events.",
      icon: <Clock className="h-8 w-8 text-orange-600" />,
    },
  ];

  const keyBenefits = [
    "No vendor-specific knowledge required - standard Proxmox VE",
    "One-time setup, minimal ongoing maintenance",
    "Full root access and complete control",
    "Active community support and documentation",
    "Compatible with existing DevOps tools",
    "Easy to scale by adding more nodes",
  ];

  return (
    <>
      <SEO
        title="Media - Videos & Walkthroughs"
        description="Watch our comprehensive videos about cloud cost optimization and infrastructure setup. Includes The Great Cloud Exit documentary and detailed setup walkthroughs."
        keywords="cloud exit video, infrastructure videos, setup guide, Proxmox tutorial, ZimaBoard installation"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Media Center</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Videos & Walkthroughs
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our video library featuring infrastructure transformation documentaries and detailed technical walkthroughs.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>18 min watch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span>Step-by-step guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Beginner friendly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video - The Great Cloud Exit */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto mb-4">
              <h2 className="text-3xl font-bold mb-2">Featured Documentary</h2>
              <p className="text-muted-foreground">The Great Cloud Exit - Why enterprises are reclaiming control of their infrastructure</p>
            </div>
            <Card className="overflow-hidden max-w-5xl mx-auto">
              <div className="aspect-video bg-black">
                <video 
                  controls 
                  className="w-full h-full"
                >
                  <source src="/videos/The_Great_Cloud_Exit.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Great Cloud Exit</h3>
                <p className="text-muted-foreground">
                  A documentary exploring why enterprises are moving away from cloud providers and reclaiming control of their infrastructure. Features real-world case studies, cost analysis, and expert insights on the cloud repatriation movement.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Setup Walkthrough Video */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto mb-4">
              <h2 className="text-3xl font-bold mb-2">Technical Walkthrough</h2>
              <p className="text-muted-foreground">Complete setup and management guide for the Wise Cluster</p>
            </div>
            <Card className="overflow-hidden max-w-5xl mx-auto">
              <div className="aspect-video bg-muted relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Wise Cluster Setup and Management Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 bg-muted/30">
                <h3 className="text-xl font-semibold mb-2">
                  Complete Setup & Management Walkthrough
                </h3>
                <p className="text-muted-foreground">
                  This video covers everything from initial hardware setup to advanced cluster management. 
                  Follow along to deploy your own Wise Cluster or use it as a reference during your implementation.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Video Chapters */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Video Chapters</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { time: "0:00", title: "Introduction & Overview" },
                  { time: "1:30", title: "Hardware Unboxing & Inspection" },
                  { time: "3:15", title: "Physical Installation & Cabling" },
                  { time: "5:45", title: "Proxmox Installation" },
                  { time: "8:20", title: "Cluster Formation & Configuration" },
                  { time: "11:00", title: "Storage & Network Setup" },
                  { time: "13:30", title: "VM Deployment & Migration" },
                  { time: "16:00", title: "Management Interface Tour" },
                ].map((chapter, idx) => (
                  <Card key={idx} className="p-4 hover:bg-accent transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        {chapter.time}
                      </Badge>
                      <span className="font-medium">{chapter.title}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Step-by-Step Setup Guide
                </h2>
                <p className="text-xl text-muted-foreground">
                  The complete deployment process broken down into manageable phases. 
                  Total setup time: <strong>10-19 hours</strong> (can be done over multiple days)
                </p>
              </div>

              <div className="space-y-12">
                {setupSteps.map((phase, phaseIdx) => (
                  <div key={phaseIdx}>
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="text-lg px-4 py-2">{phase.phase}</Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{phase.duration}</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {phase.steps.map((step, stepIdx) => (
                        <Card key={stepIdx} className="p-6">
                          <div className="text-4xl mb-4">{step.icon}</div>
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Management Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">
                Daily Management Made Simple
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {managementFeatures.map((feature, idx) => (
                  <Card key={idx} className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Why the Wise Cluster is Easy to Manage
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Technical Requirements
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Skills Needed</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Basic Linux knowledge</li>
                    <li>• Network fundamentals</li>
                    <li>• Command line comfort</li>
                    <li>• No programming required</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Tools Required</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• USB drive (8GB+)</li>
                    <li>• Ethernet cables</li>
                    <li>• Network switch</li>
                    <li>• Laptop/desktop for setup</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Time Investment</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Initial setup: 10-19 hours</li>
                    <li>• Can spread over days</li>
                    <li>• Daily maintenance: 15 min</li>
                    <li>• Weekly tasks: 30 min</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Build Your Own Cluster?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Download our detailed setup guide or explore the full feasibility study 
                to understand the complete business case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/elab-executive-summary"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Read Full Report
                </a>
                <a
                  href="/pricing-calculator"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Calculate Your Savings
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
