import { Component } from '@angular/core';
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";

@Component({
    standalone: true,
    selector: 'app-about-me',
    template: `
        <div class="wrapper">
            <div class="wrapper--box">
                <div class="wrapper--box header">
                    <app-header-typography [content]="'DOliveira'"></app-header-typography>
                </div>
                <div class="wrapper--box paragraph"></div>
            </div>
        </div>
    `,
    imports: [HeaderTypographyComponent]
})

export class AboutMeComponent {}