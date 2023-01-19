import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTypographyComponent } from "../../atoms/typography/header-typography/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { ParagraphTypographyComponent } from "../../atoms/typography/paragraph-typography/paragraph-typography.component";

@Component({
    selector: 'app-my-academic-career',
    standalone: true,
    templateUrl: './my-academic-career.component.html',
    styleUrls: ['./my-academic-career.component.scss'],
    imports: [CommonModule, HeaderTypographyComponent, DividerComponent, ParagraphTypographyComponent]
})
export class MyAcademicCareerComponent {

}
