import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sub-brand-typography',
  templateUrl: 'sub-brand-typography.component.html',
  styleUrls: ['sub-brand-typography.component.scss'],
  imports: [CommonModule]
})

export class SubBrandTypographyComponent {
  @Input() public content: string | null = null;
}
