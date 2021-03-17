const key = "AIzaSyDkB5DGeBVwkv8JpQ_dMuTtGUKGoEHMctI"



export const API = {
    apikey:"",

    init:function(apikey){
        //console.log("apikey: ", apikey)
        this.apikey = apikey;
        return this
    },
    async autocomplete(stringInput) {
        const apart1 = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
        const apart2 = `&region=tr&key=${this.apikey}`;
        let url = `${apart1}input=${stringInput}${apart2}`;
        console.log("autocomplete: url: ", globalThis)
        const raw = await fetch(url)
        console.log("raw", raw)
        const response = await raw.json()
        console.log("response", response)
        return response
    },
    details(id) {
        const dpart1 = "https://maps.googleapis.com/maps/api/place/details/json?";
        const dpart2 = "&key=";
        let placeid = "placeid=" + id;
        let url = dpart1 + placeid + dpart2 + this.apikey;
        return fetch(url, {method: 'get'}).then( (httpResponse) => { 
            if (httpResponse.ok) {      
                return httpResponse.json(); 
            }
        });
    },
    reverse(lat, lng) {
        const rpart1 = "https://maps.googleapis.com/maps/api/geocode/json?";
        const rpart2 = "&key=";
        let latlng = "latlng=" + lat + "," + lng;
        let url = rpart1 + latlng + rpart2 + this.apikey;
        return fetch(url, {method: 'get'}).then( (httpResponse) => { 
            if (httpResponse.ok) {
                return httpResponse.json(); 
            }
        })
    },
    getUrl(origin, destination){
        const endpoint = `https://maps.googleapis.com/maps/api/directions/json?`
        const params = `origin=${origin.replace(",", "+")}&destination=${destination.replace(",","+")}&key=${apikey}&`
        return endpoint + params
    },
    
    getUrlById(origin_id, destination_id){
        const endpoint = `https://maps.googleapis.com/maps/api/directions/json?`
        const params = `origin=place_id:${origin_id}&destination=place_id:${destination_id}&key=${apikey}&`
        return endpoint + params
    },

    async autocompleteDirection(origin_id , destination_id, distanceCallback) {
        // Get API request URL
        var url = this.getUrlById(origin_id, destination_id)
        console.log("API URL:",url)
        const response = await fetch (url, {method: 'get'});
        if (response.ok){
            const rj =  await response.json()
            console.log("response:", rj)
            const value = rj.routes[0].legs[0].distance
            console.log("direction: ", value)
            return value
        }
        console.log("!ERROR: response:", response)
        return null
    },
    async reverseRequest(proxyUrl, targetUrl){
        var response = await fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=taksim&region=tr&key=AIzaSyDkB5DGeBVwkv8JpQ_dMuTtGUKGoEHMctI", {
            mode: 'no-cors', // no-cors, *cors, same-origin
            headers:{
                'Content-Type': 'application/json'
            }
        })
        console.log("respo", response)
        var jsonresponse = await response.json()
        console.log("jsonrespo", jsonresponse)

        return jsonresponse
    }
}




