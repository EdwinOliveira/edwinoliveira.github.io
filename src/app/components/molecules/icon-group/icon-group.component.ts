import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconCollection } from 'src/app/shared/@constants/icon.collection';
import { IconService } from '../../atoms/icons/icon.service';
import { LinkedInIconComponent } from "../../atoms/icons/linkedin-icon/linkedin-icon.component";
import { GithubIconComponent } from "../../atoms/icons/github-icon/github-icon.component";
import { ThemeIconComponent } from '../../atoms/icons/theme-icon/theme-icon.component';

@Component({
    standalone: true,
    selector: 'app-icon-group',
    template: `
    <div class="wrapper">
      <div class="wrapper--box" *ngFor="let icon of iconCollection">
        <div *ngIf="icon === iconService.linkedinIcon" class="wrapper--box linkedin-icon">
          <a target="_blank" href="https://www.linkedin.com/in/diogooliveira97/">
            <app-linkedin-icon></app-linkedin-icon>
          </a>
        </div>
        <div *ngIf="icon === iconService.githubIcon" class="wrapper--box github-icon">
          <a target="_blank" href="https://github.com/EdwinOliveira">
            <app-github-icon></app-github-icon>
          </a>
        </div>
        <div *ngIf="icon === iconService.themeIcon" class="wrapper--box theme-icon">
          <app-theme-icon></app-theme-icon>
        </div>
      </div>
    </div>
  `,
  styles: [".wrapper {display: flex; flex-direction: row; align-items: center; gap: 0.25rem;}"],
    imports: [CommonModule, LinkedInIconComponent, GithubIconComponent, ThemeIconComponent]
})
export class IconGroupComponent {
  @Input() public iconCollection: Array<IconCollection> = new Array<IconCollection>();

  public constructor(
    private readonly _iconService: IconService,
  ) {}

  public get iconService(): IconService {
    return this._iconService;
  }
}
