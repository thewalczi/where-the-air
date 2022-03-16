import React, { FC } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

interface MapProps {
	coordinates: [number, number]
}

const Button = () => {
	const map = useMap()
	const handleClick = () => {
		alert(map.getCenter())
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

export const Map: FC<MapProps> = ({ coordinates }: MapProps) => {
	return (
		<>
			<MapContainer
				key={JSON.stringify(coordinates)}
				center={coordinates}
				zoom={15}
				style={{ height: "calc(100% - 68px)" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* <Marker position={coordinates}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
				<Button />
			</MapContainer>
		</>
	)
}
