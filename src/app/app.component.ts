import { Component } from '@angular/core';
import { NavbarComponent } from "./components/organisms/navbar/navbar.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <div class="wrapper">
      <app-navbar></app-navbar>
    </div>
  `,
    styles: [".wrapper{min-height: 100vh; display: flex; flex-direction: column;}"],
    imports: [NavbarComponent]
})
export class AppComponent {}
