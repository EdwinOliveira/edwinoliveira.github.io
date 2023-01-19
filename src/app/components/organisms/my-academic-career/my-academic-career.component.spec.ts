import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcademicCareerComponent } from './my-academic-career.component';

describe('MyAcademicCareerComponent', () => {
  let component: MyAcademicCareerComponent;
  let fixture: ComponentFixture<MyAcademicCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyAcademicCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAcademicCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
