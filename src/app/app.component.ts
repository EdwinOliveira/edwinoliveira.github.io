import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-navbar></app-navbar>
    </div>
  `,
  styles: [".wrapper{display: flex; flex-direction: column;}"],
  providers: [ThemeService],
  imports: [NavbarComponent],
})
export class AppComponent {
  public constructor(private readonly _themeService: ThemeService) {
    this._themeService.definePrimaryState();
  }
}
