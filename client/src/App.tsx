import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { LiveChatWidget } from "./components/LiveChatWidget";
import WiseWareAssistant from "./components/WiseWareAssistant";
import UnifiedChatWidget from "./components/UnifiedChatWidget";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import PricingCalculator from "./pages/PricingCalculator";
import Comparison from "./pages/Comparison";
import FAQ from "./pages/FAQ";
import ContactSales from "./pages/ContactSales";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import VideoWalkthrough from "./pages/VideoWalkthrough";
import Study from "./pages/Study";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import VendorLockin from "./pages/VendorLockin";
import CTOVision from "./pages/CTOVision";
import CurrentInfrastructure from "./pages/CurrentInfrastructure";
import Solution from "./pages/Solution";
import FinancialAnalysis from "./pages/FinancialAnalysis";
import TechnicalStrategy from "./pages/TechnicalStrategy";
import CTOValidation from "./pages/CTOValidation";
import Evidence from "./pages/Evidence";
import Conclusion from "./pages/Conclusion";
import BlogList from "./pages/BlogList";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import ElabExecutiveSummary from "./pages/ElabExecutiveSummary";
import ElabVendorLockin from "./pages/ElabVendorLockin";
import ElabCTOVision from "./pages/ElabCTOVision";
import ElabCurrentInfrastructure from "./pages/ElabCurrentInfrastructure";
import ElabSolution from "./pages/ElabSolution";
import ElabFinancialAnalysis from "./pages/ElabFinancialAnalysis";
import ElabTechnicalStrategy from "./pages/ElabTechnicalStrategy";
import ElabCTOValidation from "./pages/ElabCTOValidation";
import ElabSupportingEvidence from "./pages/ElabSupportingEvidence";
import ElabConclusion from "./pages/ElabConclusion";
import ElaboratedStudy from "./pages/ElaboratedStudy";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Switch>
      <Route path={"/"} component={Home} />
        <Route path="/about" component={About} />
       <Route path="/tools" component={Tools} />
      <Route path="/comparison" component={Comparison} />
      <Route path="/demo" component={VideoWalkthrough} />
      <Route path="/faq" component={FAQ} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/contact-sales"} component={ContactSales} />
      <Route path={"/case-studies"} component={CaseStudies} />     <Route path="/pricing-calculator" component={PricingCalculator} />
      <Route path="/study" component={Study} />
      <Route path={"/blog"} component={BlogList} />
        <Route path={"/blog/the-2900-decision"} component={BlogPost1} />
        <Route path={"/blog/hybrid-cloud-architecture"} component={BlogPost2} />
        <Route path={"/blog/network-engineers-perspective"} component={BlogPost3} />
        <Route path={"/blog/cloud-repatriation-trends"} component={BlogPost4} />
        <Route path={"/blog/cost-optimization-strategies"} component={BlogPost5} />
        <Route path={"/blog/video-case-study"} component={BlogPost6} />
        <Route path={"/blog/enterprise-transformation"} component={BlogPost7} />

        <Route path={"/executive-summary"} component={ExecutiveSummary} />
        <Route path={"/vendor-lockin"} component={VendorLockin} />
        <Route path={"/cto-vision"} component={CTOVision} />
        <Route path={"/current-infrastructure"} component={CurrentInfrastructure} />
        <Route path={"/solution"} component={Solution} />
        <Route path={"/financial-analysis"} component={FinancialAnalysis} />
        <Route path={"/technical-strategy"} component={TechnicalStrategy} />
        <Route path={"/cto-validation"} component={CTOValidation} />
        <Route path={"/evidence"} component={Evidence} />
        <Route path={"/conclusion"} component={Conclusion} />
        <Route path="/elab-executive-summary" component={ElabExecutiveSummary} />
      <Route path="/elab-vendor-lockin" component={ElabVendorLockin} />
      <Route path="/elab-cto-vision" component={ElabCTOVision} />
      <Route path="/elab-current-infrastructure" component={ElabCurrentInfrastructure} />
      <Route path="/elab-solution" component={ElabSolution} />
      <Route path="/elab-financial-analysis" component={ElabFinancialAnalysis} />
      <Route path="/elab-technical-strategy" component={ElabTechnicalStrategy} />
      <Route path="/elab-cto-validation" component={ElabCTOValidation} />
      <Route path="/elab-supporting-evidence" component={ElabSupportingEvidence} />
      <Route path="/elab-conclusion" component={ElabConclusion} />
      <Route path="/elaborated-study" component={ElaboratedStudy} />
      <Route path="/elab-executive-summary" component={ElabExecutiveSummary} />
      <Route path="/elab-vendor-lockin" component={ElabVendorLockin} />
      <Route path="/elab-cto-vision" component={ElabCTOVision} />
      <Route path="/elab-current-infrastructure" component={ElabCurrentInfrastructure} />
      <Route path="/elab-solution" component={ElabSolution} />
      <Route path="/elab-financial-analysis" component={ElabFinancialAnalysis} />
      <Route path="/elab-technical-strategy" component={ElabTechnicalStrategy} />
      <Route path="/elab-cto-validation" component={ElabCTOValidation} />
      <Route path="/elab-supporting-evidence" component={ElabSupportingEvidence} />
      <Route path="/elab-conclusion" component={ElabConclusion} />
      <Route path="/elaborated-study" component={ElaboratedStudy} />
      <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

function App() {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        {showLiveChat && <LiveChatWidget onClose={() => setShowLiveChat(false)} />}
        {showVoiceAssistant && <WiseWareAssistant onClose={() => setShowVoiceAssistant(false)} />}
        <UnifiedChatWidget 
          onOpenLiveChat={() => setShowLiveChat(true)}
          onOpenVoiceAssistant={() => setShowVoiceAssistant(true)}
        />
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
