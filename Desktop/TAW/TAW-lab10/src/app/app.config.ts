import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {authInterceptor} from "./services/auth.interceptor";

export const appConfig: ApplicationConfig = {
 providers: [
   provideRouter(routes),
   provideClientHydration(),
   provideHttpClient(withInterceptors([authInterceptor])),
 ]
};
