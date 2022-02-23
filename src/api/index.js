import axios from "axios"

const instance = axios.create({
	baseURL: "https://airapi.airly.eu/v2/",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		apiKey: process.env.REACT_APP_API_KEY
	}
})

export const getData = async () => {
	const response = await instance.get("installations/204")
	console.log(response.data)
}
