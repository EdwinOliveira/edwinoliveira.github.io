import { TestBed } from '@angular/core/testing';
import { WallpaperComponent } from './wallpaper.component';

describe('WallpaperComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WallpaperComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(WallpaperComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
