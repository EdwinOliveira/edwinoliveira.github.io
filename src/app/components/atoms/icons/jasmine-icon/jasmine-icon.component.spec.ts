import { TestBed } from '@angular/core/testing';
import { JasmineIconComponent } from './jasmine-icon.component';

describe('JasmineIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JasmineIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(JasmineIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
