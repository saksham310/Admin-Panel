import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserInterface } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLogged:boolean=false;
  private key="token";
  private http:HttpClient=inject(HttpClient)
  private LOGIN_URL="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
  private API_KEY="AIzaSyBYh3EewfLER2SvHwka5YPAqE35WVI2oGY";

  constructor() { }

  public logUser(email:string,password:string){
    const data={email:email,password:password,returnSecureToken:true}
    return this.http.post<UserInterface>(`${this.LOGIN_URL}`+`${this.API_KEY}`,data);
  }

  public setToken(token:string){
    localStorage.setItem(`${this.key}`,token);
    this.isLogged=true;
  }

  public isAuthenticated(){
    return this.isLogged;
  }

}
