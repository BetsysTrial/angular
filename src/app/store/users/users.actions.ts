import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';

export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ payload: User[] }>());
export const loadUsersError = createAction('[User List] Load Users Error');