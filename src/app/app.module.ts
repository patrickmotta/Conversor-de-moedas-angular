import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConversorService } from './conversor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [HttpClientModule, ConversorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
