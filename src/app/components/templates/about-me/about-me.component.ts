import { Component } from '@angular/core';
import { ParagraphTypographyComponent } from "../../atoms/typographies/paragraph/paragraph-typography.component";
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";

@Component({
    standalone: true,
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ["./about-me.component.scss"],
    imports: [ParagraphTypographyComponent, HeaderTypographyComponent, DividerComponent]
})

export class AboutMeComponent {}
