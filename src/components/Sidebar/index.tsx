import { styled } from 'styled-components'
import { Close } from 'styled-icons/ionicons-sharp'
import { Button } from '../Button'
import Jazzicon from 'react-jazzicon/dist/Jazzicon'
import { jsNumberForAddress } from 'react-jazzicon'
import { shortenEthAddress } from '@/utils/shortenEthAddress'
import { CaretDown, CaretUp } from 'styled-icons/ionicons-sharp'

export function Sidebar({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<Container>
			<Header>
				<WalletContainer>
					<Jazzicon
						diameter={24}
						seed={jsNumberForAddress(
							'0xf4fcf13072eaf2d7c68690d3812bdc847106566d'
						)}
					/>
					<div>
						{shortenEthAddress(
							'0xf4fcf13072eaf2d7c68690d3812bdc847106566d'
						)}
					</div>
				</WalletContainer>
				<CloseIcon onClick={toggleSidebar} />
			</Header>
			<Balance>$17.23</Balance>
			<BalanceUsd>
				<ArrowDownIcon /> $0.15 (0.86%)
			</BalanceUsd>
			<ButtonContainer>
				<Button
					action={() => console.log('Action!')}
					width={'320px'}
					height='40px'
					fontSize='18px'
					backgroundColor='rgb(255, 0, 199)'
					color={'white'}
					text='View your tokens'
				/>
				<Button
					action={() => console.log('Action!')}
					height='40px'
					width={'320px'}
					fontSize='18px'
					backgroundColor='rgb(255, 0, 199)'
					text='Deposit more crypto'
					color={'white'}
				/>
			</ButtonContainer>
			<Menu>
				<MenuItem selected>Tokens</MenuItem>
				<MenuItem>Activity</MenuItem>
			</Menu>
			<div>
				<TokenRow>
					<Left>
						<TokenImage src='https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Ethereum-ETH-icon.png' />
						<div>
							<div>Ether</div>
							<div>0.005 ETH</div>
						</div>
					</Left>
					<Right>
						<div>$8.66</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								gap: '8px',
								lineHeight: '1.5',
							}}
						>
							<ArrowUpIcon />{' '}
							<div style={{ color: '#6a6a6a' }}>0.21%</div>
						</div>
					</Right>
				</TokenRow>
			</div>
		</Container>
	)
}

const Container = styled.div`
  background-color: #000000;
  border-right: 1px solid #3a3a3a;
  height: 100vh;
  position: fixed;
  padding: 24px 16px;
  overflow-y scroll;
	color: #fff;
  width: 400px;
  z-index: 100;

`
const WalletContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`
const ButtonContainer = styled.div`
	margin-top: 48px;
`
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
	align-items: center;
`
const CloseIcon = styled(Close)`
	color: #fff;
	cursor: pointer;
	width: 20px;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`
const Balance = styled.div`
	font-size: 36px;
	line-height: 1.5;
`
const BalanceUsd = styled.div`
	font-size: 14px;
	line-height: 1.5;
	opacity: 0.8;
`
const Menu = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	margin-top: 48px;
`

const MenuItem = styled.div<{ selected?: boolean }>`
	color: ${(props) => (props.selected ? '#ffffff' : '#6a6a6a')};
`
const TokenRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: space-between;
	align-items: center;
	margin-top: 24px;
`
const Left = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	align-items: center;
`
const Right = styled.div`
	text-align: right;
`
const TokenImage = styled.img`
	width: 24px;
	height: 24px;
`
const ArrowDownIcon = styled(CaretDown)`
	width: 18px;
	color: #ff0800;
`
const ArrowUpIcon = styled(CaretUp)`
	width: 18px;
	color: #29ab87;
`
