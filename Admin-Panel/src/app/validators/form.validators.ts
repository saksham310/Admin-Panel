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
   
export function ValidateMessage(formGroup:AbstractControl,name:string){
    let msg='';
    const control=formGroup.get(name);
    if (control?.errors && (control.dirty || control.touched)) {
        if(control.errors?.['required']){
            msg="This field is required";

        }
        if(control.errors?.['pattern']){
            if(name=='email'){
                msg="Please enter a valid email address";
            }
            if(name=='phone'){
                msg="Please enter a valid phone number";
            }
            if(name=='fName'){
                msg="Please enter a valid name";
            }
            if(name=='lName'){
                msg="Please enter a valid name";
            }
        }
    }

return msg

}