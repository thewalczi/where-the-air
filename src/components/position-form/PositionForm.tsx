import React, { FC, FormEvent, useContext, useEffect, useState } from "react"
import { PositionContext } from "../../context/PositionContext"

import "./PositionForm.scss"

export const PositionForm: FC = () => {
	const { currentPosition, setUsersPosition } = useContext(PositionContext)

	const [latitude, setLatitude] = useState<number | null>(null)
	const [longitude, setLongitude] = useState<number | null>(null)

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		if (latitude && longitude) {
			setUsersPosition({ lat: latitude, lng: longitude })
		}
	}

	useEffect(() => {
		setLatitude(currentPosition.lat)
		setLongitude(currentPosition.lng)
	}, [currentPosition])

	return (
		<form className="position-form" onSubmit={handleSubmit}>
			<div className="position-form__cell">
				<label htmlFor="latitude">Latitude</label>
				<input
					type="number"
					id="latitude"
					value={latitude || ""}
					onChange={(e) => setLatitude(parseInt(e.target.value))}
				/>
			</div>
			<div className="position-form__cell">
				<label htmlFor="longitude">Longitude</label>
				<input
					type="number"
					id="longitude"
					value={longitude || ""}
					onChange={(e) => setLongitude(parseInt(e.target.value))}
				/>
			</div>
			<button type="submit">Search</button>
		</form>
	)
}
