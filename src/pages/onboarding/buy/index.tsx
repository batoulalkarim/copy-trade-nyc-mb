import { styled } from 'styled-components'
import { BuyToken } from '@/components/OnboardingSteps/BuyToken'

export default function OnboardingBuy() {
	return (
		<Container>
			<BuyToken />
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
