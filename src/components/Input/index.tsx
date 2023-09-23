import { styled } from 'styled-components'

export function Input({
	name,
	action,
	text,
	placeholder,
	disabled,
	margin,
}: {
	action: (e: any) => void
	name: string
	placeholder: string
	text: string
	margin?: string
	disabled?: boolean
}) {
	return (
		<Container
			autoComplete='off'
			name={name}
			value={text}
			onChange={action}
			placeholder={placeholder}
			disabled={disabled}
			margin={margin}
		/>
	)
}

const Container = styled.input<{ margin?: string }>`
	align-items: center;
	background: #f3f3f3;
	border-radius: 8px;
	border: none;
	cursor: pointer;
	display: flex;
	height: 54px;
	justify-content: center;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin: ${(props) => props.margin || '16px 0px'};
	min-width: 400px;
	padding: 8px 16px;
`
