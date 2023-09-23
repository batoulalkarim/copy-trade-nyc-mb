import { styled } from 'styled-components'
import { Button } from '../Button'
import { useModal } from '@/hooks/useModal'
import { SyntheticEvent, useRef } from 'react'
import { TradeTokenModal } from '../TradeTokenModal'

export function BuyToken() {
	const menuRef = useRef()

	const { showModal, onModalToggle } = useModal(false, menuRef)
	const onClick = (e: SyntheticEvent) => {
		e.stopPropagation()
		onModalToggle()
	}
	return (
		<Container>
			<TradeTokenModal
				showModal={showModal}
				onModalClose={onModalToggle}
			/>

			<h1>Buy your first token</h1>
			<p>{`Everyone on friend.tech is represented by shares. They can be bought and sold on a person's profile and their price goes up and down based on how many are currently circulating.`}</p>
			<br />
			<p>{`You'll earn trading fees every time your shares are bought and sold by anyone.`}</p>
			<br />
			<p>{`To create your profile, buy the first share of yourself free.`}</p>
			<Button action={onClick} text='Buy your first token for $0' />
		</Container>
	)
}
const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 24px auto;
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 400px;
`
