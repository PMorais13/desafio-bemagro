import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'user-details/:userlogin',
    loadChildren: () => import('./components/user-details/user-details.module').then(m => m.UserDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
