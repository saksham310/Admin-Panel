import {AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const regexPattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
export function MatchPassword(control:FormControl,match:FormControl):ValidatorFn{
    return () => (control?.value === match?.value ? null : { mismatch: true });
  }
   
