import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-brand-typography',
  template: '<span class="wrapper" *ngIf="this.content !== null"> {{ this.content }} </span>',
  styles: ['.wrapper {font-size: clamp(0.75rem, 0.75rem + 0.25rem, 1.25rem); font-weight: bold;}'],
  imports: [CommonModule]
})

export class BrandTypographyComponent {
  @Input() public content: string | null = null;
}