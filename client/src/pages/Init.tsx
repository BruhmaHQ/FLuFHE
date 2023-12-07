import React, { useEffect, useState } from "react";
import { GrMoney, GrLink } from "react-icons/gr";
import Button from "../components/Button";
import { Hash } from "viem";
import {
  useAccount,
  usePrepareContractWrite,
  useWaitForTransaction,
  useWalletClient,
} from "wagmi";
import { Inco } from "../utils/IncoChainConfig";
import { FluFLEConfig } from "../utils/flufheConfig";

const FLModelConfig = {
  address: "", // whatever will come after deploying
  abi: FluFLEConfig.abi,
  chainId: Inco.id,
};

// const { config: FlData } = usePrepareContractWrite({
//  ...FLModelConfig,
//  functionName:"addEncrypyedValue",
//  args: ['0x','0x'],
// });

// const {
//   data: data,
//   write: add,
//   isLoading: isEncyLoading,
//   isSuccess: IsEncyStarted,
//   error: burnErrorCredit,
// } = useContractWrite(FlData);

function Train(props: any) {
  const { address } = useAccount();
  const [allowlist, setAllowlist] = useState<string>("");

  const [hash, setHash] = useState<Hash>();
  const { isSuccess, isLoading, data, ...wait } = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      console.log("Success", data);
    },
  });
  useEffect(() => {
    console.log({ isSuccess, isLoading, data, wait });
  });
  const {
    data: walletClient,
    isError,
    isLoading: wallletIsLoading,
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
    console.log(hash);
    setHash(hash);
  };

  const FLModelConfig = {
    address: "", // whatever will come after deploying
    abi: FluFLEConfig.abi,
    chainId: Inco.id,
  };

  const { config: FlData } = usePrepareContractWrite({
    ...FLModelConfig,
    functionName: "a",
    args: ["0x", "0x"],
  });

  // const {
  //   data: data,
  //   write: add,
  //   isLoading: isEncyLoading,
  //   isSuccess: IsEncyStarted,
  //   error: burnErrorCredit,
  // } = useContractWrite(FlData);

  const addToAllowist = () => {
    const array = allowlist.split(",");
  };

  useEffect(() => {
    if (isSuccess) {
      props.setContract(data?.contractAddress);
    }
    console.log({ data });
  }, [isSuccess]);
  return (
    <div className="mx-auto max-w-[1000px]">
      <h1 className="mb-3 m-2 text-[25px]">Train</h1>
      <div className="flex flex-row gap-5">
        <Button
          type="button"
          mode="green"
          disabled={props.contract}
          onClick={() => {
            deployContract();
          }}
        >
          <div className="flex flex-row gap-[10px] items-center ">
            <h1 className="text-brandGrey font-semibold ">
              {isLoading ? "Initializing a model" : "Init Federated model"}
            </h1>
          </div>
        </Button>

        {hash && (
          <a
            href={`https://explorer.inco.network/tx/${hash}`}
            target="_blank"
            className="flex flex-row gap-2"
          >
            {" "}
            <GrLink /> View aggregator contact on explorer {}
          </a>
        )}
      </div>
      <h1 className="mt-8">Add Local Model Trainers to Allowlist</h1>
      <input
        placeholder={
          "0xcbBCbAD41574f74D10786cEb9Ded5Adc45B396Ee,0xcbBCbAD41574f74D10786cEb9Ded5Adc45B396Ee"
        }
        type={"text"}
        onChange={(e) => setAllowlist(e.target.value)}
        value={allowlist}
        className={` my-[10px] w-full placeholder:text-[#D3D4D5] flex-grow rounded-[6px] border-primary-1  px-[12px] py-[6px] text-[14px] font-[400px] border-[1px]`}
      />{" "}
      <Button type="button" mode="dark" onClick={addToAllowist}>
        <div className="flex flex-row gap-[10px] items-center ">
          <h1 className="text-[#EDEDED] font-semibold">Add to allowlist</h1>
        </div>
      </Button>
      <div className="mt-5">
        <Button
          type="button"
          mode="green"
          onClick={() => {
            // deployContract();
          }}
        >
          <div className="flex flex-row gap-[10px] items-center ">
            <h1 className="text-brandGrey font-semibold ">Send for training</h1>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Train;
