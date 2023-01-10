import { TestBed } from '@angular/core/testing';
import { ThemeIconComponent } from './theme-icon.component';

describe('ThemeIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeIconComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ThemeIconComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
