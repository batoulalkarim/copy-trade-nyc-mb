import React from "react";
import QRCode from "qrcode.react";
import { styled } from "styled-components";

export function EthereumAddressQR({
  walletAddress,
}: {
  walletAddress: string;
}) {
  if (!walletAddress) return <p>Please Login</p>;

  return (
    <div>
      <p>ETH Address:</p>
      <QRCode value={walletAddress} size={180} />
    </div>
  );
}

export default EthereumAddressQR;
