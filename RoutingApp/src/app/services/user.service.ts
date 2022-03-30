import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {
    console.log('in get user');
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}users`);
  }
}
