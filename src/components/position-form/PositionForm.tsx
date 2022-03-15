import React, { FC, FormEvent, useContext, useEffect, useState } from "react"
import { PositionContext } from "../../context/PositionContext"

import "./PositionForm.scss"

export const PositionForm: FC = () => {
	const { coordinates, setCoordinates } = useContext(PositionContext)

	const [latitude, setLatitude] = useState<number>(0)
	const [longitude, setLongitude] = useState<number>(0)

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		latitude && longitude && setCoordinates([latitude, longitude])
	}

	useEffect(() => {
		setLatitude(coordinates[0])
		setLongitude(coordinates[1])
	}, [coordinates])

	return (
		<form className="position-form" onSubmit={handleSubmit}>
			<div className="position-form__cell">
				<label htmlFor="latitude">Latitude</label>
				<input
					type="number"
					id="latitude"
					value={latitude}
					onChange={(e) => setLatitude(parseInt(e.target.value))}
				/>
			</div>
			<div className="position-form__cell">
				<label htmlFor="longitude">Longitude</label>
				<input
					type="number"
					id="longitude"
					value={longitude}
					onChange={(e) => setLongitude(parseInt(e.target.value))}
				/>
			</div>
			<button type="submit">Search</button>
		</form>
	)
}
