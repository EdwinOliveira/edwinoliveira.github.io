import { TestBed } from '@angular/core/testing';
import { PhpIconComponent } from './php-icon.component';

describe('PhpIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhpIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PhpIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
