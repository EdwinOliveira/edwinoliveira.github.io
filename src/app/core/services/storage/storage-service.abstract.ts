import { TokenCollection } from "src/app/shared/@constants/token.collection";

export abstract class AbstractStorageService {
  abstract fetchToken<T>(name: TokenCollection): T;
  abstract createToken<T>(name: TokenCollection, data: T): void;
  abstract clearToken(name: TokenCollection): void;
  abstract clearTokenCollection(): void;
}
