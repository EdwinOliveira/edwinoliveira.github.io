import { TestBed } from '@angular/core/testing';
import { JavaIconComponent } from './java-icon.component';

describe('JavaIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JavaIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(JavaIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
