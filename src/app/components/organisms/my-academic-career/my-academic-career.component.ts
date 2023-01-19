import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTypographyComponent } from "../../atoms/typography/header-typography/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { TypescriptIconComponent } from '../../atoms/icons/ts-icon/ts-icon.component';
import { AngularIconComponent } from '../../atoms/icons/angular-icon/angular-icon.component';
import { CssIconComponent } from '../../atoms/icons/css-icon/css-icon.component';
import { HtmlIconComponent } from '../../atoms/icons/html-icon/html-icon.component';
import { JasmineIconComponent } from '../../atoms/icons/jasmine-icon/jasmine-icon.component';
import { JavaIconComponent } from '../../atoms/icons/java-icon/java-icon.component';
import { JestIconComponent } from '../../atoms/icons/jest-icon/jest-icon.component';
import { NodeIconComponent } from '../../atoms/icons/node-icon/node-icon.component';
import { PhpIconComponent } from '../../atoms/icons/php-icon/php-icon.component';
import { ScssIconComponent } from '../../atoms/icons/scss-icon/scss-icon.component';
import { VueIconComponent } from '../../atoms/icons/vue-icon/vue-icon.component';
import { SpanTypographyComponent } from '../../atoms/typography/span-typography/span-typography.component';

@Component({
    selector: 'app-my-academic-career',
    standalone: true,
    templateUrl: './my-academic-career.component.html',
    styleUrls: ['./my-academic-career.component.scss'],
    imports: [CommonModule, HeaderTypographyComponent, DividerComponent, SpanTypographyComponent, TypescriptIconComponent, PhpIconComponent, NodeIconComponent, AngularIconComponent, JasmineIconComponent, JavaIconComponent, JestIconComponent, VueIconComponent, HtmlIconComponent, CssIconComponent, ScssIconComponent],
})
export class MyAcademicCareerComponent {

}
