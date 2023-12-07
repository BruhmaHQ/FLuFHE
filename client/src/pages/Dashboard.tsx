import React from "react";
import Button from "../components/Button";
import { Link } from "wouter";

function Dashboard() {
  return (
    <div className="mx-auto max-w-[1000px]">
      <h1 className="text-brandGreen text-xl my-3">FLuFHE Models</h1>
      <div className="grid grid-cols-4 gap-6">
        <Link href="/train">
          <div className="bg-neutral-800 border border-zinc-600 hover:bg-zinc-800 mt-3 rounded-lg p-3 flex flex-col justify-between">
            <h1 className="text-lightBrandGrey">Basic Aggregation Model</h1>
            <Button type="button" mode="green" onClick={() => {}}>
              <div className="flex flex-row gap-[10px] items-center ">
                <h1 className="text-zinc-600 font-semibold">
                  Add Local Weights
                </h1>
              </div>
            </Button>
          </div>
        </Link>
        <Link href="/train">
          <div className="bg-neutral-800 border border-zinc-600 hover:bg-zinc-800 mt-3 rounded-lg p-3 flex flex-col justify-between">
            <h1 className="text-lightBrandGrey">MNIST Logistic Regression</h1>
            <Button type="button" mode="green" onClick={() => {}}>
              <div className="flex flex-row gap-[10px] items-center ">
                <h1 className="text-zinc-600 font-semibold">
                  Add Local Weights
                </h1>
              </div>
            </Button>
          </div>
        </Link>
        <Link href="/train">
          <div className="bg-neutral-800 border border-zinc-600 hover:bg-zinc-800 mt-3 rounded-lg p-3 flex flex-col justify-between">
            <h1 className="text-lightBrandGrey">
              FedAverage Aggregation Model
            </h1>
            <Button type="button" mode="green" onClick={() => {}}>
              <div className="flex flex-row gap-[10px] items-center ">
                <h1 className="text-zinc-600 font-semibold">
                  Add Local Weights
                </h1>
              </div>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
