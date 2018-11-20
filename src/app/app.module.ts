import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompNameComponent } from './new-comp-name/new-comp-name.component';
import { NewCompName1Component } from './new-comp-name1/new-comp-name1.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompNameComponent,
    NewCompName1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
