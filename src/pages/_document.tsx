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
						href='/fonts/SctoGroteskA/SctoGroteskA-Bold.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/fonts/SctoGroteskA/SctoGroteskA-Medium.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/fonts/SctoGroteskA/SctoGroteskA-Regular.otf'
						as='font'
						type='font/otf'
						crossOrigin=''
					/>
					<link
						rel='preload'
						href='/fonts/VCROSDMono/VcrOsdMono-Regular.otf'
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
