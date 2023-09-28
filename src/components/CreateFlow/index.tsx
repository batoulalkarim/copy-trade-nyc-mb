import { useState } from 'react'
import { Start } from '@/components/CreateFlow/Start'
import { Deployed } from './Deployed'
import { Launch } from './Launch'

type Step = 'START' | 'DEPLOYED' | 'FUNDED'
export const CreateFlow = () => {
	const [step, setStep] = useState<Step>('START')

	const handleStep = (s: Step) => {
		setStep(s)
	}

	return (
		<div>
			{step == 'START' && (
				<Start onClick={() => handleStep('DEPLOYED')} />
			)}
			{step == 'DEPLOYED' && (
				<Deployed onClick={() => handleStep('FUNDED')} />
			)}
			{step == 'FUNDED' && (
				<Launch onClick={() => console.log('FUNDED')} />
			)}
		</div>
	)
}
