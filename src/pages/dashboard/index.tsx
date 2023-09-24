import { styled } from "styled-components";
import { PrivyNotice } from "@/components/OnboardingSteps/PrivyNotice";
import { Deposit } from "@/components/OnboardingSteps/Deposit";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";

type OnboardingSteps =
  | "CONNECT"
  | "PRIVY_NOTICE"
  | "DEPOSIT"
  | "ADD_TO_WATCH_LIST";

export default function Dashboard() {
  const router = useRouter();
  const [step, setStep] = useState<OnboardingSteps>("PRIVY_NOTICE");
  const [showPrivyNotice, setShowPrivyNotice] = useState(false);
  const [showDepositNotice, setShowDepositNotice] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const { user } = usePrivy();

  //   console.log("user is:", user);
  useEffect(() => {
    // Check if user is new (created within the last hour)
    if (user && user.createdAt) {
      const createdAtTime = new Date(user.createdAt).getTime();
      const currentTime = new Date().getTime();
      const oneHourInMillis = 3600000; // 1 hour in milliseconds

      if (currentTime - createdAtTime < oneHourInMillis) {
        // User is new, show PrivyNotice and Deposit
        setShowPrivyNotice(true);
        setStep("PRIVY_NOTICE");
      } else {
        //change this to 0.1 before demo
        if (walletBalance < 0) {
          setShowDepositNotice(true);
        } else {
          setShowDepositNotice(false);
        }
      }
    }
  }, [user]);

  useEffect(() => {
    if (user && user.wallet) {
      getBalance(user.wallet.address);
    }
  }, [user]);

  async function getBalance(walletAddress: string) {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        Accept: "application/json",
      },
      body: JSON.stringify({ walletAddress }),
    };
    const res = await fetch("/api/wallet/getBalance", settings);
    const data = await res.json();
    setWalletBalance(data.balance);
  }

  const handleStep = (step: OnboardingSteps) => {
    setStep(step);
  };
  return (
    <Container>
      {/* <Title>Dashboard</Title> */}
      {(step === "PRIVY_NOTICE" || showPrivyNotice) && (
        <PrivyNotice handleNext={() => handleStep("DEPOSIT")} />
      )}
      {(step === "DEPOSIT" || showDepositNotice) && (
        <Deposit handleNext={() => router.push("/launch")} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 1.5;
  color: whitesmoke;
`;

const Subtitle = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: whitesmoke;
`;
