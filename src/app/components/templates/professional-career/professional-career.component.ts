import { Component } from '@angular/core';
import { DividerComponent } from "../../atoms/divider/divider.component";
import { SpanTypographyComponent } from "../../atoms/typographies/span/span-typography.component";
import { SubSpanTypographyComponent } from "../../atoms/typographies/sub-span/sub-span-typography.component";
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { CompanyIconComponent } from "../../atoms/icons/company-icon/company-icon.component";

@Component({
    standalone: true,
    selector: 'app-professional-career',
    templateUrl: './professional-career.component.html',
    styleUrls: ["./professional-career.component.scss"],
    imports: [DividerComponent, SpanTypographyComponent, SubSpanTypographyComponent, HeaderTypographyComponent, CompanyIconComponent]
})

export class ProfessionalCareerComponent {}
