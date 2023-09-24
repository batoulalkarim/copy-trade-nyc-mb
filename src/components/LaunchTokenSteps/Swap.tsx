import { styled } from 'styled-components'
import { SwapBox } from '../SwapBox'

export function Swap({ handleBack }: { handleBack: () => void }) {
	return (
		<div>
			<Title>Swap</Title>
			<SwapBox />
		</div>
	)
}

const Title = styled.div`
	font-size: 24px;
	line-height: 1.5;
	color: whitesmoke;
`
