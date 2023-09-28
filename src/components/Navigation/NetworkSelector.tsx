import { styled } from 'styled-components'
import { ChevronDown } from 'styled-icons/ionicons-sharp'

export const NetworkSelector = () => {
	return (
		<Container>
			<EthereumIcon src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png' />
			<StyledChevronDown size={24} />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	gap: 8px;
`

const EthereumIcon = styled.img`
	width: 24px;
`

const StyledChevronDown = styled(ChevronDown)`
	&:hover {
		color: #fff;
	}
`
