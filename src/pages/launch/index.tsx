//Launch page
import { styled } from "styled-components";
import { LaunchTokenSteps } from "@/components/LaunchTokenSteps";
type LaunchTokenSteps = "FUND" | "DEPLOY" | "SWAP";

export default function Launch() {
  return (
    <Container>
      <Title>Launch your Token</Title>
      {/* <Subtitle>Launch a Token here</Subtitle> */}
      <LaunchTokenSteps />
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
  color: #666;
`;
