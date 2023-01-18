import { TestBed } from '@angular/core/testing';
import { LinkedinIconComponent } from './linkedin-icon.component';

describe('LinkedinIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LinkedinIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LinkedinIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
