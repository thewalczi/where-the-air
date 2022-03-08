import React, { FC, FormEvent, useState } from "react"

import "./PositionForm.scss"

export const PositionForm: FC = () => {
	const [latitude, setLatitude] = useState<number>()
	const [longitude, setLongitude] = useState<number>()

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		console.log(latitude, longitude)
	}

	return (
		<form className="position-form" onSubmit={handleSubmit}>
			<div className="position-form__cell">
				<label htmlFor="latitude">Latitude</label>
				<input
					id="latitude"
					value={latitude}
					onChange={(e) => setLatitude(parseInt(e.target.value))}
				/>
			</div>
			<div className="position-form__cell">
				<label htmlFor="longitude">Longitude</label>
				<input
					id="longitude"
					value={longitude}
					onChange={(e) => setLongitude(parseInt(e.target.value))}
				/>
			</div>
			<button type="submit">Search</button>
		</form>
	)
}
