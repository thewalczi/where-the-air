import React, { FC, useEffect, useState } from "react"
import { Map } from "./Map"

const defaultPosition: [number, number] = [52.229676, 21.012229]

export const MapWrapper: FC = () => {
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

	const currentPosition = () => {
		const success = (pos: GeolocationPosition) => {
			const crd = pos.coords
			setCoordinates([crd.latitude, crd.longitude])
		}

		const error = (err: GeolocationPositionError) => {
			setCoordinates(defaultPosition)
			throw err
		}

		navigator.geolocation.getCurrentPosition(success, error)
	}

	return (
		<>
			{isLoading || !coordinates ? (
				<div>Loading...</div>
			) : (
				<Map coordinates={coordinates} />
			)}
		</>
	)
}
