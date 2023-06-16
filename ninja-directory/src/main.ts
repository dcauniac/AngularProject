import {APP_ROUTES_PROVIDER} from './app/app.routes'
import { AppComponent } from './app/app.component';
import { bootstrapModule } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


bootstrapModule(AppComponent, [APP_ROUTES_PROVIDER]);
