import { SEO } from "@/components/SEO";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingDown, Calendar, Award } from "lucide-react";

export default function PricingCalculator() {
  const [servers, setServers] = useState(10);
  const [monthlyCloudCost, setMonthlyCloudCost] = useState(360);
  const [serverCost, setServerCost] = useState(290);

  // Calculations
  const annualCloudCost = monthlyCloudCost * 12;
  const totalHardwareCost = servers * serverCost;
  const annualSavings = annualCloudCost - totalHardwareCost;
  const monthsToROI = totalHardwareCost / (annualCloudCost / 12);
  const threeYearCloudCost = annualCloudCost * 3;
  const threeYearSavings = threeYearCloudCost - totalHardwareCost;

  return (
      <>
      <SEO 
        title="Infrastructure Cost Calculator"
        description="Calculate your potential savings by moving from cloud to owned infrastructure. Get personalized ROI projections."
        keywords="cost calculator, pricing calculator, infrastructure ROI, cloud savings"
      />
      <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Infrastructure Cost Calculator</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Calculate your potential savings by moving from cloud to owned infrastructure.
              Adjust the inputs below to see personalized projections for your organization.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Input Section */}
              <Card className="p-6 bg-card border-border/40">
                <h2 className="text-2xl font-semibold mb-6">Your Current Situation</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="servers" className="text-base">
                      Number of Servers Needed
                    </Label>
                    <Input
                      id="servers"
                      type="number"
                      value={servers}
                      onChange={(e) => setServers(Number(e.target.value))}
                      className="mt-2"
                      min="1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cloudCost" className="text-base">
                      Monthly Cloud Cost ($)
                    </Label>
                    <Input
                      id="cloudCost"
                      type="number"
                      value={monthlyCloudCost}
                      onChange={(e) => setMonthlyCloudCost(Number(e.target.value))}
                      className="mt-2"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Current monthly spending on cloud infrastructure
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="serverCost" className="text-base">
                      Cost Per Server ($)
                    </Label>
                    <Input
                      id="serverCost"
                      type="number"
                      value={serverCost}
                      onChange={(e) => setServerCost(Number(e.target.value))}
                      className="mt-2"
                      min="0"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      One-time hardware cost per server (e.g., ZimaBoard: $290)
                    </p>
                  </div>
                </div>
              </Card>

              {/* Results Section */}
              <div className="space-y-4">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Annual Savings</h3>
                      <p className="text-3xl font-bold text-primary mt-1">
                        ${annualSavings.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        First year savings after hardware investment
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border/40">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">ROI Timeline</h3>
                      <p className="text-3xl font-bold mt-1">
                        {monthsToROI.toFixed(1)} months
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Time to recover hardware investment
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border/40">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="h-6 w-6 text-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">3-Year Savings</h3>
                      <p className="text-3xl font-bold mt-1">
                        ${threeYearSavings.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Total savings over three years
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border/40">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Total Investment</h3>
                      <p className="text-3xl font-bold mt-1">
                        ${totalHardwareCost.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        One-time hardware cost for {servers} servers
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Comparison Table */}
            <Card className="p-6 bg-card border-border/40 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cost Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Timeframe</th>
                      <th className="text-right py-3 px-4">Cloud Cost</th>
                      <th className="text-right py-3 px-4">Owned Infrastructure</th>
                      <th className="text-right py-3 px-4">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4">Year 1</td>
                      <td className="text-right py-3 px-4">${annualCloudCost.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">${totalHardwareCost.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 font-semibold text-primary">
                        ${annualSavings.toLocaleString()}
                      </td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-3 px-4">Year 2</td>
                      <td className="text-right py-3 px-4">${(annualCloudCost * 2).toLocaleString()}</td>
                      <td className="text-right py-3 px-4">${totalHardwareCost.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 font-semibold text-primary">
                        ${(annualCloudCost * 2 - totalHardwareCost).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Year 3</td>
                      <td className="text-right py-3 px-4">${threeYearCloudCost.toLocaleString()}</td>
                      <td className="text-right py-3 px-4">${totalHardwareCost.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 font-semibold text-primary">
                        ${threeYearSavings.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* CTA Section */}
            <Card className="p-8 bg-primary/5 border-primary/20 text-center">
              <h2 className="text-2xl font-semibold mb-3">Ready to Transform Your Infrastructure?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These projections are based on your inputs. Contact us for a detailed feasibility study
                tailored to your specific infrastructure needs and business requirements.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/elab-executive-summary">Read Full Report</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/tools">Download PDF Study</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}
