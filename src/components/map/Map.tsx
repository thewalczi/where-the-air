import { FC, useContext, useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import { getNearest, Installation } from "../../api"
import { PositionContext } from "../../context/PositionContext"

const Button = () => {
	const map = useMap()
	const { setCurrentPosition } = useContext(PositionContext)
	const handleClick = () => {
		setCurrentPosition({ lat: map.getCenter().lat, lng: map.getCenter().lng })
	}
	return (
		<button
			onClick={handleClick}
			style={{ position: "relative", zIndex: 1000 }}
		>
			Get Center
		</button>
	)
}

export const Map: FC = () => {
	const { usersPosition, currentPosition } = useContext(PositionContext)

	const [installations, setInstallations] = useState<Installation[]>()

	useEffect(() => {
		;(async () => {
			setInstallations(
				await getNearest(currentPosition.lat, currentPosition.lng)
			)
		})()
	}, [currentPosition])

	return (
		<>
			<MapContainer
				key={JSON.stringify(usersPosition)}
				center={usersPosition}
				zoom={15}
				style={{ height: "calc(100% - 68px)" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{installations?.map((installation: Installation) => (
					<Marker
						key={installation.id}
						position={[
							installation.location.latitude,
							installation.location.longitude
						]}
					>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				))}
				<Button />
			</MapContainer>
		</>
	)
}
