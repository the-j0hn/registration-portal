import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { RegistrationComponent } from 'src/registration/registration.compnent';
import { ProfileComponent } from 'src/profile/profile.component';
import { RouterModule } from '@angular/router';
import { RouteModule } from 'src/routing/route.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
