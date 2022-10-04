import axios from 'axios'

const { NEXT_PUBLIC_MAPBOX_KEY } = process.env


const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,
        access_token:NEXT_PUBLIC_MAPBOX_KEY || ""
    }
})

export default directionsApi
