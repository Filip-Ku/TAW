import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { DataService } from './app/services/data.service';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || []), DataService] // Dodanie DataService do providerów
}).catch((err) => console.error(err));
