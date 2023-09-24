import { styled } from 'styled-components'
import { Button } from '../Button'
import { useModal } from '@/hooks/useModal'
import { DepositTokensModal } from '../DepositTokensModal'

export function Deposit({ handleNext }: { handleNext: () => void }) {
	const { showModal, onModalClose, onModalOpen } = useModal()
	return (
		<Container>
			<DepositTokensModal
				showModal={showModal}
				onModalClose={onModalClose}
			/>
			<Title>To launch a token, fund your wallet with ETH</Title>
			<Subtitle>{`Funds used to facilitate trades will occur on Ethereum mainnet.`}</Subtitle>

			<ActionContainer>
				<ActionText>Deposit on mainnet</ActionText>
				<ActionSubtext>
					Add some ETH so that you can deploy your token. The ETH will
					be used to deploy the Uniswap V4 Hook.
				</ActionSubtext>
				<ActionButton onClick={onModalOpen}>Deposit</ActionButton>
			</ActionContainer>

			<ButtonContainer>
				<Button
					action={handleNext}
					text='Proceed'
					borderRadius='25px'
					backgroundColor='rgb(255, 0, 199) 2.66%'
				/>
			</ButtonContainer>
		</Container>
	)
}

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	color: #6a6a6a;
	font-size: 16px;
	line-height: 1.5;
`

const ButtonContainer = styled.div`
	margin: 24px 0 0 0;
`

const ActionContainer = styled.div`
	margin: 24px 0 0 0;
	background-color: #1b1b1b;
	min-width: 400px;
	border-radius: 8px;
	text-align: left;
	padding: 24px 16px;
`
const ActionText = styled.div`
	font-size: 24px;
	color: white;
	line-height: 1.5;
`
const ActionSubtext = styled.div`
	font-size: 16px;
	color: #dadada;
	line-height: 1.5;
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
