import { TestBed } from '@angular/core/testing';
import { AzureIconComponent } from './azure-icon.component';

describe('AzureIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AzureIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AzureIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
