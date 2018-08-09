import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './module/main/dashboard/dashboard.component';
import { EditRowComponent } from './module/main/edit-row/edit-row.component';
import { SharedModule } from './module/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditRowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
