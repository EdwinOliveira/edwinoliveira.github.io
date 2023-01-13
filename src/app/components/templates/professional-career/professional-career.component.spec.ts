import { TestBed } from '@angular/core/testing';
import { ProfessionalCareerComponent } from './professional-career.component';

describe('ProfessionalCareerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProfessionalCareerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProfessionalCareerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
