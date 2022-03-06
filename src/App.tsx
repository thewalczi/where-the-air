import React from "react"

import { MapWrapper } from "./components/map/MapWrapper"
import { TopBar } from "./components/topbar/TopBar"
import { LayoutPortal } from "./layout/LayoutPortal"

function App() {
	return (
		<LayoutPortal>
			<TopBar />
			<MapWrapper />
		</LayoutPortal>
	)
}
export default App
