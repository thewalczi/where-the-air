import React from "react"

import { Map } from "./components/map/Map"
import { LayoutPortal } from "./layout/LayoutPortal"

function App() {
	return (
		<LayoutPortal>
			<Map />
		</LayoutPortal>
	)
}
export default App
