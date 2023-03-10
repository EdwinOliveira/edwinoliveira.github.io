import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-brand-typography',
  templateUrl: 'brand-typography.component.html',
  styleUrls: ['brand-typography.component.scss'],
  imports: [CommonModule]
})

export class BrandTypographyComponent {
  @Input() public content: string | null = null;
}
