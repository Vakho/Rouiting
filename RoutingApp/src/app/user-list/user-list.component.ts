import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  sub!: Subscription;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => console.log('Error detected', err),
      complete: () => console.log('Done'),
    });

    console.log('users lsit');
  }

  navigetTo(user: User) {
    this.router.navigate(['/users', user.id]);
  }
}
