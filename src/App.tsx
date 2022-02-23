import React, { useEffect } from "react"
import { getData } from "./api"

function App() {
	useEffect(() => {
		console.log(getData())
	}, [])

	return <div className="App">Where the air </div>
}
export default App
