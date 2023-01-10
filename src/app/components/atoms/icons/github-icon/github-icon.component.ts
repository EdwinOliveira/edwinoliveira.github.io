import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-github-icon',
  template: '<img class="wrapper" src="./../../../../assets/svgs/github-icon.svg" />',
  styles: [".wrapper { height: 1.25rem; }"]
})
export class GithubIconComponent {}