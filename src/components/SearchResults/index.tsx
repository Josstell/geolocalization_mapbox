import React, { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../../context"
import { Feature } from "../../interfaces/places"

export const SearchResults = () => {
	const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext)
	const { map, getRouteBetweenPoints } = useContext(MapContext)

	const [activeId, setActiveId] = useState("")

	const onPlaceClicked = (place: Feature) => {
		const [lng, lat] = place.center
		setActiveId(place.id)
		map?.flyTo({
			zoom: 14,
			center: [lng, lat],
		})
	}

	const getRoute = (place: Feature) => {
		if (!userLocation) return
		const [lng, lat] = place.center
		getRouteBetweenPoints(userLocation, [lng, lat])
	}

	if (isLoadingPlaces) {
		return (
			<div>
				<h6>Buscando</h6>
				<p>Espere por favor</p>
			</div>
		)
	}
	return (
		<ul>
			{places.map((place) => (
				<li
					key={place.id}
					className={`cursor-pointer  ${
						activeId === place.id ? "active:bg-blue-600 " : ""
					}`}
					onClick={() => onPlaceClicked(place)}
				>
					<h6 className="font-bold">{place.text_es}</h6>
					<p className="text-sm">{place.place_name_es}</p>
					<button
						onClick={() => getRoute(place)}
						className="bg-blue-700 text-white px-2 rounded-sm"
					>
						Direcciones
					</button>
				</li>
			))}
		</ul>
	)
}
