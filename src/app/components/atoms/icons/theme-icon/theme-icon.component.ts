import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeCollection } from 'src/app/shared/@constants/theme.collection';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  standalone: true,
  selector: 'app-theme-icon',
  template: `<img class="wrapper" 
    *ngIf="this.themeService.state$ | async as state" 
    (click)="this.themeService.updateState(this.themeService.isDarkTheme(state) ? this.themeService.lightTheme : this.themeService.darkTheme)" 
    [src]="this.defineThemeIconPath(state)" 
  />`,
  styles: ['.wrapper { height: 1.25rem; }'],
  imports: [CommonModule],
})
export class ThemeIconComponent {
  public constructor(
    private readonly _themeService: ThemeService,
  ) {};

  public get themeService(): ThemeService {
    return this._themeService;
  }

  public defineThemeIconPath(state: ThemeCollection): string {
    return `./../../../../assets/svgs/${state}-icon.svg`;
  }
}
