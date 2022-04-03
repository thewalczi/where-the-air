import React from "react"

import { ContentWrapper } from "./components/content-wrapper/ContentWrapper"
import { TopBar } from "./components/topbar/TopBar"
import { PositionProvider } from "./context/PositionContext"
import { LayoutPortal } from "./layout/LayoutPortal"

function App() {
	return (
		<PositionProvider>
			<LayoutPortal>
				<TopBar />
				<ContentWrapper />
			</LayoutPortal>
		</PositionProvider>
	)
}
export default App
