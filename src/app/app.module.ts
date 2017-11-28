import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';

import { ItemService } from './item.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DashboardComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
