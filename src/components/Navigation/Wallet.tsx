import { shortenEthAddress } from '@/utils/shortenEthAddress'
import { jsNumberForAddress } from 'react-jazzicon'
import Jazzicon from 'react-jazzicon/dist/Jazzicon'
import { styled } from 'styled-components'

export const Wallet = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
	return (
		<Container onClick={toggleSidebar}>
			<Jazzicon
				diameter={24}
				seed={jsNumberForAddress(
					'0xf4fcf13072eaf2d7c68690d3812bdc847106566d'
				)}
			/>
			<AddressText>
				{shortenEthAddress(
					'0xf4fcf13072eaf2d7c68690d3812bdc847106566d'
				)}
			</AddressText>
		</Container>
	)
}

const Container = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 8px;
`

const AddressText = styled.div`
	font-size: 18px;
	line-height: 1.5;
	opacity: 0.8;

	&:hover {
		opacity: 1;
	}
`
