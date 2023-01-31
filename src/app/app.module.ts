import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ChunkPipe } from './pipes/chunk.pipe';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        ChunkPipe,
    ],
    imports: [
        BrowserModule,
        AppStoreModule,
        HttpClientModule
    ],
    exports: [
        ChunkPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
