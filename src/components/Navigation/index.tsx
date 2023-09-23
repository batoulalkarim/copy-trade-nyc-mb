import { useRouter } from 'next/router'
import styled from 'styled-components'

export const Navigation = () => {
	const router = useRouter()

	return (
		<Container>
			<Logo src='/images/logo.png' />
		</Container>
	)
}

const Container = styled.div`
	background: rgb(63,94,251);
	background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,147,252,1) 100%);
	border-radius: 50%;
	cursor: pointer;
	bottom: 48px;
	right: 24px;
	display: flex;
	height: 64px;
	width: 64px;
	color: #fff;
	display: flex;
	align-items: center;
	font-size: 32px;
	justify-content: center;
	position: absolute;	
	transition-name: out;  /* animation to rotate on hover out*/
  transition-duration: 1s;  /* duration of animation */
	&:hover {
		opacity: 0.8;
		transition-name: in;  /* animation to rotate on hover */
		transition-duration: 1s;

		transform: rotate(45deg);
		transition-duration: 1s;
	}

	@keyframes in {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(45deg);
		}
	}
	@keyframes out {
		from {
			transform: rotate(45deg);
		}
		to {
			transform: rotate(0deg);
		}
`

const Item = styled.div`
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	padding: 8px 16px;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`

const Logo = styled.img`
	width: 32px;
`
