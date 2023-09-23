import { styled } from 'styled-components'
import { Button } from '../Button'
import { SyntheticEvent, useRef } from 'react'

export function AddToWatchList({ handleSkip }: { handleSkip: () => void }) {
	const onClick = (e: SyntheticEvent) => {
		console.log('Copytrade!')
	}
	return (
		<Container>
			<Title>Add a trader you want to copy</Title>
			<Subtitle>
				COPYTRADE allows you to monitor wallets and trade with or
				against them.
			</Subtitle>
			<Subtitle>Start by adding a wallet you want to COPYTRADE.</Subtitle>
			<Button action={onClick} text='Add to watch list' />
			<Button
				action={handleSkip}
				text={'Skip for now'}
				margin={'0 auto'}
				color={'#666'}
				backgroundColor={'#fff'}
			/>
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
`
