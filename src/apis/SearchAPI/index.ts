import axios from 'axios'

const { NEXT_PUBLIC_MAPBOX_KEY } = process.env

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit:5,
        language:'es',
        access_token:NEXT_PUBLIC_MAPBOX_KEY || ""  }
})

export default searchApi
