import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [AppComponent, routingComponents, UserDetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
