import { TestBed } from '@angular/core/testing';
import { JestIconComponent } from './jest-icon.component';

describe('JestIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JestIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(JestIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
