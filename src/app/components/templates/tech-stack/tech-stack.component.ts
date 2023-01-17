import { Component } from '@angular/core';
import { HeaderTypographyComponent } from "../../atoms/typographies/header/header-typography.component";
import { DividerComponent } from "../../atoms/divider/divider.component";
import { AngularIconComponent } from "../../atoms/icons/angular-icon/angular-icon.component";
import { NestIconComponent } from "../../atoms/icons/nest-icon/nest-icon.component";
import { NodeIconComponent } from "../../atoms/icons/node-icon/node-icon.component";
import { JavaIconComponent } from "../../atoms/icons/java-icon/java-icon.component";
import { TypescriptIconComponent } from "../../atoms/icons/typescript-icon/typescript-icon.component";
import { HtmlIconComponent } from "../../atoms/icons/html-icon/html-icon.component";
import { CssIconComponent } from "../../atoms/icons/css-icon/css-icon.component";
import { AzureIconComponent } from "../../atoms/icons/azure-icon/azure-icon.component";

@Component({
    standalone: true,
    selector: 'app-tech-stack',
    templateUrl: 'tech-stack.component.html',
    styleUrls: ["tech-stack.component.scss"],
    imports: [HeaderTypographyComponent, DividerComponent, AngularIconComponent, NestIconComponent, NodeIconComponent, JavaIconComponent, TypescriptIconComponent, HtmlIconComponent, CssIconComponent, AzureIconComponent]
})
export class TechStackComponent {}
