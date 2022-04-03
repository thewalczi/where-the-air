import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useEffect,
	useState
} from "react"
import { Coordinates, getNearest, Installation } from "../api"

interface ContextProps {
	usersPosition: Coordinates
	setUsersPosition: Dispatch<SetStateAction<Coordinates>>
	getUseresActualPosition(): void
	currentPosition: Coordinates
	setCurrentPosition: Dispatch<SetStateAction<Coordinates>>
	installations: Installation[]
}

export const PositionContext = createContext({} as ContextProps)

const { Provider } = PositionContext

interface Props {
	children: ReactNode
}

const defaultPosition: Coordinates = { lat: 52.229676, lng: 21.012229 }

const apiOptions = {
	installations: {
		nearest: {
			number: 5,
			distance: 3
		}
	}
}

export const PositionProvider = ({ children }: Props) => {
	const [usersPosition, setUsersPosition] =
		useState<Coordinates>(defaultPosition)
	const [currentPosition, setCurrentPosition] =
		useState<Coordinates>(usersPosition)
	const [installations, setInstallations] = useState<Installation[]>([])

	useEffect(() => {
		getUseresActualPosition()
	}, [])

	useEffect(() => {
		setCurrentPosition(usersPosition)
	}, [usersPosition])

	useEffect(() => {
		;(async () => {
			if (currentPosition) {
				setInstallations(
					await getNearest(
						currentPosition.lat,
						currentPosition.lng,
						apiOptions.installations.nearest.number,
						apiOptions.installations.nearest.distance
					)
				)
			}
		})()
	}, [currentPosition])

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

	return (
		<Provider
			value={{
				usersPosition,
				setUsersPosition,
				getUseresActualPosition,
				currentPosition,
				setCurrentPosition,
				installations
			}}
		>
			{children}
		</Provider>
	)
}
