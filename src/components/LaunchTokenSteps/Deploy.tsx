import { Button } from "../Button";
import { styled } from "styled-components";

export function Deploy({
  handleNext,
  handleBack,
}: {
  handleNext: () => void;
  handleBack: () => void;
}) {
  return (
    <Container>
      <Title>Deploy</Title>
      <TextBox>
        <p>
          This is the part where you take your incredible project, and deploy
          it! Deployment is smooth and easy, you will utilize my boyfriends
          sharp and optimized smart contracts.
        </p>
      </TextBox>
      <Button
        action={handleNext}
        text="Proceed"
        backgroundColor="rgb(255, 0, 199) 2.66%"
        borderRadius="25px"
      />
      <Button
        action={handleBack}
        text={"Back"}
        margin={"0 auto"}
        borderRadius="25px"
        backgroundColor="rgb(255, 159, 251) 98.99%"
      />
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
  font-size: 20px;
  line-height: 1.5;
  color: #666;
`;

const TextBox = styled.div`
  width: 500px;
  padding: 50px 0;
  text-align: center;
`;
