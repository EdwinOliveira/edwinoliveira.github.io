import { TestBed } from '@angular/core/testing';
import { ParagraphTypographyComponent } from './paragraph-typography.component';

describe('ParagraphTypographyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphTypographyComponent],
    }).compileComponents();
  });

  it("should contain an SPAN because CONTENT is @NonNull", () => {
    const fixture = TestBed.createComponent(ParagraphTypographyComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;
    
    component.content = "DOliveira";

    fixture.detectChanges();

    expect(nativeElement.querySelector(".wrapper")).toBeTruthy();
  })

  it("shouldn't contain an SPAN because CONTENT is @Null", () => {
    const fixture = TestBed.createComponent(ParagraphTypographyComponent);
    const nativeElement = fixture.nativeElement;

    expect(nativeElement.querySelector(".wrapper")).toBeFalsy();
  })

});
