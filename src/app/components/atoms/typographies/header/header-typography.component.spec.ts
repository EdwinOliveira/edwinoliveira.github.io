import { TestBed } from '@angular/core/testing';
import { HeaderTypographyComponent } from './header-typography.component';

describe('HeaderTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTypographyComponent],
    }).compileComponents();
  });

  it("should contain an SPAN because CONTENT is @NonNull", () => {
    const fixture = TestBed.createComponent(HeaderTypographyComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;
    
    component.content = "DOliveira";

    fixture.detectChanges();

    expect(nativeElement.querySelector(".wrapper")).toBeTruthy();
  })

  it("shouldn't contain an SPAN because CONTENT is @Null", () => {
    const fixture = TestBed.createComponent(HeaderTypographyComponent);
    const nativeElement = fixture.nativeElement;

    expect(nativeElement.querySelector(".wrapper")).toBeFalsy();
  })

});
