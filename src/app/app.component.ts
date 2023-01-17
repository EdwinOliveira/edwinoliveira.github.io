import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { AboutMeComponent } from './components/templates/about-me/about-me.component';
import { ThemeService } from './shared/services/theme/theme.service';
import { AcademicCareerComponent } from "./components/templates/academic-career/academic-career.component";
import { ProfessionalCareerComponent } from "./components/templates/professional-career/professional-career.component";
import { TechStackComponent } from "./components/templates/tech-stack/tech-stack.component";
import { BrandTypographyComponent } from "./components/atoms/typographies/brand/brand-typography.component";
import { ParagraphTypographyComponent } from "./components/atoms/typographies/paragraph/paragraph-typography.component";

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <div class="wrapper" *ngIf="this.themeService.state$ | async as state" [ngClass]="state">
      <app-navbar></app-navbar>
      <div class="wrapper--group">
        <app-brand-typography [content]="'Hello. My name is Diogo Oliveira'"></app-brand-typography>
        <app-paragraph-typography [content]="'Software engineer deeply interested in Software Architecture'"></app-paragraph-typography>
      </div>
      <div class="wrapper--box">
        <app-about-me></app-about-me>
        <app-academic-career></app-academic-career>
        <app-professional-career></app-professional-career>
        <app-tech-stack></app-tech-stack>
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

        &--group {
          background-image: url("./../assets/svgs/splashart-bg.jpg");
          background-size: cover;
          background-repeat: no-repeat;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;

          gap: 0.5rem;

          color: var(--light--primary--color);

          min-height: 35vh;
          width: 100vw;
        }

        app-navbar {
          position: fixed;
          width: 100vw;
        }

        .wrapper--box {
          padding: 2rem 10%;

          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
      }

    `,
    ],
    providers: [ThemeService],
    imports: [NavbarComponent, CommonModule, AboutMeComponent, AcademicCareerComponent, ProfessionalCareerComponent, TechStackComponent, BrandTypographyComponent, ParagraphTypographyComponent]
})
export class AppComponent {
  public constructor(private readonly _themeService: ThemeService) {
    this._themeService.defineState();
  }

  public get themeService(): ThemeService {
    return this._themeService;
  }
}
