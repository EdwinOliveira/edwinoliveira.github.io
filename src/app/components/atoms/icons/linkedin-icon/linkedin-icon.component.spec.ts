import { TestBed } from '@angular/core/testing';
import { LinkedInIconComponent } from './linkedin-icon.component';

describe('LinkedInIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedInIconComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LinkedInIconComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
