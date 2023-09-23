//three steps here
import { useState } from "react";
import { Fund } from "./Fund";
import { Deploy } from "./Deploy";
import { Swap } from "./Swap";

type LaunchTokenSteps = "FUND" | "DEPLOY" | "SWAP";

export function LaunchTokenSteps() {
  const [step, setStep] = useState<LaunchTokenSteps>("FUND");

  const handleStep = (step: LaunchTokenSteps) => {
    setStep(step);
  };
  return (
    <div>
      {step === "FUND" && <Fund handleNext={() => handleStep("DEPLOY")} />}
      {step === "DEPLOY" && (
        <Deploy
          handleNext={() => handleStep("SWAP")}
          handleBack={() => handleStep("FUND")}
        />
      )}
      {step === "SWAP" && <Swap handleBack={() => handleStep("DEPLOY")} />}
    </div>
  );
}
