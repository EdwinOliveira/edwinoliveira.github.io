import { Component } from '@angular/core';
import { DividerComponent } from "../../atoms/divider/divider.component";
import { AboutMeIconComponent } from "../../atoms/icons/about-me-icon/about-me-icon.component";
import { WallpaperIconComponent } from "../../atoms/icons/wallpaper-icon/wallpaper-icon.component";
import { BusinessIconComponent } from "../../atoms/icons/business-icon/business-icon.component";
import { AcademicIconComponent } from "../../atoms/icons/academic-icon/academic-icon.component";
import { TechStackIconComponent } from "../../atoms/icons/tech-stack-icon/tech-stack-icon.component";
import { LinkedinIconComponent } from "../../atoms/icons/linkedin-icon/linkedin-icon.component";
import { GithubIconComponent } from "../../atoms/icons/github-icon/github-icon.component";
import { ThemeIconComponent } from "../../atoms/icons/theme-icon/theme-icon.component";

@Component({
    standalone: true,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss'],
    imports: [DividerComponent, AboutMeIconComponent, WallpaperIconComponent, BusinessIconComponent, AcademicIconComponent, TechStackIconComponent, LinkedinIconComponent, GithubIconComponent, ThemeIconComponent]
})

export class SidebarComponent {}
