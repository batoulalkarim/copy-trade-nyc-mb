import { Button } from '../Button'

import { styled } from 'styled-components'
import { EthereumAddressQR } from '../EthereumAddressQR'

export const Deployed = ({ onClick }: { onClick: () => void }) => {
	return (
		<Container>
			<Title>Raise funds</Title>
			<Subtitle>Share this address to your funders</Subtitle>
			<QrCodeContainer>
				<EthereumAddressQR
					walletAddress={'0xf4fcf13072eaf2d7c68690d3812bdc847106566d'}
				/>
			</QrCodeContainer>
			<Button
				text='Launch'
				borderRadius='24px'
				backgroundColor='linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)'
				action={onClick}
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
	background-color: #000000;
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

const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 24px 0;
`
const Input = styled.input`
	height: 48px;
	background-color: #1c1c1c;
	padding: 0 16px;
	border-radius: 8px;
	border: none;
	margin: 8px 0;
	width: 400px;
	font-size: 18px;
`
const QrCodeContainer = styled.div`
	margin: 24px 0;
`
