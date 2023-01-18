import { TestBed } from '@angular/core/testing';
import { GithubIconComponent } from './github-icon.component';

describe('GithubIconComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GithubIconComponent
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GithubIconComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
