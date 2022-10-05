import type { NextPage } from "next"
import dynamic from "next/dynamic"

//import BtnMyLocation from "../components/BtnMyLocation"
import LogoMariachon from "../components/LogoMariachon"
import SearchBar from "../components/SearchBar"

const MapViewDynamic = dynamic(() => import("../components/MapView"), {
	ssr: false,
})

const Home: NextPage = () => {
	return (
		<div className="flex ">
			<MapViewDynamic />

			{/* <BtnMyLocation /> */}
			<SearchBar />
			<div>
				<LogoMariachon />
			</div>
		</div>
	)
}

export default Home
