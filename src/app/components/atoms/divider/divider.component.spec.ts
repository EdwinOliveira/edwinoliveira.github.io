import { TestBed } from '@angular/core/testing';
import { DividerComponent } from './divider.component';

describe('DividerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DividerComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(DividerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
