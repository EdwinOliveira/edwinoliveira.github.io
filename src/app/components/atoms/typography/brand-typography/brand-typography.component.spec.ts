import { TestBed } from '@angular/core/testing';
import { BrandTypographyComponent } from './brand-typography.component';

describe('BrandTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrandTypographyComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BrandTypographyComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
