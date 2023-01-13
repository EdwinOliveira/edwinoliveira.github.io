import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-span-typography',
  template: '<span class="wrapper" *ngIf="this.content !== null"> <strong> {{ this.content }} </strong> </span>',
  styles: ['.wrapper {font-size: clamp(0.65rem, 0.65rem + 0.25rem, 1.15rem);}'],
  imports: [CommonModule]
})

export class SpanTypographyComponent {
  @Input() public content: string | null = null;
}
