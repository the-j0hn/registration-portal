import { NgModule } from "@angular/core"
import { HomeComponent } from "src/home/home.component"
import { RegistrationComponent } from "src/registration/registration.compnent";
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: '**', redirectTo: '', component: HomeComponent },

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class RouteModule {

}