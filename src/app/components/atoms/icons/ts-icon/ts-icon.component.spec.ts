import { TestBed } from '@angular/core/testing';
import { TypescriptIconComponent } from './ts-icon.component';

describe('TypescriptIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TypescriptIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(TypescriptIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
