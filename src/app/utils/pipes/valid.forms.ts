import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidForm(nameRe: RegExp, errorName: string): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {
   const valid = nameRe.test(control.value);
   // eslint-disable-next-line no-underscore-dangle
   const _error: ValidationErrors = {};
   _error[errorName] = {value: control.value}
   return !valid ? _error : null;
   };
}