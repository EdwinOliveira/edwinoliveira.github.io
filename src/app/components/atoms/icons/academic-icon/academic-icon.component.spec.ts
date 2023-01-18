import { TestBed } from '@angular/core/testing';
import { AcademicIconComponent } from './academic-icon.component';

describe('AcademicIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AcademicIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AcademicIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
