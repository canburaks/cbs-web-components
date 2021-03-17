/* BACKEND - FINAL DIRECTION*/
{
import {fetch} from 'wix-fetch';
const key = "AIzaSyDkB5DGeBVwkv8JpQ_dMuTtGUKGoEHMctI"


function getUrl(origin, destination){
	const endpoint = `https://maps.googleapis.com/maps/api/directions/json?`
	const params = `origin=${origin.replace(",", "+")}&destination=${destination.replace(",","+")}&key=${key}&`
	return endpoint + params
}

function getUrlById(origin_id, destination_id){
	const endpoint = `https://maps.googleapis.com/maps/api/directions/json?`
	const params = `origin=place_id:${origin_id}&destination=place_id:${destination_id}&key=${key}&`
	return endpoint + params
}



export async function autocompleteDirection(origin_id , destination_id, distanceCallback) {
	//if (origin_id && destination_id){
	//	var url = getUrlById(origin,destination,origin_id, destination_id);
	//}
	//else {
	//    var url = getUrl(origin, destination)
	//}
	var url = getUrlById(origin_id, destination_id)
	console.log("url",url)
	const response = await fetch (url, {method: 'get'});
	if (response.ok){
		const rj =  await response.json()
		console.log("rj", rj)
		const value = rj.routes[0].legs[0].distance
		console.log("direction: ", value)
		return value
	}
	else {
		console.log("error")
		return null
	}
}

}


/* BOOKING */
import wixWindow from 'wix-window';
import {local} from 'wix-storage';
import {autocomplete} from 'backend/gapi';
import {details} from 'backend/gapi';
import {reverse} from 'backend/gapi';
import {autocompleteDirection} from 'backend/gapi-cbs';

function encodeUrl(text){
    return((((text.replaceAll(".", " ")).replaceAll(":", " ")).replaceAll(","," ")
    ).replaceAll("|", " ")).replaceAll(" ","+")
}
function encodeTr(text){
    var textLower = text.toLowerCase(text)
    return((((((textLower.replaceAll("ü", "u")).replaceAll("ş", "s")).replaceAll("ç","c")
    ).replaceAll("ö", "o")).replaceAll(" ","+")).replaceAll('"\"', "+")).replaceAll("ğ","g")
}
function distanceCallback(val){
  //console.log("callback", val)
  if (val.value){
    distance = val.value
    //$w("#distance").text = `Distance: ${val.text}`
  }
}

function priceCalculator(shortRoutePrice, fullPrice, halfPrice){
  const serviceType = $w("#dropdown1").value
  console.log("dd", serviceType)
  // Full Price
  if (serviceType.startsWith("Full")){
    return fullPrice
  }
  else if (serviceType.startsWith("Half")){
    return halfPrice
  }
  else {
    const isShortRoute = distance < 55000;
    //console.log("is short route?:", isShortRoute, distance);
    // Low than 55000 meters
    if (isShortRoute){
      return shortRoutePrice
    }
    // Long Road
    else{
      const extraRoute = parseInt((distance - 55000) / 1000);
      return shortRoutePrice + (extraRoute * 1) // 
    }

  }
}

{
    var origin_text = "";
    var origin_place_id = "";
    var destination_text = "";
    var destination_place_id = "";
    var distance = 0;
    var finalPrice = 0;
    var carTypes = {
    vito:{full:150, half:125, shortRoute:70},
    vitoUltra: {full:250, half:150, shortRoute:85},
    eSeries: {full:350,half:350, shortRoute:175},
    sSeries: {full:500,half:500, shortRoute:230},
    sprinter: {full:150, half:125, shortRoute:80},
    sprinterUltra: {full:250, half:150, shortRoute:95},
    }
    var selectedCar = null;
}

$w.onReady(function () {
    $w("#finalPrice").text = "";
     // handle each suggestion repeater item
     $w("#repeater1").onItemReady( ($w, itemData, index) => {
         const text1 = $w("#or11");
         text1.text = itemData.text1;
         const text2 = $w("#or13");
         text2.text = itemData.text2;
     });
     $w("#repeater1").collapse(); // hidden on page load

    
     // handle each location detail line
     $w("#repeater2").onItemReady( ($w, itemData, index) => {
         const text3 = $w("#des11");
         text3.text = itemData.text3;
         const text4 = $w("#des12");
         text4.text = itemData.text4;
    }); 
    $w("#repeater2").collapse(); // hidden on page load
});


