import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store/app.state';
import { loadUsers } from './store/users/users.actions';
import { getUsers } from './store/users/users.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Betsys trial day app'
  users$: Observable<User[]>;

  constructor (
    private store: Store<AppState>
  ) {
    this.users$ = store.select(getUsers);
    console.log(`Users: ${this.users$}`)
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
