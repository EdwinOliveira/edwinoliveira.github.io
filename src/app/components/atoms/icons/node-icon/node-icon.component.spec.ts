import { TestBed } from '@angular/core/testing';
import { NodeIconComponent } from './node-icon.component';

describe('NodeIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NodeIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NodeIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
