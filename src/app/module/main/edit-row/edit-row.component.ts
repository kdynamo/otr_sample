import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruckRouteService } from '../../service/truck-route/truck-route.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent implements OnInit {
  truckRoute;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private truckRoutesService: TruckRouteService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    const truckRoute = this.truckRoutesService.getRoute( id );
    this.truckRoute = { ...truckRoute };
    if ( ! this.truckRoute.id ) {
      this.truckRoute.availability = {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      };
    }

  }

  cancelUpdate( ) {
    this.router.navigate( [ '/' ] );
  }

  update( form, e ) {
    this.truckRoutesService.setRoute( this.truckRoute );
    this.router.navigate( [ '/' ] );
  }

  debug( ...args ) {
    console.log( 'DEBUG', ...args );
  }
}
