import { TestBed } from '@angular/core/testing';
import { ThemeCollection } from 'src/app/shared/@constants/theme.collection';
import { TokenCollection } from 'src/app/shared/@constants/token.collection';
import { AbstractStorage } from '../storage.abstract';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: AbstractStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AbstractStorage,
          useClass: LocalStorageService,
        }
      ]
    });

    service = TestBed.inject(AbstractStorage);
  });

  afterEach(() => { service.deleteTokenCollection(); })

  it("should FETCH_TOKEN containing THEME_TOKEN with LIGHT_THEME", () => {
    service.createToken(TokenCollection.THEME, ThemeCollection.LIGHT);

    expect(service.fetchToken(TokenCollection.THEME)).toBe(ThemeCollection.LIGHT);
  });

  it("should CREATE_TOKEN containing THEME_TOKEN with DARK_THEME", () => {
    service.createToken(TokenCollection.THEME, ThemeCollection.DARK);

    expect(service.fetchToken(TokenCollection.THEME)).toBe(ThemeCollection.DARK);
  });

  it("should DELETE_TOKEN containing THEME_TOKEN", () => {
    service.createToken(TokenCollection.THEME, ThemeCollection.DARK);

    service.deleteToken(TokenCollection.THEME);

    expect(service.fetchToken(TokenCollection.THEME)).toBeNull();
  });

  it("should DELETE_TOKEN_COLLECTION", () => {
    service.createToken(TokenCollection.THEME, ThemeCollection.DARK);

    service.deleteTokenCollection();

    expect(service.fetchToken(TokenCollection.THEME)).toBeNull();
  });
});
