import { ConnectKitButton } from "connectkit";
import "cal-sans";
import { Route } from "wouter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWaitForTransaction, useWalletClient } from "wagmi";
import { FluFLEConfig } from "./utils/flufheConfig";

import {
  Hash,
  TransactionReceipt,
} from "viem";
import { Inco } from "./utils/IncoChainConfig";
import { useEffect, useState } from "react";

function App() {
  const { address } = useAccount();
  const [hash, setHash] = useState<Hash>();
  const {isSuccess, data} = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      console.log("Success", data);
    },
  });
  const [receipt, setReceipt] = useState<TransactionReceipt>();
  const {
    data: walletClient,
    isError,
    isLoading,
  } = useWalletClient({ chainId: Inco.id });

  const deployContract = async () => {
    if (!address) return;
    //@ts-ignore
    const hash = await walletClient.deployContract({
      abi: FluFLEConfig.abi,
      account: address,
      args: [false],
      bytecode: `0x${FluFLEConfig.bytocode}`,
    });
    console.log(hash)
    setHash(hash);
  };

  // const wait = async () => {
  //   if (hash) {
      
  //   }
  // }
  useEffect(() => {
if (isSuccess) console.log({data})
  }, [isSuccess]);
  return (
    <div className="App">


<ConnectButton />
      <button onClick={() => deployContract()}>deploy</button>
      <div className="mt-[80px]">
      <Navbar
      />
        <Route path="/">
          <Home />
        </Route>
      </div>


    </div>
  );
}

export default App;
