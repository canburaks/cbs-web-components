import { createStore } from "@stencil/store";
//import { API } from "./index.js";


const { state, onChange } = createStore({
  origin:"",
  destination: "d",
  originId:"",
  destinationId: "",
});

onChange('origin', value => console.log("origin", value))
 

//{
//    console.log("origin changed: ", value);
//    const resp = await API.autocomplete(value)
//    console.log("predictions: ", resp)
//});

export default state;