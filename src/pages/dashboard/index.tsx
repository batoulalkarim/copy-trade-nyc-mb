import { styled } from 'styled-components'

export default function Dashboard() {
	return (
		<Container>
			<Title>Dashboard</Title>
			<Subtitle>Track all your COPYTRADE positions here</Subtitle>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Title = styled.div`
	font-size: 24px;
	line-height: 1.5;
`

const Subtitle = styled.div`
	font-size: 16px;
	line-height: 1.5;
	color: #666;
`
