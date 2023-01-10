import { TestBed } from '@angular/core/testing';
import { BrandTypographyComponent } from './brand-typography.component';

describe('BrandTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandTypographyComponent],
    }).compileComponents();
  });

  it("should contain an SPAN because CONTENT is @NonNull", () => {
    const fixture = TestBed.createComponent(BrandTypographyComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;
    
    component.content = "DOliveira";

    fixture.detectChanges();

    expect(nativeElement.querySelector(".wrapper")).toBeTruthy();
  })

  it("shouldn't contain an SPAN because CONTENT is @Null", () => {
    const fixture = TestBed.createComponent(BrandTypographyComponent);
    const nativeElement = fixture.nativeElement;

    expect(nativeElement.querySelector(".wrapper")).toBeFalsy();
  })

});
