import { Injectable } from '@angular/core';
import { IconCollection } from 'src/app/shared/@constants/icon.collection';

@Injectable({providedIn: 'root'})
export class IconService {
  public get linkedinIcon(): IconCollection {
    return IconCollection.LINKEDIN;
  }

  public get githubIcon(): IconCollection {
    return IconCollection.GITHUB;
  }

  public get themeIcon(): IconCollection {
    return IconCollection.THEME;
  }
}