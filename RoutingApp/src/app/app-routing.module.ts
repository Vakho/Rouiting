import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/users', pathMatch: 'full' },
      { path: 'users/:id', component: UserDetailsComponent },
      { path: 'users', component: UserListComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [UserListComponent, UserListComponent];
