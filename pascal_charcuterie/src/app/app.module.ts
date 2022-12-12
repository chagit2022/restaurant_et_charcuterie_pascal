import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusRestaurantComponent } from './components/menus-restaurant/menus-restaurant.component';
import { FabrikComponent } from './components/fabrik/fabrik.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommandeFabrikComponent } from './components/commande-fabrik/commande-fabrik.component';


@NgModule({
  declarations: [
    AppComponent,
    MenusRestaurantComponent,
    FabrikComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CommandeFabrikComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
