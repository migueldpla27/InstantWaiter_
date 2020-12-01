import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRestaurantPage } from './login-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRestaurantPageRoutingModule {}
