import { TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutMeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AboutMeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
