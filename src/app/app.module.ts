import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameactivityComponent } from './gameactivity/gameactivity.component';
import { TeamsComponent } from './teams/teams.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AllusersComponent } from './user/allusers/allusers.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { GenericListComponent } from './generic-list/generic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GameactivityComponent,
    TeamsComponent,
    DashboardComponent,
    AllusersComponent,
    ProductlistComponent,
    GenericListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
