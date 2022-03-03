import React, { useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { getData } from "./api"

import { LayoutPortal } from "./layout/LayoutPortal"

function App() {
	useEffect(() => {
		getData()
	}, [])

	return (
		<LayoutPortal>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
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
		</LayoutPortal>
	)
}
export default App
