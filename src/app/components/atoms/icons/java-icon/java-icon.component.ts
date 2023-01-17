import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-java-icon',
  template: '<img class="wrapper" src="./../../../../assets/svgs/java-icon.svg" />',
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
export class JavaIconComponent {}
