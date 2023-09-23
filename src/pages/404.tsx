import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export function Custom404() {
	const router = useRouter()

	return (
		<Container>
			<Text>Something went wrong</Text>
			<Button
				action={() => router.push('/dashboard')}
				text='Go back home'
			/>
		</Container>
	)
}

const Container = styled.div`
	height: 100vh;
	align-items: center;
	display: flex;
	flex-direction: column;
	width: 100%;
`

const Text = styled.div`
	color: #6a6a6a;
	margin-bottom: 32px;
	font-size: 24px;
`

export default Custom404
