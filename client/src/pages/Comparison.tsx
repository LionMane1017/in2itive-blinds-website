import { Check, X, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

export default function Comparison() {
  const providers = [
    {
      name: "AWS Lightsail",
      logo: "☁️",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
    {
      name: "Azure",
      logo: "☁️",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      name: "Google Cloud",
      logo: "☁️",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    {
      name: "DigitalOcean",
      logo: "☁️",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    },
    {
      name: "Wise Cluster",
      logo: "🖥️",
      color: "text-primary",
      bgColor: "bg-primary/10",
      highlight: true,
    },
  ];

  const comparisonData = [
    {
      category: "Cost Structure",
      rows: [
        {
          feature: "Monthly Cost (10 servers)",
          aws: "$360/month",
          azure: "$380/month",
          gcp: "$350/month",
          digitalocean: "$300/month",
          wise: "$0 (after ROI)",
        },
        {
          feature: "Annual Cost (Year 1)",
          aws: "$4,320",
          azure: "$4,560",
          gcp: "$4,200",
          digitalocean: "$3,600",
          wise: "$2,900 (one-time)",
        },
        {
          feature: "3-Year Total Cost",
          aws: "$12,960",
          azure: "$13,680",
          gcp: "$12,600",
          digitalocean: "$10,800",
          wise: "$2,900",
        },
        {
          feature: "Hidden Costs",
          aws: "Bandwidth, API calls, storage",
          azure: "Egress fees, support plans",
          gcp: "Network egress, operations",
          digitalocean: "Bandwidth overages",
          wise: "Electricity only (~$600/yr)",
        },
      ],
    },
    {
      category: "Performance & Control",
      rows: [
        {
          feature: "CPU Throttling",
          aws: true,
          azure: true,
          gcp: true,
          digitalocean: true,
          wise: false,
        },
        {
          feature: "Dedicated Resources",
          aws: false,
          azure: "Partial",
          gcp: false,
          digitalocean: "Partial",
          wise: true,
        },
        {
          feature: "Full Root Access",
          aws: "Limited",
          azure: "Limited",
          gcp: "Limited",
          digitalocean: "Limited",
          wise: true,
        },
        {
          feature: "Custom Hardware Config",
          aws: false,
          azure: false,
          gcp: false,
          digitalocean: false,
          wise: true,
        },
      ],
    },
    {
      category: "Vendor Lock-in & Flexibility",
      rows: [
        {
          feature: "Vendor Lock-in Risk",
          aws: "High",
          azure: "High",
          gcp: "High",
          digitalocean: "Medium",
          wise: "None",
        },
        {
          feature: "Migration Difficulty",
          aws: "Very Hard",
          azure: "Very Hard",
          gcp: "Very Hard",
          digitalocean: "Hard",
          wise: "Easy (you own it)",
        },
        {
          feature: "Price Increase Risk",
          aws: "High (history of increases)",
          azure: "High",
          gcp: "Medium",
          digitalocean: "Medium",
          wise: "None",
        },
        {
          feature: "Multi-Cloud Strategy",
          aws: "Difficult",
          azure: "Difficult",
          gcp: "Difficult",
          digitalocean: "Moderate",
          wise: "Full flexibility",
        },
      ],
    },
    {
      category: "Scalability & Management",
      rows: [
        {
          feature: "Horizontal Scaling",
          aws: "Automatic",
          azure: "Automatic",
          gcp: "Automatic",
          digitalocean: "Manual/API",
          wise: "Manual (add nodes)",
        },
        {
          feature: "Setup Complexity",
          aws: "Low",
          azure: "Low",
          gcp: "Low",
          digitalocean: "Low",
          wise: "Medium (one-time)",
        },
        {
          feature: "Maintenance Required",
          aws: "Minimal",
          azure: "Minimal",
          gcp: "Minimal",
          digitalocean: "Minimal",
          wise: "Moderate",
        },
        {
          feature: "Technical Expertise",
          aws: "Medium",
          azure: "Medium",
          gcp: "Medium",
          digitalocean: "Low-Medium",
          wise: "Medium-High",
        },
      ],
    },
    {
      category: "Security & Compliance",
      rows: [
        {
          feature: "Data Sovereignty",
          aws: "Limited control",
          azure: "Limited control",
          gcp: "Limited control",
          digitalocean: "Region-based",
          wise: "Full control",
        },
        {
          feature: "Physical Security",
          aws: "Provider managed",
          azure: "Provider managed",
          gcp: "Provider managed",
          digitalocean: "Provider managed",
          wise: "Your premises",
        },
        {
          feature: "Compliance Certifications",
          aws: true,
          azure: true,
          gcp: true,
          digitalocean: "Limited",
          wise: "DIY",
        },
        {
          feature: "Data Privacy",
          aws: "Shared responsibility",
          azure: "Shared responsibility",
          gcp: "Shared responsibility",
          digitalocean: "Shared responsibility",
          wise: "Full ownership",
        },
      ],
    },
    {
      category: "Business Considerations",
      rows: [
        {
          feature: "ROI Timeline",
          aws: "Never (ongoing cost)",
          azure: "Never (ongoing cost)",
          gcp: "Never (ongoing cost)",
          digitalocean: "Never (ongoing cost)",
          wise: "8 months",
        },
        {
          feature: "Long-term Savings",
          aws: "$0",
          azure: "$0",
          gcp: "$0",
          digitalocean: "$0",
          wise: "$3,420+/year",
        },
        {
          feature: "Asset Ownership",
          aws: false,
          azure: false,
          gcp: false,
          digitalocean: false,
          wise: true,
        },
        {
          feature: "Budget Predictability",
          aws: "Low (variable costs)",
          azure: "Low (variable costs)",
          gcp: "Low (variable costs)",
          digitalocean: "Medium",
          wise: "High (fixed)",
        },
      ],
    },
  ];

  const renderCell = (value: any, isWise: boolean = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className={`h-5 w-5 ${isWise ? "text-green-600" : "text-green-500"}`} />
      ) : (
        <X className="h-5 w-5 text-red-500" />
      );
    }
    
    if (value === "High" || value === "Very Hard" || value === "Difficult") {
      return (
        <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4" />
          {value}
        </span>
      );
    }
    
    if (value === "None" || value === "Easy" || value === "Full control" || value === "Full flexibility" || value === "Full ownership") {
      return (
        <span className={`font-medium ${isWise ? "text-green-600 dark:text-green-400" : ""}`}>
          {value}
        </span>
      );
    }
    
    return <span className={isWise ? "font-medium" : ""}>{value}</span>;
  };

  return (
    <>
      <SEO
        title="Cloud Provider Comparison - AWS vs Azure vs Google Cloud vs Owned Infrastructure"
        description="Detailed comparison of AWS Lightsail, Microsoft Azure, Google Cloud Platform, DigitalOcean, and owned infrastructure. Compare costs, performance, vendor lock-in risks, and long-term ROI."
        keywords="cloud comparison, AWS vs Azure, Google Cloud comparison, owned infrastructure, cloud costs, vendor lock-in, infrastructure ROI"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Infrastructure Comparison</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cloud Providers vs. Owned Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive side-by-side comparison of major cloud providers and the Wise Cluster approach. 
                Make informed decisions based on real costs, performance metrics, and long-term implications.
              </p>
            </div>
          </div>
        </section>

        {/* Provider Overview */}
        <section className="py-12 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {providers.map((provider) => (
                <Card
                  key={provider.name}
                  className={`p-6 text-center ${provider.bgColor} ${
                    provider.highlight ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="text-4xl mb-2">{provider.logo}</div>
                  <h3 className={`font-semibold ${provider.color}`}>
                    {provider.name}
                  </h3>
                  {provider.highlight && (
                    <Badge className="mt-2" variant="default">
                      Recommended
                    </Badge>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Tables */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-12">
              {comparisonData.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2">
                          <th className="text-left p-4 font-semibold bg-muted/50">
                            Feature
                          </th>
                          {providers.map((provider) => (
                            <th
                              key={provider.name}
                              className={`p-4 text-center font-semibold ${
                                provider.highlight
                                  ? "bg-primary/10"
                                  : "bg-muted/50"
                              }`}
                            >
                              {provider.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, rowIdx) => (
                          <tr
                            key={rowIdx}
                            className="border-b hover:bg-muted/30 transition-colors"
                          >
                            <td className="p-4 font-medium">{row.feature}</td>
                            <td className="p-4 text-center">
                              {renderCell(row.aws)}
                            </td>
                            <td className="p-4 text-center">
                              {renderCell(row.azure)}
                            </td>
                            <td className="p-4 text-center">
                              {renderCell(row.gcp)}
                            </td>
                            <td className="p-4 text-center">
                              {renderCell(row.digitalocean)}
                            </td>
                            <td className="p-4 text-center bg-primary/5">
                              {renderCell(row.wise, true)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                The Bottom Line
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
                    Cloud Providers: The Hidden Costs
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Perpetual expenses:</strong> $3,600-$4,560 annually with no end in sight
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>CPU throttling:</strong> Performance degradation when you need it most
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Vendor lock-in:</strong> Difficult and expensive to migrate away
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Unpredictable costs:</strong> Hidden fees and variable pricing
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
                    Wise Cluster: The Smart Investment
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>One-time cost:</strong> $2,900 investment pays for itself in 8 months
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>No throttling:</strong> Dedicated resources for consistent performance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Zero lock-in:</strong> Full ownership and control of your infrastructure
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Long-term savings:</strong> $3,420+ annual savings after ROI period
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                  <h3 className="text-2xl font-bold mb-4">
                    3-Year Cost Comparison
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">AWS</div>
                      <div className="text-2xl font-bold text-red-600">$12,960</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Azure</div>
                      <div className="text-2xl font-bold text-red-600">$13,680</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">GCP</div>
                      <div className="text-2xl font-bold text-red-600">$12,600</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">DigitalOcean</div>
                      <div className="text-2xl font-bold text-red-600">$10,800</div>
                    </div>
                    <div className="md:col-span-1 col-span-2">
                      <div className="text-sm text-muted-foreground mb-1">Wise Cluster</div>
                      <div className="text-3xl font-bold text-green-600">$2,900</div>
                      <Badge className="mt-2" variant="default">Save $7,900-$10,780</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Over 3 years, the Wise Cluster saves between <strong>$7,900 and $10,780</strong> compared to cloud providers, 
                    while giving you full ownership and control.
                  </p>
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
                Ready to Break Free from Cloud Costs?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how the Wise Cluster can transform your infrastructure economics 
                while giving you complete control and flexibility.
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
