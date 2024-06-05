import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable,map } from 'rxjs';
import { ProductsInterface } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private http:HttpClient=inject(HttpClient);
private BASE_URL="https://mgmt-sys-default-rtdb.firebaseio.com/";
private testURL="http://localhost:3000/products"
  constructor() { }

public getProducts(){
  return this.http.get<{[key:string]:ProductsInterface}>(`${this.BASE_URL}`+"products.json")
  .pipe(map((response)=>{
    let products=[];
    for(let key in response){
      products.push({...response[key],id:key})
    }
    return products;
  }));

  
}
public addProduct(product:ProductsInterface){
  console.log(`${this.BASE_URL}`+"products.json",product);
  return this.http.post<{name:string}>(`${this.BASE_URL}`+"products.json",product);
}
}