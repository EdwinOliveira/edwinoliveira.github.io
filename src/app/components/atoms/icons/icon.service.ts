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

  public get companyIcon(): IconCollection {
    return IconCollection.COMPANY;
  }

  public get angularIcon(): IconCollection {
    return IconCollection.ANGULAR;
  }

  public get nestIcon(): IconCollection {
    return IconCollection.NEST;
  }

  public get nodeIcon(): IconCollection {
    return IconCollection.NODE;
  }
}
