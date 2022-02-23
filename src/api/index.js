import axios from "axios"

const instance = axios.create({
	baseURL: "https://airapi.airly.eu/v2/",
	Accept: "application/json"
})

export const getData = async () => {
	const response = await instance.get("/meta/indexes")
	return response
}
