import { Component, OnInit } from '@angular/core';
import { selectUsersList } from './store/users/users.selectors';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { loadUsersAction } from './store/users/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    users$: Observable<User[]> = this.store.select(selectUsersList);

    constructor(private readonly store: Store<AppState>) {}

    ngOnInit() {
        this.store.dispatch(loadUsersAction());
    }
}
