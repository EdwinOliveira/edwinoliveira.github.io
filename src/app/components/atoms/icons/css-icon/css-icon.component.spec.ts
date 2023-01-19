import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssIconComponent } from './css-icon.component';

describe('CssIconComponent', () => {
  let component: CssIconComponent;
  let fixture: ComponentFixture<CssIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CssIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
