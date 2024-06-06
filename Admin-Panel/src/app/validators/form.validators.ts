import {AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordPattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
export const phonePattern=/^9\d{9}$/;
export const namePattern=/^[a-zA-Z ]*$/;
export function MatchPassword(
    controlName: string,
    matchingControlName: string
  ) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
  
      if (!control || !matchingControl) {
        return null;
      }
  
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mismatch: true });
        return { mismatch: true };
      }
  
      matchingControl.setErrors(null);
      return null;
    };}
   
