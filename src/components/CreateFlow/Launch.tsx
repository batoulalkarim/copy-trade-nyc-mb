import { useState } from 'react'
import { Button } from '../Button'

import { styled } from 'styled-components'
import ConfettiExplosion from 'react-confetti-explosion'

export const Launch = ({ onClick }: { onClick: () => void }) => {
	const [clicked, setClicked] = useState(false)

	return (
		<Container>
			<Title>Launch</Title>
			<Subtitle>Target ETH is now raised. Launch your token</Subtitle>
			<ConfettiExplosion
				width={window.innerWidth}
				height={window.innerHeight}
				colors={[
					'rgb(255, 0, 199)',
					'rgb(255, 159, 251)',
					'rgba(255,255,255)',
				]}
				particleCount={clicked ? 100 : 0}
				duration={clicked ? 3000 : 0}
				particleSize={3}
			/>
			{clicked && (
				<div
					style={{
						color: '#ffffff',
					}}
				>
					<div>Your token is created on chain</div>
					<div>The tokens are distributed to funders</div>
					<div>Pool for your token is initialized</div>
					<div></div>
				</div>
			)}

			<Button
				text={clicked ? 'Continue' : 'Launch'}
				borderRadius='24px'
				backgroundColor='linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)'
				action={() => setClicked(!clicked)}
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
