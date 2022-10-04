import React, { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from "../../context"
import { SearchResults } from "../SearchResults"

const SearchBar = () => {
	const { searchPlaceByTerm } = useContext(PlacesContext)
	const debouncerRef = useRef<NodeJS.Timeout>()

	const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
		if (debouncerRef.current) clearTimeout(debouncerRef.current)

		debouncerRef.current = setTimeout(() => {
			console.log("value", event.target.value)
			searchPlaceByTerm(event.target.value)
		}, 350)
	}
	return (
		<div className="bg-white rounded-md shadow-xl left-10 p-2 fixed top-10 w-[250px] z-30">
			<input
				type="text"
				className=""
				placeholder="Buscar lugar..."
				onChange={onQueryChanged}
			/>
			<SearchResults />
		</div>
	)
}

export default SearchBar
