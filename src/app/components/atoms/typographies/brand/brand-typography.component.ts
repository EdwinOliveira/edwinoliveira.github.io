import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-brand-typography',
  template: '<span class="wrapper" *ngIf="this.content !== null"> {{ this.content }} </span>',
  imports: [CommonModule]
})

export class BrandTypographyComponent {
  @Input() public content: string | null = null;
}