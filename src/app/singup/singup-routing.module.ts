import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupPage } from './singup.page';

const routes: Routes = [
  {
    path: '',
    component: SingupPage
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupPageRoutingModule {}
