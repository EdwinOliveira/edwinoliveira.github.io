import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paragraph-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph-typography.component.html',
  styleUrls: ['./paragraph-typography.component.scss']
})
export class ParagraphTypographyComponent {
  @Input() public content: string | null = null;
}
