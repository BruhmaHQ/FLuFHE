import React, { useState } from "react";
import { toHexString, init, getInstance } from "../utils/fhevm";
import Button from "../components/Button";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import { FluFLEConfig } from "../utils/flufheConfig";
import { Inco } from "../utils/IncoChainConfig";

function Train(props: any) {
  const [amountUint32, setAmountUint32] = useState(0);
  const [eamountUint32, setEamountUint32] = useState(0);

  const [amountUint32Bias, setAmountUint32Bias] = useState(0);
  const [eamountUint32Bias, setEamountUint32Bias] = useState(0);

  const handleAmountChangeUint32 = (event: any) => {
    let _instance = getInstance();
    _instance.then((instance: any) => {
      setEamountUint32(toHexString(instance.encrypt32(+event.target.value)));
    });
    setAmountUint32(event.target.value);
  };

  const handleAmountChangeUint32Bias = (event: any) => {
    let _instance = getInstance();
    _instance.then((instance: any) => {
      setEamountUint32Bias(
        toHexString(instance.encrypt32(+event.target.value))
      );
    });
    setAmountUint32Bias(event.target.value);
  };

  const handleCopyClickUint32Bias = () => {
    if (eamountUint32) {
      navigator.clipboard.writeText("0x" + eamountUint32);
    }
  };

  const FLModelConfig = {
    address: props.contract, // whatever will come after deploying
    abi: FluFLEConfig.abi,
    chainId: Inco.id,
  };

  const { config: FlData } = usePrepareContractWrite({
    ...FLModelConfig,
    functionName: "addEncrypyedValue",
    //@ts-ignore
    args: eamountUint32,
    eamountUint32Bias,
  });

  const {
    data: contactData,
    write: addEncrypyedValu,
    isLoading: isEncyLoading,
    isSuccess: IsEncyStarted,
    error: burnErrorCredit,
  } = useContractWrite(FlData);

  const aggregate = () => {
    console.log("here");
    addEncrypyedValu?.();
    console.log("here");
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className=" ">
        <h1 className="text-brandGreen text-xl">Add your weights</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Weights:</h1>
        <input
          placeholder={"weights"}
          type="text"
          onChange={handleAmountChangeUint32}
          value={amountUint32}
          className={` my-[10px] w-fit placeholder:text-zinc-500 text-zinc-800 flex-grow rounded-[6px] border-primary-1  px-[12px] py-[6px] text-[14px] font-[400px] border-[1px]`}
        />{" "}
        <h1 className="mt-2 mb-1">Encrypted Weights</h1>
        <div className="max-w-[300px] word-wrap"> {eamountUint32}</div>
      </div>

      <div className="flex flex-col gap-2">
        <h1>Bias:</h1>
        <input
          placeholder={"weights"}
          type="text"
          onChange={handleAmountChangeUint32Bias}
          value={amountUint32Bias}
          className={` my-[10px] w-fit placeholder:text-zinc-500 text-zinc-800 flex-grow rounded-[6px] border-primary-1  px-[12px] py-[6px] text-[14px] font-[400px] border-[1px]`}
        />{" "}
        <h1 className="mt-2 mb-1">Encrypted Weights</h1>
        <div className="max-w-[300px] word-wrap"> {eamountUint32Bias}</div>
      </div>
      <Button
        type="button"
        mode="green"
        onClick={() => {
          aggregate();
        }}
      >
        <div className="flex flex-row gap-[10px] items-center ">
          <h1 className="text-brandGrey font-semibold ">Aggregate using FHE</h1>
        </div>
      </Button>

      <div className="mt-3 bg-neutral-800 border border-zinc-600 hover:bg-zinc-800 rounded-lg p-3 flex flex-col justify-between">
        <h1>Basic Aggregation Model</h1>

        <div className=""> no of local trainers: 3</div>
      </div>
    </div>
  );
}

export default Train;
