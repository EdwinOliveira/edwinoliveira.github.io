import { TestBed } from '@angular/core/testing';
import { SubBrandTypographyComponent } from './sub-brand-typography.component';

describe('SubBrandTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubBrandTypographyComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SubBrandTypographyComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
