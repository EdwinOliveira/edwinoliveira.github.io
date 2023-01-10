import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeCollection } from '../../@constants/theme.collection';
import { TokenCollection } from '../../@constants/token.collection';
import { AbstractStorage } from '../storage/storage.abstract';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private readonly _state: BehaviorSubject<ThemeCollection>;
  private readonly _state$: Observable<ThemeCollection>;

  public constructor(
    private readonly _storage: AbstractStorage,
  ) {
    this._state = new BehaviorSubject<ThemeCollection>(ThemeCollection.LIGHT);
    this._state$ = this._state.asObservable();
  }

  public get state$(): Observable<ThemeCollection> {
    return this._state$;
  }

  public defineState(): void {
    const token = this._storage.fetchToken<ThemeCollection>(TokenCollection.THEME);

    this.updateState(token ?? ThemeCollection.LIGHT)
  }

  public updateState(theme: ThemeCollection): void {
    this._state.next(theme);
    this._storage.createToken(TokenCollection.THEME, theme);
  }

  public isDarkTheme(theme: ThemeCollection): boolean {
    return theme === ThemeCollection.DARK;
  }

  public isLightTheme(theme: ThemeCollection): boolean {
    return theme === ThemeCollection.LIGHT;
  }
}