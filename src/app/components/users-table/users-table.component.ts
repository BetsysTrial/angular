import { AfterViewInit, Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { selectUsersList } from '../../store/users/users.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements AfterViewInit {
    @Input() loggedUser!: User;

    users: User[] = [];

    constructor(private readonly store: Store<AppState>) {}

    ngAfterViewInit() {
        this.store.select(selectUsersList).subscribe(users => this.users = users);
    }

    getFullName = () => this.loggedUser.name + ' - ' + this.loggedUser.surname;
}
