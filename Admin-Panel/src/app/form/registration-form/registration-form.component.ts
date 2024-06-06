import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { regexPattern } from '../../validators/form.validators';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  private _fb: FormBuilder = inject(FormBuilder);
  registrationForm = this._fb.group(
    {
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(regexPattern),
        ],
      ],
      cpassword: ['', [Validators.required,MatchPassword('password', 'cpassword')]],
      role: ['', [Validators.required]],
    },
    {
      validators: MatchPassword('password', 'cpassword'),
    }
  );
}

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
  };
}
