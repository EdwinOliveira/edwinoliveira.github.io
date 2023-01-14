import { TestBed } from '@angular/core/testing';
import { TechStackComponent } from './tech-stack.component';

describe('TechStackComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TechStackComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TechStackComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
