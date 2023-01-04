import { Component, OnInit } from '@angular/core';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { loadUsersAction } from './store/users/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loggedUser = { name: 'John', surname: 'Doe'};

    constructor(private readonly store: Store<AppState>) {}

    ngOnInit() {
        this.store.dispatch(loadUsersAction());
    }
}
