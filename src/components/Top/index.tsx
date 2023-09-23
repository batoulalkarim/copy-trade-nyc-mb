import { styled } from 'styled-components'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { shortenEthAddress } from '@/utils/shortenEthAddress'
import { TriangleDown } from '@styled-icons/octicons'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Top() {
	const [isConnected, setIsConnected] = useState(false)
	const router = useRouter()

	return (
		<Container>
			<div>COPYTRADE</div>
			{isConnected ||
				(router.pathname == '/dashboard' && (
					<WalletContainer>
						<AddressContainer>
							<Jazzicon
								diameter={16}
								seed={jsNumberForAddress(
									'0x1092361f4eafdc6e4555ee761e87ef9c67b9e42f'
								)}
							/>
							<Address>
								{shortenEthAddress(
									'0x1092361f4eafdc6e4555ee761e87ef9c67b9e42f'
								)}
							</Address>
						</AddressContainer>
						<BalanceContainer>
							<UsdValue>$17.37 USD</UsdValue>
							<Stats>
								<TriangleIcon /> $0.14 (0.81%)
							</Stats>
						</BalanceContainer>
					</WalletContainer>
				))}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 0px 24px 0px;
	height: 48px;
	width: 100%;
`

const WalletContainer = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	text-align: right;
`
const AddressContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`
const Address = styled.div`
	font-weight: bold;
`
const BalanceContainer = styled.div`
	font-size: 12px;
`
const UsdValue = styled.div``
const Stats = styled.div``
const TriangleIcon = styled(TriangleDown)`
	width: 10px;
	color: #ff0000;
`
