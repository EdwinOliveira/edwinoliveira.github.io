import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphTypographyComponent } from './paragraph-typography.component';

describe('ParagraphTypographyComponent', () => {
  let component: ParagraphTypographyComponent;
  let fixture: ComponentFixture<ParagraphTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ParagraphTypographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
