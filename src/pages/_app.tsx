// Global styles (must go below ReactToastify.css since we are overriding some styles)
import '@/styles/globals.scss'

import { Navigation } from '@/components/Navigation'
import type { AppProps } from 'next/app'
import { styled } from 'styled-components'
import Top from '@/components/Top'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	const bottomNavigation = () => {
		if (router.pathname == '/dashboard') return <Navigation />
		return <></>
	}
	return (
		<>
			<Container>
				<Top />
				<Component {...pageProps} />
			</Container>

			{bottomNavigation()}
		</>
	)
}

const Container = styled.div`
	align-items: center;
	padding: 24px 24px 0px 24px;
	display: flex;
	flex-direction: column;
`
