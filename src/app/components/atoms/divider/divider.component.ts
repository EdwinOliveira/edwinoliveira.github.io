import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-divider',
  templateUrl: 'divider.component.html',
  styleUrls: ['divider.component.scss'],
  imports: [CommonModule]
})
export class DividerComponent {
  @Input() public height: string = "0.05rem";
  @Input() public width: string = "1.25rem";

  public get styles(): Object {
    return {
      "height": this.height,
      "width": this.width,
    }
  }
}