export function input6_keyPress_1(event, $w2) {

  //$w("#repeater2").data = [];
  //$w("#repeater2").hide();
  setTimeout(() => {
    // use the current value to get a list of location suggestions
    // we call the autocomplete() web module from the backend
    let val = event.target.value;
    if(val.length === 0)
        return; // ignore if empty
    
    autocomplete(val).then(function (resp) {
      // create an array of suggestions for the repeater
      let predictions = resp.predictions;
	  //console.log("pred", predictions)
      let suggestions = [];
      predictions.forEach(function (prediction) {
		const { structured_formatting } = prediction;
		const { main_text, secondary_text } = structured_formatting;
		const pl_id = ((prediction.place_id.replace("_","-")).replace("/","-")).replace(" ","-");
		//console.log("pld_id", pl_id, main_text, secondary_text)
        let item = { "_id": pl_id, text1: main_text + " " + secondary_text, text2: prediction.place_id };
        suggestions.push(item);
      });
      $w("#repeater1").data = suggestions; // add the suggestions to the repeater
      $w("#repeater1").expand();	// we have data so we can expand the repeater
    });

  }, 10);
}




export function container2_click(event,  $w) {
  origin_text = $w("#or11").text;
  origin_place_id =  $w("#or13").text;
	//console.log("origin-text:", origin_text)
	$w("#input6").value = origin_text

    //set_details(place_id);
    $w("#repeater1").collapse();

	if (destination_place_id && origin_place_id){
		getDistance( origin_place_id, destination_place_id)
	}
}

async function getDistance(o_id, d_id){
      //const o = (encodeTr(encodeUrl(orig))).replaceAll("++","+");
      //const d = (encodeTr(encodeUrl(dest))).replaceAll("++","+");

      //console.log("encoded",  o_id, d_id)
	    var value = await  autocompleteDirection(o_id, d_id);
      distanceCallback(value)
}
export function input7_keyPress(event, $w1) {
  //$w("#repeater1").data = [];
  //$w("#repeater1").hide();
  setTimeout(() => {
    // use the current value to get a list of location suggestions
    // we call the autocomplete() web module from the backend
    let val = event.target.value;
    if(val.length === 0)
        return; // ignore if empty
    
    autocomplete(val).then(function (resp) {
      // create an array of suggestions for the repeater
      let predictions = resp.predictions;
	    //console.log("pred dest", predictions)
      let suggestions = [];
      predictions.forEach(function (prediction) {
        const { structured_formatting } = prediction;
        const { main_text, secondary_text } = structured_formatting;
        const pl_id = ((prediction.place_id.replace("_","-")).replace("/","-")).replace(" ","-");
		    //console.log("pld_id", pl_id, main_text, secondary_text)
        let item = { "_id": pl_id, text3: main_text + " " + secondary_text, text4:prediction.place_id}
        suggestions.push(item);
      });
      $w("#repeater2").data = suggestions; // add the suggestions to the repeater
      $w("#repeater2").expand();	// we have data so we can expand the repeater
    });

  }, 10);
}

export function container3_click(event,  $w) {
  destination_text = $w("#des11").text
  destination_place_id = $w("#des12").text;
	console.log("destination-text:", destination_text)
	$w("#input7").value = destination_text

    //set_details(place_id);
    $w("#repeater2").collapse();
	console.log("before distance: ", origin_text,destination_text)
	if (destination_place_id && origin_place_id){
		getDistance( origin_place_id, destination_place_id)
	}
}






export function dropdown1_change(event) {
	var value = event.target.value
  if (value.startsWith("Full")){
    $w("#input7").disable()
  }
  else {
    $w("#input7").enable()
  }
  console.log("dropdown", value)
}

export function dropdown2_change(event) {
	const value = event.target.value;
  console.log("car type: ", value)
  if      (value.startsWith("Mercedes E")){ selectedCar = carTypes.eSeries}
  else if (value.startsWith("Mercedes S")){ selectedCar = carTypes.sSeries}
  else if (value.startsWith("Mercedes Vito Ultra")){ selectedCar = carTypes.vitoUltra}
  else if (value.startsWith("Mercedes Vito")){ selectedCar = carTypes.vito}
  else if (value.startsWith("Sprinter Ultra")){ selectedCar = carTypes.sprinterUltra}
  else if (value.startsWith("Sprinter")){ selectedCar = carTypes.sprinter}
  console.log("car type: ", selectedCar)

  // Final Price
  finalPrice = priceCalculator(selectedCar.shortRoute, selectedCar.full, selectedCar.half)
  console.log("final price: ", finalPrice)

  //Final Settings
  if (distance){
    $w("#finalDist").html =  `<span class="p1" style="font-size:24px">Distance: <strong style="font-size:24px; color:#07614b;">${parseInt(distance/1000)} km</strong>.</span>`;

    $w("#finalPrice").html = `<span class="p1" style="font-size:24px;"><strong style="color:#07614b;">The Service Price: ${finalPrice} Euro</strong>.</span>`;
  }
  else {
    $w("#finalPrice").html = `<span class="p1" style="font-size:24px;"><strong style="color:#07614b;">The Service Price: ${finalPrice} Euro</strong>.</span>`;
  }
}

