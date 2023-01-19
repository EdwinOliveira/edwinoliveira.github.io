import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTypographyComponent } from "../../atoms/typography/header-typography/header-typography.component";
import { ParagraphTypographyComponent } from "../../atoms/typography/paragraph-typography/paragraph-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";

@Component({
    selector: 'app-about-me',
    standalone: true,
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    imports: [CommonModule, HeaderTypographyComponent, ParagraphTypographyComponent, DividerComponent]
})
export class AboutMeComponent {

}
