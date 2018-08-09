import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/main/dashboard/dashboard.component';
import { EditRowComponent } from './module/main/edit-row/edit-row.component';
const routes: Routes = [ {
  path: '', component: DashboardComponent
}, {
  path: 'edit-row', component: EditRowComponent,
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
