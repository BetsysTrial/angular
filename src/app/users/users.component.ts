import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() users$!: Observable<User[]>;

  constructor() { }

  ngOnInit(): void {
  }
}
