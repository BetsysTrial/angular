import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { loadUsersAction, loadUsersSuccessAction } from './users.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() => this.actions$.pipe(
            ofType(loadUsersAction),
            switchMap(() => this.userService.getUsersList().pipe(
                map(users => loadUsersSuccessAction({users}))
            )),
        )
    );

    constructor(private actions$: Actions,
                private userService: UserService) {
    }
}

