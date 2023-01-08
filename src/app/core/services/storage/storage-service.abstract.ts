export abstract class AbstractStorageService {
  abstract fetchToken<T>(name: string): T;
  abstract createToken<T>(name: string, data: T): void;
  abstract clearToken(name: string): void;
  abstract clearTokenCollection(): void;
}
