import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-theme-icon',
  template: '<img class="wrapper" (click)="this.isDarkTheme = !this.isDarkTheme" [src]="this.iconPath" />',
  styles: ['.wrapper { height: 1.25rem; }'],
  imports: [CommonModule],
})
export class ThemeIconComponent {
  private _iconPath: string = './../../../../assets/svgs/moon-icon.svg';
  private _isDarkTheme: boolean = false;

  public get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  public set isDarkTheme(value: boolean) {
    this._isDarkTheme = value;
  }

  public get iconPath(): string {
    if (this.isDarkTheme) {
      this._iconPath = './../../../../assets/svgs/sun-icon.svg';
    } else {
      this._iconPath = './../../../../assets/svgs/moon-icon.svg';
    }

    return this._iconPath;
  }
}
