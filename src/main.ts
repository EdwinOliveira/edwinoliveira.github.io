import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LocalStorageService } from './app/core/services/storage/local-storage/local-storage.service';
import { AbstractStorageService } from './app/core/services/storage/storage-service.abstract';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: AbstractStorageService,
      useClass: LocalStorageService,
    },
  ],
}).catch((err) => {
  console.error(err);
});
