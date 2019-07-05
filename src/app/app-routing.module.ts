import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./accounts/accounts.module').then(mod => mod.AccountsModule)
  },
  {
    path: 'categories', loadChildren: () => import('./categories/categories.module').then(mod => mod.CategoriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
