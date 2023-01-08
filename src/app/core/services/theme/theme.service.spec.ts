import { TestBed } from '@angular/core/testing';
import { ThemeCollection } from 'src/app/shared/@constants/theme.collection';
import { TokenCollection } from 'src/app/shared/@constants/token.collection';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';
import { AbstractStorageService } from '../storage/storage-service.abstract';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;
  let storageService: AbstractStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        {
          provide: AbstractStorageService,
          useClass: LocalStorageService,
        },
      ],
    });

    themeService = TestBed.inject(ThemeService);
    storageService = TestBed.inject(AbstractStorageService);
  });

  afterEach(() => {
    storageService.clearTokenCollection();
  });

  it('should contain pre-defined LIGHT_THEME', () => {
    themeService.state$.subscribe((theme) => {
      expect(theme).toBe(ThemeCollection.LIGHT);
    });
  });

  it('should contain defined LIGHT_THEME', () => {
    themeService.definePrimaryState();

    themeService.state$.subscribe((theme) => {
      expect(theme).toBe(ThemeCollection.LIGHT);
    });
  });

  it('should contain cached DARK_THEME', () => {
    storageService.createToken(TokenCollection.THEME, ThemeCollection.DARK);
    themeService.definePrimaryState();

    themeService.state$.subscribe((theme) => {
      expect(theme).toBe(ThemeCollection.LIGHT);
    });
  });

  it("should contain DARK_THEME", () => {
    themeService.setState(ThemeCollection.DARK);

    expect(themeService.isDarkTheme()).toBe(true);
  })

  it("should contain LIGHT_THEME", () => {
    themeService.setState(ThemeCollection.LIGHT);

    expect(themeService.isDarkTheme()).toBe(true);
  })
});
