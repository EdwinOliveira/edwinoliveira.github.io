import { Injectable } from '@angular/core';
import { TokenCollection } from 'src/app/shared/@constants/token.collection';
import { AbstractStorage } from '../storage.abstract';

@Injectable({providedIn: 'root'})
export class LocalStorageService extends AbstractStorage {
  public override fetchToken<T>(name: TokenCollection): T {
    const token = localStorage.getItem(name);

    return token !== null ? JSON.parse(token) : null;
  }

  public override createToken<T>(name: TokenCollection, data: T): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  public override deleteToken(name: TokenCollection): void {
    localStorage.removeItem(name);
  }

  public override deleteTokenCollection(): void {
    localStorage.clear();
  }
}