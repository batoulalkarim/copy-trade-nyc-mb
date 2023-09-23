import { styled } from 'styled-components'
import { Button } from '../Button'
import { useModal } from '@/hooks/useModal'
import { DepositTokensModal } from '../DepositTokensModal'

export function Deposit({
	handleNext,
	handleBack,
}: {
	handleNext: () => void
	handleBack: () => void
}) {
	const { showModal, onModalClose, onModalOpen } = useModal()
	return (
		<Container>
			<DepositTokensModal
				showModal={showModal}
				onModalClose={onModalClose}
			/>
			<Title>Add tokens your wallet on COPYTRADE</Title>
			<Subtitle>{`Funds used to facilitate trades will occur on Ethereum mainnet.`}</Subtitle>

			<ActionContainer>
				<ActionText>Deposit on mainnet</ActionText>
				<ActionSubtext>
					Select and input the amount of ETH and other ERC20s that you
					want to trade.
				</ActionSubtext>
				<ActionButton onClick={onModalOpen}>Deposit</ActionButton>
			</ActionContainer>

			<ButtonContainer>
				<Button action={handleNext} text='Proceed' />
				<Button
					action={handleBack}
					text={'Back'}
					margin={'0 auto'}
					color={'#666'}
					backgroundColor={'#fff'}
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
	background-color: #f3f3f3;
	min-width: 400px;
	border-radius: 8px;
	text-align: left;
	padding: 24px 16px;
`
const ActionText = styled.div`
	font-size: 24px;
	line-height: 1.5;
`
const ActionSubtext = styled.div`
	font-size: 16px;
	color: #6a6a6a;
	line-height: 1.5;
`
const ActionButton = styled.div`
	color: rgb(63, 94, 251);
	cursor: pointer;
	font-weight: 600;
	text-align: right;

	&:hover {
		opacity: 0.8;
	}
`
