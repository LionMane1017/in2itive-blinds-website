import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingDown, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [servers, setServers] = useState(10);
  const [monthlyCloudCost, setMonthlyCloudCost] = useState(36);
  const [hardwareCostPerUnit, setHardwareCostPerUnit] = useState(290);

  const trackCalculation = () => {
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('roi_calculator_used', {
        servers,
        monthly_cloud_cost: monthlyCloudCost,
        hardware_cost: hardwareCostPerUnit,
        annual_savings: annualSavings,
        months_to_roi: monthsToROI.toFixed(1)
      });
    }
  };

  const totalCloudCostAnnual = servers * monthlyCloudCost * 12;
  const totalHardwareCost = servers * hardwareCostPerUnit;
  const annualSavings = totalCloudCostAnnual - totalHardwareCost;
  const monthsToROI = totalHardwareCost / (servers * monthlyCloudCost);
  const threeYearSavings = (totalCloudCostAnnual * 3) - totalHardwareCost;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl">Interactive ROI Calculator</CardTitle>
            <CardDescription>
              Calculate your potential savings with infrastructure ownership
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="servers">Number of Servers</Label>
              <Input
                id="servers"
                type="number"
                min="1"
                value={servers}
                onChange={(e) => setServers(parseInt(e.target.value) || 1)}
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cloudCost">Monthly Cloud Cost Per Server ($)</Label>
              <Input
                id="cloudCost"
                type="number"
                min="1"
                value={monthlyCloudCost}
                onChange={(e) => setMonthlyCloudCost(parseInt(e.target.value) || 1)}
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hardwareCost">Hardware Cost Per Unit ($)</Label>
              <Input
                id="hardwareCost"
                type="number"
                min="1"
                value={hardwareCostPerUnit}
                onChange={(e) => setHardwareCostPerUnit(parseInt(e.target.value) || 1)}
                className="text-lg"
              />
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={() => {
                setServers(10);
                setMonthlyCloudCost(36);
                setHardwareCostPerUnit(290);
                // Track analytics event
                if (typeof window !== 'undefined' && (window as any).umami) {
                  (window as any).umami.track('roi_calculator_reset');
                }
              }}
            >
              Reset to Defaults
            </Button>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
              <div className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 text-destructive mt-1" />
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Annual Cloud Cost</div>
                  <div className="text-3xl font-bold text-destructive">
                    ${totalCloudCostAnnual.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-start gap-2">
                <TrendingDown className="h-5 w-5 text-primary mt-1" />
                <div>
                  <div className="text-sm font-medium text-muted-foreground">One-Time Hardware Investment</div>
                  <div className="text-3xl font-bold text-primary">
                    ${totalHardwareCost.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
              <div className="text-sm font-medium text-muted-foreground">Annual Savings After ROI</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                ${annualSavings.toLocaleString()}
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
              <div className="text-sm font-medium text-muted-foreground">Months to ROI</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {monthsToROI.toFixed(1)} months
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border border-border/40">
              <div className="text-sm font-medium text-muted-foreground">3-Year Total Savings</div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                ${threeYearSavings.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Your Scenario Summary</h3>
          <p className="text-sm text-muted-foreground">
            With {servers} servers at ${monthlyCloudCost}/month each, you're spending <strong>${totalCloudCostAnnual.toLocaleString()}/year</strong> on cloud infrastructure. 
            A one-time investment of <strong>${totalHardwareCost.toLocaleString()}</strong> in owned hardware would pay for itself in <strong>{monthsToROI.toFixed(1)} months</strong>, 
            then save you <strong>${annualSavings.toLocaleString()}/year</strong> in perpetuity. Over 3 years, that's <strong>${threeYearSavings.toLocaleString()}</strong> in total savings.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
