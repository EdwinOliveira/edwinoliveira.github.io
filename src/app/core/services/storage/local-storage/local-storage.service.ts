import { Injectable } from '@angular/core';
import { TokenCollection } from 'src/app/shared/@constants/token.collection';
import { AbstractStorageService } from '../storage-service.abstract';

@Injectable({ providedIn: 'root' })
export class LocalStorageService extends AbstractStorageService {
  public fetchToken<T>(name: TokenCollection): T {
    const token = localStorage.getItem(name);

    return token !== null ? JSON.parse(token) : null;
  }

  public createToken<T>(name: TokenCollection, data: T): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  public clearToken(name: TokenCollection): void {
    localStorage.removeItem(name);
  }

  public clearTokenCollection(): void {
    localStorage.clear();
  }
}
