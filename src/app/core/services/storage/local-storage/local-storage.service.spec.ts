import { TestBed } from '@angular/core/testing';
import { LocaleCollection } from 'src/app/shared/@constants/locale.collection';
import { TokenCollection } from 'src/app/shared/@constants/token.collection';
import { AbstractStorageService } from '../storage-service.abstract';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let storageService: AbstractStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AbstractStorageService,
          useClass: LocalStorageService,
        },
      ],
    });

    storageService = TestBed.inject(AbstractStorageService);
  });

  afterEach(() => {
    storageService.clearTokenCollection();
  })

  it("should create the LOCALE_TOKEN as EN", () => {
    storageService.createToken(TokenCollection.LOCALE, LocaleCollection.EN)

    expect(storageService.fetchToken(TokenCollection.LOCALE)).toBe(LocaleCollection.EN)
  })

  it("should fetch the LOCALE_TOKEN as EN", () => {
    storageService.createToken(TokenCollection.LOCALE, LocaleCollection.EN)

    expect(storageService.fetchToken(TokenCollection.LOCALE)).toBe(LocaleCollection.EN)
  })

  it("should remove the LOCALE_TOKEN", () => {
    storageService.createToken(TokenCollection.LOCALE, LocaleCollection.EN)
    storageService.clearToken(TokenCollection.LOCALE)

    expect(storageService.fetchToken(TokenCollection.LOCALE)).toBeNull();
  })

  it("should clear the TOKEN_COLLECTION", () => {
    storageService.createToken(TokenCollection.LOCALE, LocaleCollection.EN)
    storageService.clearToken(TokenCollection.LOCALE)

    expect(storageService.fetchToken(TokenCollection.LOCALE)).toBeNull();
  })
});
