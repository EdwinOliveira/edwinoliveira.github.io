import { TestBed } from '@angular/core/testing';
import { AngularIconComponent } from './angular-icon.component';

describe('AngularIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AngularIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
