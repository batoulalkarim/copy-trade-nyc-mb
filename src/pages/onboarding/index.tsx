import { styled } from "styled-components";
import { OnboardingSteps } from "@/components/OnboardingSteps";

export default function Onboarding() {
  return (
    <Container>
      <OnboardingSteps />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
`;
