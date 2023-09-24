import { styled } from 'styled-components'
import { Button } from '../Button'

export function PrivyNotice({ handleNext }: { handleNext: () => void }) {
	return (
		<Container>
			<Title>FAIRTRADE Wallets</Title>
			<Subtitle>{`On FAIRTRADE, we spin up a wallet for you with Privy. All your funds and swaps will be using this wallet.`}</Subtitle>

			<ButtonContainer>
				<Button
					action={handleNext}
					text='Proceed'
					borderRadius='25px'
					backgroundColor='rgb(255, 0, 199) 2.66%'
					width='250px'
				/>
			</ButtonContainer>
		</Container>
	)
}

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 24px auto;
	max-width: 400px;
	text-align: center;
	gap: 8px;
`

const Title = styled.div`
	font-size: 24px;
	line-height: 1.5;
	color: whitesmoke;
`

const Subtitle = styled.div`
	color: whitesmoke;
	font-size: 16px;
	line-height: 1.5;
`

const ButtonContainer = styled.div`
	margin: 24px 0 0 0;
`

const ActionContainer = styled.div`
	margin: 24px 0 0 0;
	background-color: #f3f3f3;
	min-width: 400px;
	border-radius: 8px;
	text-align: left;
	padding: 24px 16px;
`
const ActionText = styled.div`
	font-size: 24px;
	line-height: 1.5;
	color: whitesmoke;
`
const ActionSubtext = styled.div`
	font-size: 16px;
	color: #6a6a6a;
	line-height: 1.5;
	color: whitesmoke;
`
const ActionButton = styled.div`
	color: rgb(255, 0, 199);
	cursor: pointer;
	font-weight: 600;
	text-align: right;

	&:hover {
		opacity: 0.8;
	}
`
