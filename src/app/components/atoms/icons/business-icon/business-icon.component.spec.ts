import { TestBed } from '@angular/core/testing';
import { BusinessIconComponent } from './business-icon.component';

describe('BusinessIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BusinessIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BusinessIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
