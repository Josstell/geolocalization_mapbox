import { createContext } from "react";
import { Feature } from "../../../interfaces/places";

interface PlacesContextProps{
    isLoading: boolean,
    userLocation?:[number, number],
    isLoadingPlaces: boolean,
	places: Feature[],
    searchPlaceByTerm: (query: string) => Promise<Feature[]>
}


export const PlacesContext = createContext({} as PlacesContextProps )