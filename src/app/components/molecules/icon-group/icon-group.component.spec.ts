import { TestBed } from '@angular/core/testing';
import { IconCollection } from 'src/app/shared/@constants/icon.collection';
import { IconService } from '../../atoms/icons/icon.service';
import { IconGroupComponent } from './icon-group.component';

describe('IconGroupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGroupComponent],
      providers: [IconService]
    }).compileComponents();
  });

  it("should display APP_LINKEDIN_ICON because LinkedInIcon on IconCollection", () => {
    const fixture = TestBed.createComponent(IconGroupComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;

    component.iconCollection = [IconCollection.LINKEDIN];

    fixture.detectChanges();

    expect(nativeElement.querySelector(".linkedin-icon")).toBeTruthy();
  })

  it("should display APP_GITHUB_ICON because GithubIcon on IconCollection", () => {
    const fixture = TestBed.createComponent(IconGroupComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;

    component.iconCollection = [IconCollection.GITHUB];

    fixture.detectChanges();

    expect(nativeElement.querySelector(".github-icon")).toBeTruthy();
  })

  it("should display APP_THEME_ICON because ThemeIcon on IconCollection", () => {
    const fixture = TestBed.createComponent(IconGroupComponent);
    const component = fixture.componentInstance;
    const nativeElement = fixture.nativeElement;

    component.iconCollection = [IconCollection.THEME];

    fixture.detectChanges();

    expect(nativeElement.querySelector(".theme-icon")).toBeTruthy();
  })

});
