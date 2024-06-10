import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordPattern, phonePattern,namePattern} from '../../validators/form.validators';
import { MatchPassword } from '../../validators/form.validators';
import { CommonModule } from '@angular/common';
import {ValidateMessage} from '../../validators/form.validators';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  private _fb: FormBuilder = inject(FormBuilder);
public options=['Student','Admin']
  registrationForm = this._fb.group(
    {
      fName: ['', [Validators.required, Validators.pattern(namePattern)]],
      lName: ['', [Validators.required, Validators.pattern(namePattern)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(passwordPattern),
        ],
      ],
      cpassword: ['', [Validators.required,MatchPassword('password', 'cpassword')]],
      role: ['Student',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(phonePattern)]],
    },
    {
      validators: MatchPassword('password', 'cpassword'),
    }
  );
  get form(){
    return this.registrationForm.controls;
  }

showValidate(name:string){
    return ValidateMessage(this.registrationForm,name)
  }
  ngOnInit(){
      
  }
}

