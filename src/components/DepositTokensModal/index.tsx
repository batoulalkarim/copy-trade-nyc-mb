import Modal from "react-modal";
import { styled } from "styled-components";
import { Close } from "styled-icons/ionicons-outline";
import { ComponentType } from "react";
import { EthereumAddressQR } from "../EthereumAddressQR";
import { usePrivy } from "@privy-io/react-auth";

const ModalSafeForReact18 = Modal as ComponentType<ReactModal["props"]>;

export const DepositTokensModal = ({
  showModal,
  onModalClose,
}: {
  showModal: boolean;
  onModalClose: () => void;
}) => {
  const { user } = usePrivy();
  return (
    <ModalSafeForReact18
      isOpen={showModal}
      onRequestClose={onModalClose}
      ariaHideApp={false}
      style={{
        content: {
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          height: "440px",
          padding: "16px",
          width: "400px",
          margin: "200px auto",
        },
      }}
    >
      <Header>
        <Title>Deposit tokens</Title>
        <CloseIcon onClick={onModalClose} size={32} />
      </Header>
      <Subtitle>Add the tokens you want to trade with</Subtitle>
      {user && user.wallet && user.wallet.address && (
        <QrCodeContainer>
          <EthereumAddressQR walletAddress={user.wallet.address} />
        </QrCodeContainer>
      )}

      <HelperContainer>
        This address can only receive ETH and ERC20 tokens on Ethereum mainnet.
        Do not send tokens from other networks or it may result in a loss of
        funds.
      </HelperContainer>
    </ModalSafeForReact18>
  );
};

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

const QrCodeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 90px;
  margin-top: 10px;
`;
