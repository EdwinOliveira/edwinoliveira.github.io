import { TestBed } from '@angular/core/testing';
import { SubSpanTypographyComponent } from './sub-span-typography.component';

describe('SubSpanTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubSpanTypographyComponent],
    }).compileComponents();
  });

  it("should contain an SPAN because CONTENT is @NonNull", () => {
    const fixture = TestBed.createComponent(SubSpanTypographyComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;

    component.content = "DOliveira";

    fixture.detectChanges();

    expect(nativeElement.querySelector(".wrapper")).toBeTruthy();
  })

  it("shouldn't contain an SPAN because CONTENT is @Null", () => {
    const fixture = TestBed.createComponent(SubSpanTypographyComponent);
    const nativeElement = fixture.nativeElement;

    expect(nativeElement.querySelector(".wrapper")).toBeFalsy();
  })

});
