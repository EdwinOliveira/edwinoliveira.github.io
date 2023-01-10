import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LocalStorageService } from './shared/services/storage/local-storage/local-storage.service';
import { AbstractStorage } from './shared/services/storage/storage.abstract';
import { ThemeService } from './shared/services/theme/theme.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
      providers: [ThemeService,
        {
          provide: AbstractStorage,
          useClass: LocalStorageService,
        }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
