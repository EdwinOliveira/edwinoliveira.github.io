import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTypographyComponent } from './header-typography.component';

describe('HeaderTypographyComponent', () => {
  let component: HeaderTypographyComponent;
  let fixture: ComponentFixture<HeaderTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeaderTypographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
