import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppState, initialAppState } from './app.state';
import { usersReducer } from './users/users.reducer';
import { UsersEffects } from './users/users.effects';

const reducers: ActionReducerMap<AppState> = {
    usersState: usersReducer,
};

const effects = [UsersEffects];

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { initialState: initialAppState }),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({maxAge: 15})
    ],
    declarations: []
})
export class AppStoreModule {
}
