import { createSelector } from '@ngrx/store';
import { UsersState } from './users.state';
import { AppState } from '../app.state';

export const selectUserState = (state: AppState) => state.usersState;
export const getUsers = createSelector(
  selectUserState,
  (state: UsersState) => state.users
);
