import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PreLoaderComponent } from '../common/pre-loader/pre-loader.component';
import {CheckboxModule} from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,PreLoaderComponent,InputTextModule,FormsModule,FloatLabelModule,ButtonModule,CheckboxModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent {
isLoading:boolean=false;

passType="password";

private subscriptions:Subscription=new Subscription();
public userForm!:FormGroup
private loginToken:string='';
private loginService: AuthenticationService=inject(AuthenticationService)
private route:Router=inject(Router);
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
  this.isLoading=true
  const email=this.userForm.get("email")?.value;
  const password=this.userForm.get("password")?.value;
  console.log("Logged in")
  console.log(this.userForm.value)
  const logSub=this.loginService.logUser(email,password).subscribe({
    next:(value)=>{this.loginToken=value.idToken,
      this.loginService.setToken(this.loginToken);
this.route.navigateByUrl("dashboard")
    },
    error:(err)=>{console.log(err),this.isLoading=false},
    complete:()=>{this.isLoading=false}
  })
  this.subscriptions.add(logSub);
 
}
ngOnInit(){
  this.loginService.autoLogin();
}

 ngOnDestroy(){
  this.subscriptions.unsubscribe()
}
onTogglePassword(){
this.passType=this.passType=="password"?"text":"password";
}


}
