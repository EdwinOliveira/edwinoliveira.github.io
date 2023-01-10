import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-divider',
  template: '<div class="wrapper"></div>',
  styles: [".wrapper { height: 2rem; width: 0.025rem; background-color: currentColor; }"]
})

export class DividerComponent {}