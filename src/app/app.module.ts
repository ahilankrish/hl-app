import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { ListingComponent } from './listing-component/listing-component.component';
import { MainComponent } from './main-component.component';
import {routing} from "./app.routing";
import { AgentsComponent } from './agents-component.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListingComponent,
    AgentsComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
