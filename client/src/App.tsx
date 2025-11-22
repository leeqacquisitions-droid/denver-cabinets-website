import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import RecentInstallations from "@/pages/RecentInstallations";
import KitchenCabinetInstallation from "@/pages/KitchenCabinetInstallation";
import WaterDamageCabinetRepair from "@/pages/WaterDamageCabinetRepair";
import MultiUnitBuilders from "@/pages/MultiUnitBuilders";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/recent-installations" component={RecentInstallations} />
      <Route path="/services/kitchen-cabinet-installation" component={KitchenCabinetInstallation} />
      <Route path="/services/water-damage-cabinet-repair" component={WaterDamageCabinetRepair} />
      <Route path="/services/multi-unit-builders" component={MultiUnitBuilders} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
