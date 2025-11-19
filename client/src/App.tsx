import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { LiveChatWidget } from "./components/LiveChatWidget";
import WiseWareAssistant from "./components/WiseWareAssistant";
import UnifiedChatWidget from "./components/UnifiedChatWidget";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import RollerShades from "./pages/products/RollerShades";
import VerticalBlinds from "./pages/products/VerticalBlinds";
import VenetianBlinds from "./pages/products/VenetianBlinds";
import HoneycombShades from "./pages/products/HoneycombShades";
import Drapery from "./pages/products/Drapery";
import Awnings from "./pages/products/Awnings";
import OutdoorScreens from "./pages/products/OutdoorScreens";
import Motorization from "./pages/products/Motorization";
import FilmProduction from "./pages/FilmProduction";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import ContactSales from "./pages/ContactSales";
import Resources from "./pages/Resources";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div 
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen"
        >
          <Switch location={location}>
          <Route path={"/"} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products/roller-shades" component={RollerShades} />
          <Route path="/products/vertical-blinds" component={VerticalBlinds} />
          <Route path="/products/venetian-blinds" component={VenetianBlinds} />
          <Route path="/products/honeycomb-shades" component={HoneycombShades} />
          <Route path="/products/drapery" component={Drapery} />
          <Route path="/products/awnings" component={Awnings} />
          <Route path="/products/outdoor-screens" component={OutdoorScreens} />
          <Route path="/products/motorization" component={Motorization} />
          <Route path="/film-production" component={FilmProduction} />
          <Route path="/faq" component={FAQ} />
          <Route path="/gallery" component={Gallery} />
          <Route path={"/resources"} component={Resources} />
          <Route path={"/contact-sales"} component={ContactSales} />
          <Route path={"/contact"} component={ContactSales} />
          <Route path={"/blog"} component={BlogList} />
          <Route path={"/blog/choosing-blinds-for-every-room"} component={BlogPost} />
          <Route path={"/admin"} component={Admin} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
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
