import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { __importDefault } from 'tslib';

// components
import { MenusRestaurantComponent } from './components/menus-restaurant/menus-restaurant.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FabrikComponent } from './components/fabrik/fabrik.component';
import { CommandeFabrikComponent } from './components/commande-fabrik/commande-fabrik.component';

const routes: Routes = [
  { path: '', component: MenusRestaurantComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'fabrik', component: FabrikComponent},
  { path: 'commande-fabrik', component: CommandeFabrikComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
