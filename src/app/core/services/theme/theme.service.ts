import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeCollection } from 'src/app/shared/@constants/theme.collection';
import { TokenCollection } from 'src/app/shared/@constants/token.collection';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _state: BehaviorSubject<ThemeCollection>;
  private readonly _state$: Observable<ThemeCollection>;

  public constructor(
    private readonly _localStorage: LocalStorageService
  ) {
    this._state = new BehaviorSubject<ThemeCollection>(ThemeCollection.LIGHT);
    this._state$ = this._state.asObservable();
  }

  public definePrimaryState(): void {
    const theme = this._localStorage.fetchToken<ThemeCollection>(TokenCollection.THEME);

    this.setState(theme ?? ThemeCollection.LIGHT);
  }

  public setState(theme: ThemeCollection): void {
    this._state.next(theme);
    this._localStorage.createToken<ThemeCollection>(TokenCollection.THEME, theme)
  }

  public get state$(): Observable<ThemeCollection> {
    return this._state$;
  }

  public isDarkTheme(): boolean {
    return this._state.value === ThemeCollection.DARK;
  }

  public isLightTheme(): boolean {
    return this._state.value === ThemeCollection.LIGHT;
  }
}
