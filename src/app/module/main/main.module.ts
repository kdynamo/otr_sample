import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouteAdjustComponent } from './route-adjust/route-adjust.component';
import { EditRowComponent } from './edit-row/edit-row.component';
import { AddRowComponent } from './add-row/add-row.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, RouteAdjustComponent, EditRowComponent, AddRowComponent]
})
export class MainModule { }
