import { styled } from 'styled-components'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { shortenEthAddress } from '@/utils/shortenEthAddress'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Search as SearchIcon } from 'styled-icons/ionicons-outline'

export default function Top() {
	const [isConnected, setIsConnected] = useState(false)
	const router = useRouter()

	return (
		<Container>
			<Logo>COPYTRADE</Logo>
			{isConnected ||
				(router.pathname == '/dashboard' && (
					<>
						<SearchContainer>
							<StyledSearchIcon />
						</SearchContainer>
						<WalletContainer>
							<AddressContainer>
								<Jazzicon
									diameter={14}
									seed={jsNumberForAddress(
										'0xFC4E92024cCa374f89239e14c886ae0d0Ee41c05'
									)}
								/>
								<Address>
									{shortenEthAddress(
										'0xFC4E92024cCa374f89239e14c886ae0d0Ee41c05'
									)}
								</Address>
							</AddressContainer>
						</WalletContainer>
					</>
				))}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0px 0px 24px 0px;
	align-items: center;
	height: 48px;
	width: 100%;
`

const WalletContainer = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	text-align: right;

	&:hover {
		opacity: 0.8;
	}
`
const AddressContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`
const Address = styled.div`
	font-size: 14px;
`

const SearchContainer = styled.div`
	border: 1px solid #e5e5e5;
	cursor: pointer;
	display: flex;
	padding: 0px 8px;
	flex-direction: row;
	height: 32px;
	background-color: #f5f5f5;
	border-radius: 24px;
	width: 400px;

	&:hover {
		opacity: 0.8;
	}
`

const StyledSearchIcon = styled(SearchIcon)`
	color: #6a6a6a;
	width: 16px;
`

const Logo = styled.div`
	font-size: 14px;
`
