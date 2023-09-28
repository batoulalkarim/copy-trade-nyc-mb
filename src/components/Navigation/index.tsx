import { styled } from 'styled-components'

// Components
import { NetworkSelector } from './NetworkSelector'
import { Wallet } from './Wallet'
import { useRouter } from 'next/router'

export function Navigation({ toggleSidebar }: { toggleSidebar: () => void }) {
	const router = useRouter()

	return (
		<Container>
			<Left>
				<Logo src='images/logo.png' />
				<MenuItem
					onClick={() => router.push('/create')}
					selected={router.pathname === '/create'}
				>
					Create
				</MenuItem>
				<MenuItem>Trade</MenuItem>
				<MenuItem>…</MenuItem>
			</Left>
			<Right>
				<NetworkSelector />
				<Wallet toggleSidebar={toggleSidebar} />
			</Right>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 24px 24px 0px 24px;
	align-items: center;
	height: 48px;
	width: 100%;
`

const Left = styled.div`
	display: flex;
	flex-direction: row;
	color: #fff;
	align-items: center;

	gap: 8px;
	> div {
		margin-left: 36px;
	}
`
const Right = styled.div`
	display: flex;
	flex-direction: row;
	color: #fff;
	align-items: center;
	gap: 32px;
`

const MenuItem = styled.div<{ selected?: boolean }>`
	color: ${(props) => (props.selected ? '#ffffff' : '#6a6a6a')};
	cursor: pointer;
	display: flex;
	font-size: 18px;
	line-height: 1.5;
	width: 48px;
	&:hover {
		color: #fff;
	}
`

const Logo = styled.img`
	cursor: pointer;
	width: 24px;
`
