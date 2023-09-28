import { Button } from '../Button'

import { styled } from 'styled-components'

export const Start = ({ onClick }: { onClick: () => void }) => {
	return (
		<Container>
			<Title>Create a token</Title>
			<Subtitle>
				Deploy a Uniswap V4 Hook to start collecting funds
			</Subtitle>
			<Form>
				<Input placeholder='Token name' />
				<Input placeholder='Token symbol' />
				<Input type='select' placeholder='Token amount' />
			</Form>
			<RaiseContainer
				style={{ color: 'white', textAlign: 'left', width: '400px' }}
			>
				<RaiseSummary>
					<div>
						<div
							style={{
								lineHeight: 1.5,
								fontFamily: 'FTCalhernTrial-Regular',
								alignContent: 'center',
								justifyContent: 'center',
							}}
						>
							1 ETH target
						</div>
						<div
							style={{
								color: '#6a6a6a',
								lineHeight: 1,
								width: '240px',
								marginTop: '8px',
							}}
						>
							Most common
						</div>
					</div>
					<div>
						<div
							style={{
								color: '#6a6a6a',
								backgroundColor: '#1c1c1c',
								padding: '4px 8px',
								borderRadius: '8px',
								cursor: 'pointer',
							}}
						>
							Hide
						</div>
					</div>
				</RaiseSummary>
				<RaiseSummary>
					<div>
						<div
							style={{
								lineHeight: 1.5,
								fontFamily: 'FTCalhernTrial-Regular',
								alignContent: 'center',
								justifyContent: 'center',
							}}
						>
							Minimum 0.25 ETH raise
						</div>
						<div
							style={{
								color: '#6a6a6a',
								lineHeight: 1,
								width: '240px',
								marginTop: '8px',
							}}
						>
							After this target is raised, the token can be
							launched
						</div>
					</div>
					<div>
						<div
							style={{
								color: '#6a6a6a',
								backgroundColor: '#1c1c1c',
								padding: '4px 8px',
								borderRadius: '8px',
								cursor: 'pointer',
							}}
						>
							Hide
						</div>
					</div>
				</RaiseSummary>
			</RaiseContainer>
			<Button
				text='Deploy'
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
const RaiseContainer = styled.div``
const RaiseSummary = styled.div`
	border: 1px solid #1a1a1a;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	height: 120px;
	justify-content: space-between;
	margin-bottom: 16px;
	padding: 24px 16px 8px 16px;

	&:hover {
		border: 1px solid #6a6a6a;
	}
`
const RaiseOptionContainer = styled.div`
	width: 400px;
	justify-content: space-between;
`
const RaiseOptions = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`
const RaiseOption = styled.div<{ selected?: boolean }>`
	cursor: pointer;
	padding: 8px 8px;
	border: 1px solid #1a1a1a;
	border-radius: 8px;
	height: 120px;
	width: 100%;
`
