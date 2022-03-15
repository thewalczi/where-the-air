import React from "react"

import { MapWrapper } from "./components/map/MapWrapper"
import { TopBar } from "./components/topbar/TopBar"
import { PositionProvider } from "./context/PositionContext"
import { LayoutPortal } from "./layout/LayoutPortal"

function App() {
	return (
		<PositionProvider>
			<LayoutPortal>
				<TopBar />
				<MapWrapper />
			</LayoutPortal>
		</PositionProvider>
	)
}
export default App
