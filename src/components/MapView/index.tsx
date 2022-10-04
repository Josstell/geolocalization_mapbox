import React, { useContext, useLayoutEffect, useRef } from "react"
import { MapContext, PlacesContext } from "../../context"
import { Map } from "mapbox-gl"

import Loading from "../Loading"

const MapView = () => {
	const mapDiv = useRef<HTMLDivElement>(null)
	const { isLoading, userLocation } = useContext(PlacesContext)
	const { setMap } = useContext(MapContext)

	useLayoutEffect(() => {
		if (!isLoading) {
			const map = new Map({
				container: mapDiv.current!, // container ID
				style: "mapbox://styles/mapbox/streets-v11", // style URL
				center: userLocation, // starting position [lng, lat]
				zoom: 14, // starting zoom
			})
			setMap(map)
		}
	}, [isLoading])

	if (isLoading) {
		return <Loading />
	}
	return (
		<div ref={mapDiv} className="w-screen h-screen ">
			{userLocation?.join(",")}
		</div>
	)
}

export default MapView
