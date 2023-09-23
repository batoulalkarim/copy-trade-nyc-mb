import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ArrowDown } from "styled-icons/ionicons-outline";
import { Button } from "../Button";

type SwapOptions = "BUY" | "SELL";

const initialSwapData = {
  mode: "BUY" as SwapOptions,
  input: {
    amount: 0,
    tokenImage: "https://token-icons.s3.amazonaws.com/eth.png",
    tokenSymbol: "ETH",
    tokenBalance: "1",
  },
  output: {
    amount: 0,
    tokenImage:
      "https://pbs.twimg.com/profile_images/1686541711483289600/D_5NA8eM_400x400.jpg",
    tokenSymbol: "BITCOIN",
    tokenBalance: "100,000",
  },
};

export const SwapBox = () => {
  const [swapDetails, setSwapDetails] = useState(initialSwapData);

  const handleChange = (e: any) => {
    e.preventDefault();
    let tmp = swapDetails;
    setSwapDetails({
      mode: tmp.mode === "BUY" ? "SELL" : "BUY",
      input: {
        amount: 0,
        tokenImage: tmp.output.tokenImage,
        tokenSymbol: tmp.output.tokenSymbol,
        tokenBalance: tmp.output.tokenBalance,
      },
      output: {
        amount: 0,
        tokenImage: tmp.input.tokenImage,
        tokenSymbol: tmp.input.tokenSymbol,
        tokenBalance: tmp.input.tokenBalance,
      },
    });
  };

  return (
    <Container>
      <InputContainer>
        <InputLabel>You pay</InputLabel>
        <ValueContainer>
          <StyledInput placeholder={"0"} type="text" />
          <TokenSelector>
            <TokenImage src={swapDetails.input.tokenImage} />
            <TokenName>{swapDetails.input.tokenSymbol}</TokenName>
          </TokenSelector>
        </ValueContainer>
        <BalanceContainer>
          <BalanceText>
            Balance: {parseInt(swapDetails.input.tokenBalance).toFixed(2)}{" "}
            {swapDetails.input.tokenSymbol}
          </BalanceText>
          <MaxText>MAX</MaxText>
        </BalanceContainer>
      </InputContainer>
      <SwapButtonContainer onClick={handleChange}>
        <SwapButton />
      </SwapButtonContainer>
      <InputContainer>
        <InputLabel>You receive</InputLabel>
        <ValueContainer>
          <StyledInput placeholder="0" type="text" />
          <TokenSelector>
            <TokenImage src={swapDetails.output.tokenImage} />
            <TokenName>{swapDetails.output.tokenSymbol}</TokenName>
          </TokenSelector>
        </ValueContainer>
        <BalanceContainer>
          <BalanceText>
            Balance: {swapDetails.output.tokenBalance}{" "}
            {swapDetails.output.tokenSymbol}
          </BalanceText>
        </BalanceContainer>
      </InputContainer>
      <ButtonContainer>
        {swapDetails.mode === "BUY" && (
          <Button
            action={() => "Ok"}
            text={"Swap"}
            margin={"0 auto"}
            width="368px"
          />
        )}
        {swapDetails.mode === "SELL" && (
          <Button
            action={() => "Ok"}
            text={"Swap"}
            backgroundColor="pink"
            margin={"0 auto"}
            width="368px"
          />
        )}
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;
`;

const InputContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 0px 16px 16px;
  margin: 8px 0px 12px 0px;
`;
const InputLabel = styled.div`
  font-size: 12px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  border: none;
  background-color: #f5f5f5;
  max-width: 200px;
  font-size: 32px;
`;

const TokenSelector = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  margin: 8px 16px 8px 0px;
`;

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 8px;
  padding: 0 16px;
`;

const BalanceText = styled.div`
  font-size: 12px;
  color: #666;
`;
const MaxText = styled.div`
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  margin: -1px 0 0 0;
`;
const TokenName = styled.div`
  padding: 0 8px;
`;
const TokenImage = styled.img`
  border-radius: 50%;
  height: 24px;
`;
const SwapButtonContainer = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  background: #f5f5f5;
  color: #fff;
  border-radius: 8px;
  border: 3px solid #fff;
  align-self: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: -24px 0px;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const SwapButton = styled(ArrowDown)`
  color: #fff;
  height: 24px;
  width: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px auto;
`;
