import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssIconComponent } from './scss-icon.component';

describe('ScssIconComponent', () => {
  let component: ScssIconComponent;
  let fixture: ComponentFixture<ScssIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ScssIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
