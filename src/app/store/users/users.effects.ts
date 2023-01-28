import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { loadUsers, loadUsersSuccess, loadUsersError } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => this.userService.getUsers()
        .pipe(
          map(data => loadUsersSuccess({ payload: data })),
          catchError(() => of(loadUsersError()))
        )
      )
    )
  );

  constructor (
    private actions$: Actions,
    private userService: UserService
  ) {}
}

