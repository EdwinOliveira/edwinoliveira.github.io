import { TestBed } from '@angular/core/testing';
import { IconCollection } from 'src/app/shared/@constants/icon.collection';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe("SocialNetworkIconCollection", () => {
    it("should contain GITHUB_ICON", () => {
      const fixture = TestBed.createComponent(NavbarComponent);
      const app = fixture.componentInstance;

      expect(app.socialNetworkIconCollection).toContain(IconCollection.GITHUB);
    })

    it("should contain LINKEDIN_ICON", () => {
      const fixture = TestBed.createComponent(NavbarComponent);
      const app = fixture.componentInstance;

      expect(app.socialNetworkIconCollection).toContain(IconCollection.LINKEDIN);
    })
  })

  describe("ServiceIconCollection", () => {
    it("should contain THEME_ICON", () => {
      const fixture = TestBed.createComponent(NavbarComponent);
      const app = fixture.componentInstance;

      expect(app.serviceIconCollection).toContain(IconCollection.THEME);
    })
  })
});
