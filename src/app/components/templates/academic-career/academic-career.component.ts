import { Component } from '@angular/core';
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { ParagraphTypographyComponent } from "../../atoms/typographies/paragraph/paragraph-typography.component";

@Component({
    standalone: true,
    selector: 'app-academic-career',
    templateUrl: './academic-career.component.html',
    styleUrls: ["./academic-career.component.scss"],
    imports: [HeaderTypographyComponent, DividerComponent, ParagraphTypographyComponent]
})

export class AcademicCareerComponent {}
