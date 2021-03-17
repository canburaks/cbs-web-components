import { Component, Prop,Listen, Host, h } from '@stencil/core';
import { API } from '../../lib/index.js';
import  state  from "../../lib/store"

@Component({
  tag: 'fibs-booking',
  styleUrl: 'fibs-booking.css',
  shadow: true,
})
export class FibsBooking {
	@Prop() apikey!: string;
	@Prop() cover: string;
	@Prop() height: string = '80vh';
	@Prop() API: API;

	coverBox!: HTMLDivElement;
	bookingBox!: HTMLDivElement;

	connectedCallback() {
		console.log('connected:');
		// Init API
		if (this.apikey) {
		this.API = API.init(this.apikey);
		}
	}

	componentDidLoad() {
		//console.log('componendDidLoad:', this.coverBox);
		// Add BG Cover
		if (this.cover && this.coverBox) {
		this.coverBox.style.backgroundImage = `url("${this.cover}")`;
		}
	}

	@Listen('onChange')
	handleOriginChange(e){ 
		console.log("Custom Event Listener (onChange):", e.detail)
		state.origin = e.detail;
	}

	render() {
		return (
		<Host>
			<div id="cover-box" ref={el => (this.coverBox = el as HTMLDivElement)}></div>
			<div id="booking-box" ref={el => (this.bookingBox = el as HTMLDivElement)}>

				{/* FIRST STEP */}
				<div id="first-step-box">
					<input 
						type="text" 
						value={state.origin} 
						onInput={this.handleOriginChange} 
					
					/>
					{/* 
					*/}
					<cbs-autocomplete 
						value={state.origin} 
						target="origin" 
					>
					</cbs-autocomplete>
				</div>


			</div>
		</Host>
		);
	}
}
