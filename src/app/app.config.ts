import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {TranslateModule} from "@ngx-translate/core";
import {provideTranslation} from "./translate-loader.config";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideHttpClient(),
    provideAnimations()
  ]
};
