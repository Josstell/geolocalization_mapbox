import "../styles/globals.css"
import type { AppProps } from "next/app"
import "mapbox-gl/dist/mapbox-gl.css"

import mapboxgl from "mapbox-gl" // or "const mapboxgl = require('mapbox-gl');"
import { PlacesProvider } from "../context/places/PlacesProvider"
import { MapProvider } from "../context/map/MapProvider"

const { NEXT_PUBLIC_MAPBOX_KEY } = process.env

mapboxgl.accessToken = NEXT_PUBLIC_MAPBOX_KEY || ""

// if (!navigator.geolocation) {
// 	alert("Tu navegador no tiene opción de Geolocation")
// 	throw new Error("Tu navegador no tiene opción de Geolocation")
// }

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PlacesProvider>
			<MapProvider>
				<Component {...pageProps} />
			</MapProvider>
		</PlacesProvider>
	)
}

export default MyApp
