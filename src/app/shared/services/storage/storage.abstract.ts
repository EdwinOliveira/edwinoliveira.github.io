import { TokenCollection } from "../../@constants/token.collection";

export abstract class AbstractStorage {
  public abstract fetchToken<T>(name: TokenCollection): T;
  public abstract createToken<T>(name: TokenCollection, data: T): void;
  public abstract deleteToken(name: TokenCollection): void;
  public abstract deleteTokenCollection(): void;
}