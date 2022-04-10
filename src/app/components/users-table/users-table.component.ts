import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent {
    @Input() users: User[] = [];
}
