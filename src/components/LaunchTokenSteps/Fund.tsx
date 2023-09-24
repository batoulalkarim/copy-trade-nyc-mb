import { useState } from "react";
import { Button } from "../Button";
import { styled } from "styled-components";

export function Fund({ handleNext }: { handleNext: () => void }) {
  const [state, setState] = useState({
    name: "MOG",
    symbol: "MOG",
    targetRaise: "10ETH",
    pricePerPerson: ".1ETH",
    minRaise: "1ETH",
  });

  function handleChange(e: any) {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <Title>Fund</Title>
      <form>
        <InputContainer>
          <label htmlFor="name">Name:</label>
          <StyledInput
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="symbol">Symbol:</label>
          <StyledInput
            type="text"
            id="symbol"
            name="symbol"
            value={state.symbol}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="targetRaise">Target Raise:</label>
          <StyledInput
            type="text"
            id="targetRaise"
            name="targetRaise"
            value={state.targetRaise}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="pricePerPerson">Price Per Person:</label>
          <StyledInput
            type="text"
            id="pricePerPerson"
            name="pricePerPerson"
            value={state.pricePerPerson}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="minRaise">Minimum Raise:</label>
          <StyledInput
            type="text"
            id="minRaise"
            name="minRaise"
            value={state.minRaise}
            onChange={handleChange}
          />
        </InputContainer>
      </form>
      <Button
        action={handleNext}
        text="Proceed"
        borderRadius="25px"
        backgroundColor="linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)"
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
const StyledInput = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 20px;
  transition: border 0.1s ease-in;

  &:hover {
    border: 2px solid lightpink;
  }
`;

const InputContainer = styled.div`
  width: 400px;
  display: flex;
  padding: 8px 0;
  justify-content: space-between;
`;
