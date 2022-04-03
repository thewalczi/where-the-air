import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY || false

const instance = axios.create({
	baseURL: "https://airapi.airly.eu/v2/",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		apiKey: apiKey
	}
})

export interface Coordinates {
	lat: number
	lng: number
}

export interface Installation {
	address: {
		city: string
		country: string
		displayAddress1: string
		displayAddress2: string
		number: string | null
		street: string
	}
	airly: boolean
	elevation: number
	id: number
	location: { latitude: number; longitude: number }
	locationId: number
	sponsor: object
}

export const getNearest = async (
	lat: number,
	lng: number,
	max: number,
	distance: number
): Promise<Installation[]> => {
	const response = await instance.get(
		`installations/nearest?lat=${lat}&lng=${lng}&maxDistanceKM=${distance}&maxResults=${max}`
	)
	console.log(response.data)
	return response.data
}
