import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AirportsGridComponent } from "./airports/airports-grid/airports-grid.component";
import { AirportsAddComponent } from "./airports/airports-add/airports-add.component";
import { AirportsEditComponent } from "./airports/airports-edit/airports-edit.component";
import { AirlinesGridComponent } from "./airlines/airlines-grid/airlines-grid.component";
import { AirlinesAddComponent } from "./airlines/airlines-add/airlines-add.component";
import { AirlinesEditComponent } from "./airlines/airlines-edit/airlines-edit.component";
import { CountriesGridComponent } from "./contries/countries-grid/countries-grid.component";
import { CountriesAddComponent } from "./contries/countries-add/countries-add.component";
import { CountriesEditComponent } from "./contries/countries-edit/countries-edit.component";
import { StatesGridComponent } from "./states/states-grid/states-grid.component";
import { StatesAddComponent } from "./states/states-add/states-add.component";
import { StatesEditComponent } from "./states/states-edit/states-edit.component";
import { CitiesGridComponent } from "./cities/cities-grid/cities-grid.component";
import { CitiesAddComponent } from "./cities/cities-add/cities-add.component";
import { CitiesEditComponent } from "./cities/cities-edit/cities-edit.component";
import { UsersGridComponent } from "./users/users-grid/users-grid.component";
import { UsersAddComponent } from "./users/users-add/users-add.component";
import { UsersEditComponent } from "./users/users-edit/users-edit.component";
import { DashboardComponent } from './dashboard/dashboard.component';

export function tokenGetter() {
  return localStorage.getItem('throttle_token');
}

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    AirportsGridComponent,
    AirportsAddComponent,
    AirportsEditComponent,
    AirlinesGridComponent,
    AirlinesAddComponent,
    AirlinesEditComponent,
    CountriesGridComponent,
    CountriesAddComponent,
    CountriesEditComponent,
    StatesGridComponent,
    StatesAddComponent,
    StatesEditComponent,
    CitiesGridComponent,
    CitiesAddComponent,
    CitiesEditComponent,
    UsersGridComponent,
    UsersAddComponent,
    UsersEditComponent,
      DashboardComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, JwtModule.forRoot({
    config: {
      tokenGetter,
      allowedDomains: ['http://api.ankaiahmuppana.com'],
      disallowedRoutes: ['http://api.ankaiahmuppana.com/api/auth/signin'],
    },
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
