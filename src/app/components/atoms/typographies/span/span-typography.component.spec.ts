import { TestBed } from '@angular/core/testing';
import { SpanTypographyComponent } from './span-typography.component';

describe('SpanTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpanTypographyComponent],
    }).compileComponents();
  });

  it("should contain an SPAN because CONTENT is @NonNull", () => {
    const fixture = TestBed.createComponent(SpanTypographyComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;

    component.content = "DOliveira";

    fixture.detectChanges();

    expect(nativeElement.querySelector(".wrapper")).toBeTruthy();
  })

  it("shouldn't contain an SPAN because CONTENT is @Null", () => {
    const fixture = TestBed.createComponent(SpanTypographyComponent);
    const nativeElement = fixture.nativeElement;

    expect(nativeElement.querySelector(".wrapper")).toBeFalsy();
  })

});
