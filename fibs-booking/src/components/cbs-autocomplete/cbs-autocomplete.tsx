import { Component, Element, Prop, State,  h, Method } from '@stencil/core';
//import state from '../../lib/store';
//import { API } from '../../lib/index';

@Component({
  tag: 'cbs-autocomplete',
  styleUrl: 'cbs-autocomplete.css',
})
export class CbsAutocomplete {
	@Prop() value!: string;
	@Prop({ reflect: true }) target: string;

	@Element() el: HTMLElement;
	@State() isFocused: boolean = false;
	@State() resonseData: any;
	//@Event() onChange: EventEmitter;
// VALID: using Promise.resolve()
	@Method()
	async fetchAdress(val) {
		const apikey = "AIzaSyDkB5DGeBVwkv8JpQ_dMuTtGUKGoEHMctI";
        const apart1 = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
        const apart2 = `&region=tr&key=${apikey}`;
		let url = `${apart1}input=${val}${apart2}`;
		console.log("\n\n", url, "|n|n")
		const rawresponse = await fetch(url, {
			mode:"no-cors",
			headers: {
                'Content-Type': 'application/json'
			}
		});
        console.log("respo", rawresponse)
        var jsonresponse = await rawresponse.json()
        console.log("jsonrespo", jsonresponse)

	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('Input Submit: ', this.value);
		//this.selection.emit(e)
		// send data to our backend
	}
	



	connectedCallback() {
		console.log("Autocomplete connected: ",   "\n\n")

	}

  	render() {
		const addressFetcher = this.fetchAdress
		function handleChange(e){
			console.log("change target",this)
			addressFetcher(e.target.value)
		}

		return (
			<div class="autocomplete-box">
			<input type="text" value={this.value} onInput={handleChange} />
			</div>
		);
  }
}
