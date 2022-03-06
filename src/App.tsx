import React from "react"

import { MapWrapper } from "./components/map/MapWrapper"
import { LayoutPortal } from "./layout/LayoutPortal"

function App() {
	return (
		<LayoutPortal>
			<MapWrapper />
		</LayoutPortal>
	)
}
export default App
