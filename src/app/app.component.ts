import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';

@Component({
  standalone: true,
  selector: 'app-root',
  template: '',
  providers: [ThemeService],
})
export class AppComponent {
  public constructor(
    private readonly _themeService: ThemeService
  ) {
    this._themeService.definePrimaryState();
  }
}
