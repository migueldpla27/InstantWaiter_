import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login-user',
    loadChildren: () => import('./login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'login-restaurant',
    loadChildren: () => import('./login-restaurant/login-restaurant.module').then( m => m.LoginRestaurantPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
