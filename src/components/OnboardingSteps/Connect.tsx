import { styled } from 'styled-components'
import { Button } from '../Button'

export function Connect({ handleNext }: { handleNext: () => void }) {
	return (
		<Container>
			<Title>COPYTRADE</Title>
			<Subtitle>{`Use X or your MetaMask to connect.`}</Subtitle>
			<Button action={handleNext} text='Login with X' />
		</Container>
	)
}

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 24px auto;
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
