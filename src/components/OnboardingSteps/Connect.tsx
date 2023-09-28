import { styled } from 'styled-components'
import { Button } from '../Button'
import { useRouter } from 'next/router'
import { usePrivy } from '@privy-io/react-auth'

export function Connect({ handleNext }: { handleNext: () => void }) {
	const { linkTwitter } = usePrivy()
	return (
		<Container>
			<Button
				action={linkTwitter}
				text='Login with X'
				borderRadius='25px'
				backgroundColor='linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)'
			/>
		</Container>
	)
}

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 24px auto;
	gap: 8px;
	position: relative;
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
