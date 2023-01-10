import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="wrapper" *ngIf="this.themeService.state$ | async as state" [ngClass]="state">
      <img class="wallpaper" src="./../assets/svgs/splashart-bg.jpg" alt="background">
      <app-navbar></app-navbar>
    </div>
  `,
  styles: [
    `
      .light-theme {
        background-color: var(--light--primary--color);
        color: var(--dark--primary--color);
      }

      .dark-theme {
        color: var(--light--primary--color);
        background-color: var(--dark--primary--color);
      }

      .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        .wallpaper {
          height: 60vh;
          width: 100vw;
        }

        app-navbar {
          position: fixed;
          width: 100vw;
        }
      }
    `,
  ],
  imports: [NavbarComponent, CommonModule],
  providers: [ThemeService],
})
export class AppComponent {
  public constructor(private readonly _themeService: ThemeService) {
    this._themeService.defineState();
  }

  public get themeService(): ThemeService {
    return this._themeService;
  }
}
