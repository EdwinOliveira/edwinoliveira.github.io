import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sub-span-typography',
  template: '<span class="wrapper" *ngIf="this.content !== null"> <strong> {{ this.content }} </strong> </span>',
  styles: ['.wrapper {font-size: clamp(0.55rem, 0.55rem + 0.25rem, 1.05rem); color: #adadad;}'],
  imports: [CommonModule]
})

export class SubSpanTypographyComponent {
  @Input() public content: string | null = null;
}
