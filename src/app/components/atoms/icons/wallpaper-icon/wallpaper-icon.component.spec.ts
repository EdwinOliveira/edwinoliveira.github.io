import { TestBed } from '@angular/core/testing';
import { WallpaperIconComponent } from './wallpaper-icon.component';

describe('WallpaperIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WallpaperIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(WallpaperIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
