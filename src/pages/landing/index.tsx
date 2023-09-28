import { Button } from '@/components/Button'
import { styled } from 'styled-components'

export default function Landing() {
	return (
		<Container>
			<Title>Create and trade with confidence</Title>
			<Subtitle>Create, buy, sell, and explore tokens</Subtitle>
			<Button
				text='Get started'
				borderRadius='24px'
				backgroundColor='linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)'
				action={() => console.log('Getting started')}
			/>
			<Button
				backgroundColor='none'
				text='Learn more'
				color='#6a6a6a'
				action={() => console.log('Learning more')}
			/>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 100vh;
`

const Title = styled.div`
	font-size: 40px;
	line-height: 1.5;
	color: #fff;
	font-family: 'FTCalhernTrial-Regular';
	width: 400px;
`

const Subtitle = styled.div`
	color: #6a6a6a;
	line-height: 1.5;
	font-size: 24px;
`
