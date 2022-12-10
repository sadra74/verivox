import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./pipes/filter.pipe";
import {SortPipe} from "./pipes/sort.pipe";
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    MdbCheckboxModule,
    FormsModule,
    MdbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
