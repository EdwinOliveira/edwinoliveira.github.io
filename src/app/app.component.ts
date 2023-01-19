import { Component } from '@angular/core';
import { SidebarComponent } from "./components/organisms/sidebar/sidebar.component";
import { WallpaperComponent } from "./components/organisms/wallpaper/wallpaper.component";
import { AboutMeComponent } from "./components/organisms/about-me/about-me.component";
import { MyBusinessCareerComponent } from "./components/organisms/my-business-career/my-business-career.component";
import { MyAcademicCareerComponent } from "./components/organisms/my-academic-career/my-academic-career.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [SidebarComponent, WallpaperComponent, AboutMeComponent, MyBusinessCareerComponent, MyAcademicCareerComponent]
})

export class AppComponent {}
