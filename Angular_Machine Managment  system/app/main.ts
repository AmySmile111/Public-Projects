import { bootstrap } from '@angular/platform-browser-dynamic';
import {datas} from './machine/mockData';
// Our main component
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
// Our main routes
import { APP_ROUTER_PROVIDERS } from './route/app.routes';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { MachinesService } from './machine/machine.service';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
   datas,
   MachinesService,
  HTTP_PROVIDERS 
])
.catch(err => console.error(err));