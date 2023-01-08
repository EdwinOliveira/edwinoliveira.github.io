import { Component } from '@angular/core';
import { BrandTypographyComponent } from '../../atoms/typographies/brand-typography.component';

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `
    <div class="wrapper">
      <div class="wrapper__box">
        <div class="wrapper__box icon--group"></div>
        <div class="wrapper__box typography">
          <app-brand-typography [content]="'DOliveira'"></app-brand-typography>
        </div>
      </div>
      <div class="wrapper__box">
        <div class="wrapper__box icon--group"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        height: 4rem;

        &__box {
          height: inherit;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    `,
  ],
  imports: [BrandTypographyComponent],
})
export class NavbarComponent {}
