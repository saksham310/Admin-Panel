import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private http:HttpClient=inject(HttpClient);
private BASE_URL="https://mgmt-sys-default-rtdb.firebaseio.com/";
  constructor() { }

public getData(text:string){
  console.log(`${this.BASE_URL}`+text+".json");
  return this.http.get(`${this.BASE_URL}`+text+".json");
  
}
}
