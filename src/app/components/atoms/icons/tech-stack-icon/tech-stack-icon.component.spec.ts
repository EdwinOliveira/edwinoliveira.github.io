import { TestBed } from '@angular/core/testing';
import { TechStackIconComponent } from './tech-stack-icon.component';

describe('TechStackIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TechStackIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TechStackIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
