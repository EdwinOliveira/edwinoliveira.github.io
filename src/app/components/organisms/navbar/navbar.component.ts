import { Component } from '@angular/core';
import { IconCollection } from 'src/app/shared/@constants/icon.collection';
import { IconGroupComponent } from '../../molecules/icon-group/icon-group.component';
import { BrandTypographyComponent } from '../../atoms/typographies/brand/brand-typography.component';
import { DividerComponent } from '../../atoms/divider/divider.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `
    <div class="wrapper">
      <div class="wrapper--box">
        <div class="wrapper--box item-collection">
          <app-icon-group [iconCollection]="this.socialNetworkIconCollection"></app-icon-group>
          <app-divider></app-divider>
          <app-brand-typography [content]="'DOliveira'"></app-brand-typography>
        </div>
        <div class="wrapper--box item-collection">
          <app-icon-group [iconCollection]="this.serviceIconCollection"></app-icon-group>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        min-height: 4rem;
        padding: 0 1.5rem;

        background-image: url("./../../../../assets/svgs/splashart-bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;

        color: var(--light--primary--color);

        box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;

        transition: 1s;

        &--box {
          min-height: inherit;

          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .item-collection {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }
    `,
  ],
  imports: [IconGroupComponent, BrandTypographyComponent, DividerComponent, CommonModule],
})
export class NavbarComponent {
  private readonly _socialNetworkIconCollection: Array<IconCollection>;
  private readonly _serviceIconCollection: Array<IconCollection>;

  public constructor() {
    this._socialNetworkIconCollection = new Array<IconCollection>(IconCollection.GITHUB, IconCollection.LINKEDIN);

    this._serviceIconCollection = new Array<IconCollection>(IconCollection.THEME);
  }

  public get socialNetworkIconCollection(): Array<IconCollection> {
    return this._socialNetworkIconCollection;
  }

  public get serviceIconCollection(): Array<IconCollection> {
    return this._serviceIconCollection;
  }
}
