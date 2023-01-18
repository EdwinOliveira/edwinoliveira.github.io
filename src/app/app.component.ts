import { Component } from '@angular/core';
import { SidebarComponent } from "./components/organisms/sidebar/sidebar.component";
import { WallpaperComponent } from "./components/organisms/wallpaper/wallpaper.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [SidebarComponent, WallpaperComponent]
})

export class AppComponent {}
