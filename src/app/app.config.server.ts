import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const config: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const serverConfig = mergeApplicationConfig(appConfig, config);
