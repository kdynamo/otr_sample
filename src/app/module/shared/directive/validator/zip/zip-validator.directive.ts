import { Directive, forwardRef, Attribute, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[validateZip],[validateZip][formControlName],[validateZip][formControl],[validateZip][ngModel]',
    providers: [ {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ZipValidatorDirective),
      multi: true
    } ]
})
export class ZipValidatorDirective implements Validator {
    @Input( ) zipFormat: string;
    constructor(
     // @Attribute('validateEqual') public validateEqual: string,
       // @Attribute('reverse') public reverse: string)
    ) {

    }

    static validateZip( control: FormControl ): ValidationErrors {
      let value = control.value;
      let retValue = null;
      if ( ( value === '' ) ||
           ( value && value.match && ! value.match( /^\s*\d{5}(\-\d{4})?/ ) )
        )  {
        retValue = { message: 'Zip format must be either 99999 or 99999-9999'};
      }
      return retValue;
    }

    validate( value: FormControl ) : ValidationErrors | null {
      return ZipValidatorDirective.validateZip( value )
    }
}
