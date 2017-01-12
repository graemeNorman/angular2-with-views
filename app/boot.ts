import 'core-js';           // ES6 polyfil
import 'zone.js/dist/zone'; // Angular uses this for change detection

// IMPORT COMPONENTS
  import {bootstrap} from '@angular/platform-browser-dynamic';
  import {ROUTER_PROVIDERS} from '@angular/router';
  import {AppComponent} from './app.component';

// Instantiate our application and specify our root level component, AppComponent and inject ROUTER_PROVIDERS as a submodule
  bootstrap(AppComponent, [
    ROUTER_PROVIDERS
  ]);
