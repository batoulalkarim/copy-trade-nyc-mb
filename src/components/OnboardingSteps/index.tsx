import { useState } from "react";
import { useRouter } from "next/router";
import { Connect } from "./Connect";
import { PrivyNotice } from "./PrivyNotice";
import { Deposit } from "./Deposit";
import { AddToWatchList } from "./AddToWatchList";

type OnboardingSteps =
  | "CONNECT"
  | "PRIVY_NOTICE"
  | "DEPOSIT"
  | "ADD_TO_WATCH_LIST";

export function OnboardingSteps() {
  const router = useRouter();
  const [step, setStep] = useState<OnboardingSteps>("CONNECT");

  const handleStep = (step: OnboardingSteps) => {
    setStep(step);
  };

  return (
    <div>
      {step === "CONNECT" && (
        <Connect handleNext={() => handleStep("PRIVY_NOTICE")} />
      )}
      {step === "PRIVY_NOTICE" && (
        <PrivyNotice handleNext={() => handleStep("DEPOSIT")} />
      )}
      {step === "DEPOSIT" && (
        <Deposit handleNext={() => handleStep("ADD_TO_WATCH_LIST")} />
      )}
      {step === "ADD_TO_WATCH_LIST" && (
        <AddToWatchList handleSkip={() => router.push("/dashboard")} />
      )}
    </div>
  );
}
