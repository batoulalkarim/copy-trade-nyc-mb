import Modal from "react-modal";
import { styled } from "styled-components";
import { Close } from "styled-icons/ionicons-outline";
import { SwapBox } from "../SwapBox";
import QRCode from "qrcode.react";

export const DepositTokensModal = ({
  showModal,
  onModalClose,
}: {
  showModal: boolean;
  onModalClose: () => void;
}) => {
  return (
    <_Modal
      isOpen={showModal}
      onRequestClose={onModalClose}
      ariaHideApp={false}
    >
      <Header>
        <Title>Deposit tokens</Title>
        <CloseIcon onClick={onModalClose} size={32} />
      </Header>
      <Subtitle>Add the tokens you want to trade with</Subtitle>
      <QRCode walletAddress={walletAddress} />
      <HelperContainer>
        This address can only receive ETH and ERC20 tokens on Ethereum mainnet.
        Do not send tokens from other networks or it may result in a loss of
        funds.
      </HelperContainer>
    </_Modal>
  );
};

const _Modal = styled(Modal)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 440px;
  padding: 16px;
  width: 400px;
  position: relative;
  margin: 240px auto;
`;
const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 1.5;
`;

const Subtitle = styled.div`
  color: #6a6a6a;
  font-size: 16px;
  line-height: 1.5;
`;

const CloseIcon = styled(Close)`
  color: #6a6a6a;
  cursor: pointer;
  height: 24px;
  width: 24px;

  &:hover {
    opacity: 0.8;
  }
`;
const HelperContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #6a6a6a;
  padding: 16px;
  position: absolute;
  bottom: 16px;
  width: 368px;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;
