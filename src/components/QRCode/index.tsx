import React from "react";
import QRCode from "qrcode.react";
import { styled } from "styled-components";

function EthereumAddressQR({ walletAddress }: { walletAddress: string }) {
  if (!walletAddress) return <p>Please Login</p>;

  return (
    <div>
      <p>ETH Address:</p>
      <Container>
        <QRCode value={walletAddress} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

export default EthereumAddressQR;
