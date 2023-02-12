import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl:string="http://localhost:3000/products";

  constructor(private http:HttpClient) { }

  getproduct(){
   return this.http.get(this.baseUrl);
  }

}
