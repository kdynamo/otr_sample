import { Injectable } from '@angular/core';
import { of, observable, Observable } from 'rxjs';
import { setupRouter } from '@angular/router/src/router_module';


export enum EquipmentGroup {
  Flatebed = 1,
  Tanker,
  Van,
  Reffer
};



@Injectable({
  providedIn: 'root'
})
export class TruckRouteService {
  truckRouteFields = [ {
    field: 'id',
    header: 'Id'
  }, {
    field: 'equipmentGroupId',
    header: 'EId'
  }, {
    field: 'origin',
    header: 'Origin'
  }, {
    field: 'destination',
    header: 'Destination'
  }, {
    field: 'availability.monday',
    header: 'Monday',
    format: 'check'
  }, {
    field: 'availability.tuesday',
    header: 'Tuesday',
    format: 'check'
  }, {
    field: 'availability.wednesday',
    header: 'Wednesday',
    format: 'check'
  }, {
    field: 'availability.thursday',
    header: 'Thursday',
    format: 'check'
  }, {
    field: 'availability.friday',
    header: 'Friday',
    format: 'check'
  }, {
    field: 'availability.saturday',
    header: 'Saturday',
    format: 'check'
  }, {
    field: 'availability.sunday',
    header: 'Sunday',
    format: 'check'
  }];
  truckRoutes = [ {
    id: 1,
    equipmentGroupId: 2,
    origin: 60564,
    destination: 52001,
    availability: {
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false
    }
  }, {
      id: 2,
      equipmentGroupId: 3,
      origin: 60056,
      destination: 80525,
      availability: {
        monday: false,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false
      }
  }, {
        id: 3,
        equipmentGroupId: 3,
        origin: 60056,
        destination: 80525,
        availability: {
          monday: false,
          tuesday: false,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: false,
          sunday: false
        }
  } ];

  constructor() { }

  getRoutes( ): Observable<any> {
    return of( this.truckRoutes );
  }

  getRoute( id ): Observable<any> {
    let finalValue = null;
    this.truckRoutes.forEach( (truckRoute, index ) => {
      if ( ! finalValue && ( truckRoute.id === parseInt(id, 10 ) ) ) {
        finalValue = truckRoute;
      }
    } );
    return finalValue;
  }
  setRoute( updatedRoute ) {

    if ( ! updatedRoute.id ) {
      updatedRoute.id = this.truckRoutes.length;
      this.truckRoutes.push( updatedRoute );
    }
    this.truckRoutes.forEach( (truckRoute, index ) => {
      if ( truckRoute.id === updatedRoute.id ) {
        this.truckRoutes[ index ] = updatedRoute;
      }
    } );
  }

  addRoute( newRoute ) {
    newRoute.id = this.truckRoutes.length;
    this.truckRoutes.push( newRoute );
  }

  getFields( ) {
    return this.truckRouteFields;
  }
}

