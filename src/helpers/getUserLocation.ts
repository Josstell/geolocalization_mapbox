export const getUserLocation = async (): Promise<[number, number]> =>{
    return new Promise((resolve, reject)=>{
        navigator.geolocation.watchPosition(({coords})=>{
            resolve([coords.longitude, coords.latitude])
        }),
        (err:any)=>{
            alert("No se pudo obtener la geolocalización")
            console.log(err);
            reject()
            
        }
    })
}