import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './ls-root/app.component';
import {LsLandingComponent} from './ls-landing/ls-landing.component';
import {LsLandingSelectorComponent} from './ls-landing/ls-landing-selector/ls-landing-selector.component';
import {LsSearchLaunchesComponent} from './ls-landing/ls-landing-launches/ls-landing-launches.component';
import {RDXStore} from './stores/store.state';


@NgModule({
  declarations: [
    AppComponent,
    LsLandingComponent,
    LsLandingSelectorComponent,
    LsSearchLaunchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [
    RDXStore
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
