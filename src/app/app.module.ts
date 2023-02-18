import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertationComponent } from 'src/components/convertation/convertation.component';
import { HeaderComponent } from 'src/components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Convertation_itemComponent } from 'src/components/convertation_item/convertation_item.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ConvertationComponent,
        Convertation_itemComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ]
})
export class AppModule { }
