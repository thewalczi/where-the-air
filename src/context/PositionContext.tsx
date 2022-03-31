import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState
} from "react"
import { Coordinates } from "../api"

interface ContextProps {
	usersPosition: Coordinates
	setUsersPosition: Dispatch<SetStateAction<Coordinates>>
	getUseresActualPosition(): void
	currentPosition: Coordinates
	setCurrentPosition: Dispatch<SetStateAction<Coordinates>>
}

export const PositionContext = createContext({} as ContextProps)

const { Provider } = PositionContext

interface Props {
	children: ReactNode
}

const defaultPosition: Coordinates = { lat: 52.229676, lng: 21.012229 }

export const PositionProvider = ({ children }: Props) => {
	const [usersPosition, setUsersPosition] =
		useState<Coordinates>(defaultPosition)
	const [currentPosition, setCurrentPosition] =
		useState<Coordinates>(usersPosition)

	const getUseresActualPosition = async () => {
		const success = (pos: GeolocationPosition) => {
			const crd = pos.coords
			setUsersPosition({ lat: crd.latitude, lng: crd.longitude })
		}

		const error = (err: GeolocationPositionError) => {
			throw err
		}

		navigator.geolocation.getCurrentPosition(success, error)
	}

	useEffect(() => {
		setCurrentPosition(usersPosition)
	}, [usersPosition])

	return (
		<Provider
			value={{
				usersPosition,
				setUsersPosition,
				getUseresActualPosition,
				currentPosition,
				setCurrentPosition
			}}
		>
			{children}
		</Provider>
	)
}
