import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="wrapper">
    </div>
  `,
  styles: [".wrapper{display: flex; flex-direction: column;}"],
})
export class AppComponent {}
