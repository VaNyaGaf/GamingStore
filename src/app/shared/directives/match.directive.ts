import { Directive, Input } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[gsMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchDirective, multi: true }]

})
export class MatchDirective {

  @Input('gsMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
      return this.isMatched(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }

  private isMatched(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
