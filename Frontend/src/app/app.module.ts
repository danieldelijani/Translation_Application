import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { DisplayResultComponentComponent } from './display-result-component/display-result-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ParentComponentComponent,
    DisplayResultComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
