import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState
} from "react"

interface ContextProps {
	coordinates: [number, number]
	setCoordinates: Dispatch<SetStateAction<[number, number]>>
	currentPosition(): void
}

export const PositionContext = createContext({} as ContextProps)

const { Provider } = PositionContext

interface Props {
	children: ReactNode
}

const defaultPosition: [number, number] = [52.229676, 21.012229]

export const PositionProvider = ({ children }: Props) => {
	const [coordinates, setCoordinates] =
		useState<[number, number]>(defaultPosition)

	const currentPosition = async () => {
		const success = (pos: GeolocationPosition) => {
			const crd = pos.coords
			setCoordinates([crd.latitude, crd.longitude])
		}

		const error = (err: GeolocationPositionError) => {
			throw err
		}

		navigator.geolocation.getCurrentPosition(success, error)
	}

	return (
		<Provider
			value={{
				coordinates,
				setCoordinates,
				currentPosition
			}}
		>
			{children}
		</Provider>
	)
}
