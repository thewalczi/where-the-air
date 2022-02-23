import React, { useEffect } from "react"
import { getData } from "./api"

function App() {
	useEffect(() => {
		getData()
	}, [])

	return <div className="App">Where the air </div>
}
export default App
