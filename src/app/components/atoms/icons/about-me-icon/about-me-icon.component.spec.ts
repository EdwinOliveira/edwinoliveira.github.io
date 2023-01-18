import { TestBed } from '@angular/core/testing';
import { AboutMeIconComponent } from './about-me-icon.component';

describe('AboutMeIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutMeIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AboutMeIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
