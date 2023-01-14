import { Component } from '@angular/core';
import { ParagraphTypographyComponent } from "../../atoms/typographies/paragraph/paragraph-typography.component";
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";

@Component({
    standalone: true,
    selector: 'app-tech-stack',
    templateUrl: 'tech-stack.component.html',
    styleUrls: ["tech-stack.component.scss"],
    imports: [ParagraphTypographyComponent, HeaderTypographyComponent, DividerComponent]
})
export class TechStackComponent {}
