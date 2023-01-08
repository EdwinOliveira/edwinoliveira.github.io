import { TestBed } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});