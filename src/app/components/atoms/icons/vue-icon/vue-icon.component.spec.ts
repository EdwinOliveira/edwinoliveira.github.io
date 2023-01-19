import { TestBed } from '@angular/core/testing';
import { VueIconComponent } from './vue-icon.component';

describe('VueIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VueIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(VueIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
