import React from 'react'
import QRCode from 'qrcode.react'

export function EthereumAddressQR({
	walletAddress,
}: {
	walletAddress: string
}) {
	return <QRCode value={walletAddress} size={192} />
}

export default EthereumAddressQR
