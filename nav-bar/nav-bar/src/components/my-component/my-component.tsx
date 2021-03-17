import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() logo: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;



  render() {
    return (
      <div class="nav-bar">
        <div class="nav-modal"></div>

        <a href="/" class="brand">
          <img src={this.logo} class="brand" />
        </a>
        <div class="toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f9f9f9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line id="l2" x1="3" y1="12" x2="21" y2="12"></line>
            <line id="l1" x1="3" y1="6" x2="21" y2="6"></line>
            <line id="l3" x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    );
  }
}
