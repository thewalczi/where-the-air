import React, { FC, useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { getData } from "../../api"

const defaultPosition: [number, number] = [52.229676, 21.012229]

export const Map: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [coordinates, setCoordinates] = useState<[number, number] | undefined>()

	useEffect(() => {
		setIsLoading(true)
		try {
			currentPosition()
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		console.log(coordinates)
	}, [coordinates])

	const currentPosition = () => {
		const success = (pos: GeolocationPosition) => {
			const crd = pos.coords
			setCoordinates([crd.latitude, crd.longitude])
		}

		const error = (err: GeolocationPositionError) => {
			setCoordinates(defaultPosition)
			console.log(`Error(${err.code}): ${err.message}`)
		}

		navigator.geolocation.getCurrentPosition(success, error)
	}
	return (
		<>
			<button onClick={currentPosition}>My location</button>
			{isLoading || !coordinates ? (
				<div>Loading...</div>
			) : (
				<MapContainer
					key={JSON.stringify(coordinates)}
					center={coordinates}
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
			)}
		</>
	)
}
