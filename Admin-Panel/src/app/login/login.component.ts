import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
public userForm!:FormGroup
constructor(private _fb:FormBuilder){

this.userForm=this._fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]
})
}
public validator(name:string){
  return (this.userForm.get(name)?.invalid && this.userForm.get(name)?.touched)
}
public onSubmit(){
  console.log("Logged in")
}

}
