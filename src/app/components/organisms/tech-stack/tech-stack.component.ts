import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTypographyComponent } from "../../atoms/typography/header-typography/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { AngularIconComponent } from "../../atoms/icons/angular-icon/angular-icon.component";
import { VueIconComponent } from "../../atoms/icons/vue-icon/vue-icon.component";
import { JavaIconComponent } from "../../atoms/icons/java-icon/java-icon.component";
import { TypescriptIconComponent } from "../../atoms/icons/ts-icon/ts-icon.component";
import { NestIconComponent } from "../../atoms/icons/nest-icon/nest-icon.component";
import { NodeIconComponent } from "../../atoms/icons/node-icon/node-icon.component";
import { JasmineIconComponent } from "../../atoms/icons/jasmine-icon/jasmine-icon.component";
import { JestIconComponent } from "../../atoms/icons/jest-icon/jest-icon.component";
import { AzureIconComponent } from "../../atoms/icons/azure-icon/azure-icon.component";

@Component({
    selector: 'app-tech-stack',
    standalone: true,
    templateUrl: './tech-stack.component.html',
    styleUrls: ['./tech-stack.component.scss'],
    imports: [CommonModule, HeaderTypographyComponent, DividerComponent, AngularIconComponent, VueIconComponent, JavaIconComponent, TypescriptIconComponent, NestIconComponent, NodeIconComponent, JasmineIconComponent, JestIconComponent, AzureIconComponent]
})
export class TechStackComponent {}
