import React, { FC, useContext, useEffect } from "react"
import { PositionContext } from "../../context/PositionContext"
import { Map } from "./Map"

export const MapWrapper: FC = () => {
	const { coordinates, currentPosition } = useContext(PositionContext)

	useEffect(() => {
		currentPosition()
	}, [])

	return (
		<>
			<Map coordinates={coordinates} />
		</>
	)
}
