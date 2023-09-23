import {
	useCallback,
	useState,
	useRef,
	MutableRefObject,
	useEffect,
} from 'react'
import useOutsideClick from './useOutsideClick'

export const useModal = <ElementType>(
	initialShowModal?: boolean,
	closeOnClickOutsideRef?: MutableRefObject<ElementType>
) => {
	const refToRestoreFocus = useRef<HTMLElement | null>(null)
	const [showModal, setShowModal] = useState(initialShowModal || false)

	const onModalClose = useCallback(() => {
		setShowModal(false)
	}, [setShowModal])

	const onModalOpen = useCallback(() => {
		setShowModal(true)
	}, [setShowModal])

	const onModalToggle = useCallback(() => {
		setShowModal(!showModal)
	}, [setShowModal, showModal])

	useOutsideClick(closeOnClickOutsideRef, onModalClose)

	return {
		showModal,
		onModalClose,
		onModalOpen,
		onModalToggle,
		refToRestoreFocus,
	}
}
