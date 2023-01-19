import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessCareerComponent } from './my-business-career.component';

describe('MyBusinessCareerComponent', () => {
  let component: MyBusinessCareerComponent;
  let fixture: ComponentFixture<MyBusinessCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyBusinessCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBusinessCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
