import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { RegistrationComponent } from 'src/registration/registration.compnent';
import { ProfileComponent } from 'src/profile/profile.component';
import { RouterModule } from '@angular/router';
import { RouteModule } from 'src/routing/route.module';
import { ImageLoaderComponent } from 'src/image-loader/image-loader.component';
import { FormsModule } from '@angular/forms'
import { PhoneNumberFormatter } from 'src/shared/pipes/phoneNumber-formatter.pipe';
import { FormatPhoneNumber } from 'src/shared/directives/format-phone.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
    ImageLoaderComponent,
    PhoneNumberFormatter,
    FormatPhoneNumber
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
