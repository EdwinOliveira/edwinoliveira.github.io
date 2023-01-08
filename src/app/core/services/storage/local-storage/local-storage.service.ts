import { Injectable } from '@angular/core';
import { AbstractStorageService } from '../storage-service.abstract';

@Injectable({ providedIn: 'root' })
export class LocalStorageService extends AbstractStorageService {
  public fetchToken<T>(name: string): T {
    const token = localStorage.getItem(name);

    return token !== null ? JSON.parse(token) : null;
  }

  public createToken<T>(name: string, data: T): void {
    localStorage.setItem(name, JSON.stringify(data));
  }

  public clearToken(name: string): void {
    localStorage.removeItem(name);
  }

  public clearTokenCollection(): void {
    localStorage.clear();
  }
}
