import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRestaurantPageRoutingModule } from './login-restaurant-routing.module';

import { LoginRestaurantPage } from './login-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRestaurantPageRoutingModule
  ],
  declarations: [LoginRestaurantPage]
})
export class LoginRestaurantPageModule {}
