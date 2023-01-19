import { TestBed } from '@angular/core/testing';
import { NestIconComponent } from './nest-icon.component';

describe('NestIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NestIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NestIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
