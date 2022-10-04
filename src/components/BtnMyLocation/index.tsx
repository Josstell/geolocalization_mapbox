import React, { useContext } from "react"
import { MapContext, PlacesContext } from "../../context"

const BtnMyLocation = () => {
	const { map, isMapReady } = useContext(MapContext)
	const { userLocation } = useContext(PlacesContext)

	console.log(isMapReady, userLocation)

	const onClick = () => {
		if (!isMapReady) throw new Error("Mapa no está listo.")
		if (!userLocation) throw new Error("Np hay ubicación el usuario.")
		map?.flyTo({
			zoom: 14,
			center: userLocation,
		})
	}

	return (
		<button
			onClick={onClick}
			className="btn bg-blue-300  fixed top-10 right-10 z-20 px-3 text-slate-200"
		>
			Mi ubicación
		</button>
	)
}

export default BtnMyLocation
