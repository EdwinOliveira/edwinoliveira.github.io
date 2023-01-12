import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-paragraph-typography',
  template: '<span class="wrapper" *ngIf="this.content !== null"> {{ this.content }} </span>',
  styles: ['.wrapper {font-size: clamp(0.85rem, 0.85rem + 0.25rem, 1.35rem); font-weight: 500;}'],
  imports: [CommonModule]
})

export class ParagraphTypographyComponent {
  @Input() public content: string | null = null;
}