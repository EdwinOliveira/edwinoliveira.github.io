import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-divider',
  template: '<div [style]="this.getStyles()" class="wrapper"></div>',
  styles: [".wrapper { background-color: currentColor; opacity: 0.1; }"]
})

export class DividerComponent {
  @Input() public height: string | null = null;
  @Input() public width: string | null = null;

  public getStyles(): Object {
    return {
      height: this.height ?? "2rem",
      width: this.width ?? "0.025rem",
    }
  }
}
