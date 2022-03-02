import React, { useEffect } from "react"

import { getData } from "./api"

import { LayoutPortal } from "./layout/LayoutPortal.layout"

function App() {
	useEffect(() => {
		getData()
	}, [])

	return <LayoutPortal>Hello</LayoutPortal>
}
export default App
