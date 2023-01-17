import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/shared/services/storage/local-storage/local-storage.service';
import { AbstractStorage } from 'src/app/shared/services/storage/storage.abstract';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { AzureIconComponent } from './azure-icon.component';

describe('AzureIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureIconComponent],
      providers: [ThemeService,
        {
          provide: AbstractStorage,
          useClass: LocalStorageService,
        }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AzureIconComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
