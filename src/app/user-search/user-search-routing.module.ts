import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchListComponent } from './user-search-list/user-search-list.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSearchRoutingModule { }
