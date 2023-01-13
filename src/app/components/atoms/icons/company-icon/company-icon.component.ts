import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-company-icon',
  template: '<img class="wrapper" src="./../../../../assets/svgs/company-icon.svg" />',
  styles: [".wrapper { height: 1.5rem; color: currentColor;}"]
})
export class CompanyIconComponent {}
