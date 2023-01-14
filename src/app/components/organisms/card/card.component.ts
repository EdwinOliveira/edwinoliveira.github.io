import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CompanyIconComponent } from '../../atoms/icons/company-icon/company-icon.component';
import { SpanTypographyComponent } from '../../atoms/typographies/span/span-typography.component';
import { SubSpanTypographyComponent } from '../../atoms/typographies/sub-span/sub-span-typography.component';
import { CardModel } from './card.model';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
  imports: [SpanTypographyComponent, SubSpanTypographyComponent, CommonModule, CompanyIconComponent]
})

export class CardComponent {
  @Input() public itemCollection: Array<CardModel> = new Array<CardModel>();
}
