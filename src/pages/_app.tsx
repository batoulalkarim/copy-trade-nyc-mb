// Global styles (must go below ReactToastify.css since we are overriding some styles)
import '@/styles/globals.scss'

import type { AppProps } from 'next/app'
import { styled } from 'styled-components'
import { Navigation } from '@/components/Navigation'
import { useRouter } from 'next/router'
import { PrivyProvider } from '@privy-io/react-auth'
import { Sidebar } from '@/components/Sidebar'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	return (
		<PrivyProvider
			appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
			onSuccess={() => router.push('/dashboard')}
			config={{
				loginMethods: ['twitter', 'wallet', 'email'],
				embeddedWallets: {
					createOnLogin: 'all-users',
				},
				appearance: {
					theme: 'light',
					logo: '/images/logo.png',
				},
			}}
		>
			<Container>
				{sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
			</Container>
			<Navigation toggleSidebar={toggleSidebar} />
			<Component {...pageProps} />
		</PrivyProvider>
	)
}

const Container = styled.div`
	align-items: center;
	justify-content: center;
`
