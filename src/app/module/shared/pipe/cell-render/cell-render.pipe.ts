import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellrender'
})
export class CellRenderPipe implements PipeTransform {

  transform(value: any, row?, column?, args?: any): any {
    let split = column.field.split( '.' );
    let field = row;
    split.forEach( ( leg ) => {
      field = field[ leg ];
    } );

    if ( column.format === 'check' ) {
      field = ( field ) ? 'X' : '';
    }
    return field;
  }

}
