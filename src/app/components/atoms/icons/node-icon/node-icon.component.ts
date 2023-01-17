import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-node-icon',
  template: '<img class="wrapper" src="./../../../../assets/svgs/node-icon.svg" />',
  styles: [
    `
      .wrapper {
        height: 4rem;
        color: currentColor;
        padding: 0.5rem;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0.25rem;
        background-color: var(--purple--primary--color);
      }
    `,
  ],
})
export class NodeIconComponent {}
