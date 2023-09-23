import { SyntheticEvent } from 'react'
import { styled } from 'styled-components'

export function Button({
	action,
	text,
	backgroundColor,
	borderRadius,
	color,
	fontSize,
	fontWeight,
	height,
	margin,
	padding,
	width,
}: {
	action: (() => void) | ((e: SyntheticEvent) => void)
	text: string
	backgroundColor?: string
	borderRadius?: string
	color?: string
	fontSize?: string
	fontWeight?: string
	height?: string
	margin?: string
	padding?: string
	width?: string
}) {
	return (
		<Container
			onClick={action}
			backgroundColor={backgroundColor}
			borderRadius={borderRadius}
			height={height}
			margin={margin}
			padding={padding}
			width={width}
		>
			<Text color={color} fontSize={fontSize} fontWeight={fontWeight}>
				{text}
			</Text>
		</Container>
	)
}

const Container = styled.div<{
	backgroundColor?: string
	borderRadius?: string
	height?: string
	margin?: string
	padding?: string
	width?: string
}>`
	align-items: center;
	background: ${(props) => props.backgroundColor || 'rgb(63,94,251);'};
	border-radius: ${(props) => props.borderRadius || '8px'};
	cursor: pointer;
	display: flex;
	height: ${(props) => props.height || '48px'};
	justify-content: center;
	margin: ${(props) => props.margin || '24px 0px'};
	min-width: ${(props) => props.width || '400px'};
	padding: ${(props) => props.padding || '8px 16px'};

	&:hover {
		opacity: 0.8;
	}
`

const Text = styled.div<{
	color?: string
	fontSize?: string
	fontWeight?: string
}>`
	font-size: ${(props) => props.fontSize || '24px'};
	font-weight: ${(props) => props.fontWeight || 'bold'};
	color: ${(props) => props.color || '#fff'};
`
