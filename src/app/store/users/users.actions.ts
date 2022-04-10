import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsersAction = createAction('[User] load users');
export const loadUsersSuccessAction = createAction('[User] load users :: success', props<{users: User[]}>());
