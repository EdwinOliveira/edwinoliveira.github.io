import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { AboutMeComponent } from './components/templates/about-me/about-me.component';
import { ThemeService } from './shared/services/theme/theme.service';
import { AcademicCareerComponent } from "./components/templates/academic-career/academic-career.component";
import { ProfessionalCareerComponent } from "./components/templates/professional-career/professional-career.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <div class="wrapper" *ngIf="this.themeService.state$ | async as state" [ngClass]="state">
      <img class="wallpaper" src="./../assets/svgs/splashart-bg.jpg" alt="background">
      <app-navbar></app-navbar>
      <div class="wrapper--box">
        <app-about-me></app-about-me>
        <app-academic-career></app-academic-career>
        <app-professional-career></app-professional-career>
      </div>
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
          height: 50vh;
          width: 100vw;
        }

        app-navbar {
          position: fixed;
          width: 100vw;
        }

        .wrapper--box {
          padding: 1rem 10%;

          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      }

    `,
    ],
    providers: [ThemeService],
    imports: [NavbarComponent, CommonModule, AboutMeComponent, AcademicCareerComponent, ProfessionalCareerComponent]
})
export class AppComponent {
  public constructor(private readonly _themeService: ThemeService) {
    this._themeService.defineState();
  }

  public get themeService(): ThemeService {
    return this._themeService;
  }
}
