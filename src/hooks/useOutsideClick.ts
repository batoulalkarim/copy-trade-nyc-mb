import { useEffect, MutableRefObject } from 'react'

type RefType = MutableRefObject<any> | HTMLElement | null
export const useOutsideClick = (
	refOrArray: RefType | RefType[] | undefined,
	callback: (event: Event) => void
) => {
	useEffect(
		() => {
			const listener = (event: Event) => {
				if (!refOrArray) return
				// Do nothing if clicking ref's element or descendent elements

				const refs = Array.isArray(refOrArray)
					? refOrArray
					: [refOrArray]

				const clickIsOutside = refs.every((ref) => {
					if (ref) {
						if ('current' in ref) {
							if (
								!ref?.current ||
								ref?.current.contains(event.target)
							) {
								return false
							}
						} else {
							// @ts-expect-error:  Type 'EventTarget' is missing the following properties from type 'Node': baseURI, childNodes, firstChild, isConnected, and 43 more.ts(2345)
							if (!ref || ref.contains(event.target)) {
								return false
							}
						}
						return true
					}
				})

				if (clickIsOutside) {
					callback(event)
				}
			}
			document.addEventListener('mousedown', listener)
			document.addEventListener('touchstart', listener)
			return () => {
				document.removeEventListener('mousedown', listener)
				document.removeEventListener('touchstart', listener)
			}
		},
		// Add ref and callback to effect dependencies
		// It's worth noting that because passed in callback is a new ...
		// ... function on every render that will cause this effect ...
		// ... callback/cleanup to run every render. It's not a big deal ...
		// ... but to optimize you can wrap callback in useCallback before ...
		// ... passing it into this hook.
		[refOrArray, callback]
	)
}

export default useOutsideClick
