import { Component } from '@angular/core';
import { BrandTypographyComponent } from "../../atoms/typography/brand-typography/brand-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { SubBrandTypographyComponent } from "../../atoms/typography/sub-brand-typography/sub-brand-typography.component";

@Component({
    standalone: true,
    selector: 'app-wallpaper',
    templateUrl: 'wallpaper.component.html',
    styleUrls: ["wallpaper.component.scss"],
    imports: [BrandTypographyComponent, DividerComponent, SubBrandTypographyComponent]
})

export class WallpaperComponent {}
