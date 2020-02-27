import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
