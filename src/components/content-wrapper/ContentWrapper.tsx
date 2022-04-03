import { FC } from "react"
import { Map } from "../map/Map"
import { SidePanel } from "../side-panel/SidePanel"
import "./ContentWrapper.scss"

export const ContentWrapper: FC = () => {
	return (
		<div className="content">
			<Map />
			<SidePanel />
		</div>
	)
}
