import React, { FC } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

interface MapProps {
	coordinates: [number, number]
}

export const Map: FC<MapProps> = ({ coordinates }: MapProps) => {
	return (
		<MapContainer
			key={JSON.stringify(coordinates)}
			center={coordinates}
			zoom={15}
			style={{ height: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	)
}
