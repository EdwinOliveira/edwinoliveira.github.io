import { TestBed } from '@angular/core/testing';
import { ThemeIconComponent } from './theme-icon.component';

describe('ThemeIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ThemeIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ThemeIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
