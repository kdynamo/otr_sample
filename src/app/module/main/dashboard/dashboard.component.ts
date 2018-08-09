import { Component, OnInit } from '@angular/core';
import { EquipmentGroup, TruckRouteService } from '../../service/truck-route/truck-route.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CellRenderPipe } from '../../shared/pipe/cell-render/cell-render.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ CellRenderPipe ]
})
export class DashboardComponent implements OnInit {
  truckRoutes: object[] = [];
  fields;
  constructor(
    private truckRouteService: TruckRouteService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fields = this.truckRouteService.getFields( );
    this.truckRouteService.getRoutes( ).subscribe( ( truckRoutes ) => { this.truckRoutes = truckRoutes } );
  }

  public getEquipmentGroup( id ) {
    return EquipmentGroup[ id ];
  }

  clickRow( e, row ) {
    console.log('Click row', e, row );
    this.router.navigate( [ '/edit-row/', { id: row.id } ] );
  }

  addVehicle( ) {
    this.router.navigate( [ '/edit-row/' ] );
  }

}
