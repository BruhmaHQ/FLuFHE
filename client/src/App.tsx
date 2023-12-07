import "cal-sans";
import { Route } from "wouter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useWaitForTransaction,
  useWalletClient,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";
import { FluFLEConfig } from "./utils/flufheConfig";
import { Hash } from "viem";
import { Inco } from "./utils/IncoChainConfig";
import { useEffect, useState } from "react";
import TrainInit from "./pages/Init";
import Dashboard from "./pages/Dashboard";
import Train from "./pages/Train";

function App() {
  const [contract, setContract] = useState<any>(null);
  return (
    <div className="App">
      <div className="mt-[80px]">
        <Navbar />
        <Route path="/train/init">
          <TrainInit contract={contract} setContract={setContract} />
        </Route>
        <Route path="/train">
          <Train />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </div>
    </div>
  );
}

export default App;
