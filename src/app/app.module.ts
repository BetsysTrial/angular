import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppStoreModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
