import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;700&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Black.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Bold.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Book.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Heavy.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Light.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Medium.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Regular.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-SemiBold.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>

					<link
						rel='preload'
						href='/fonts/FTCalhernTrial-Thin.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
