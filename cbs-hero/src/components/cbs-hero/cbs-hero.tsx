import { Component,Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'cbs-hero',
  styleUrl: 'style.css',
  shadow: true,
})
export class CbsHero {

  @Prop() cover: string;
  @Prop() header: string;
  @Prop() description: string;
  @Prop() overlay: number;

  render() {
    return (
      <Host>
        <div class="container" style={{backgroundImage:`url("${this.cover}")`}}>
          <div class="overlay" style={{opacity:this.overlay ? this.overlay.toString(): "0.4"}}></div>
          <h1 class="thqHeading1 text">
            <span class="text1">{this.header}</span>
          </h1>
          <span class="text2">
            {this.description}
          </span>
        </div>
      </Host>
    );
  }

}
