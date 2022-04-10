import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { UsersState } from './users.state';

export const selectUserState = (state: AppState) => state.usersState;
export const selectUsersList = createSelector(selectUserState, (users: UsersState) => users.list);
