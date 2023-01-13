import { TestBed } from '@angular/core/testing';
import { AcademicCareerComponent } from './academic-career.component';

describe('AcademicCareerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AcademicCareerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AcademicCareerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
