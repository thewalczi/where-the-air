import { FC, useContext, useEffect } from "react"
import { PositionContext } from "../../context/PositionContext"
import { Map } from "./Map"

export const MapWrapper: FC = () => {
	const { getUseresActualPosition } = useContext(PositionContext)

	useEffect(() => {
		getUseresActualPosition()
	}, [])

	return (
		<>
			<Map />
		</>
	)
}
