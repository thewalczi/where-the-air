import { FC, useContext } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import { Installation } from "../../api"
import { PositionContext } from "../../context/PositionContext"
import "./Map.scss"

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
	const { usersPosition, installations } = useContext(PositionContext)

	return (
		<div className="map">
			<MapContainer
				key={JSON.stringify(usersPosition)}
				center={usersPosition}
				zoom={15}
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
		</div>
	)
}
