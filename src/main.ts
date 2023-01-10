import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LocalStorageService } from './app/shared/services/storage/local-storage/local-storage.service';
import { AbstractStorage } from './app/shared/services/storage/storage.abstract';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: AbstractStorage,
      useClass: LocalStorageService,
    }
  ]
}).catch((err) => {
  console.error(err);
});
