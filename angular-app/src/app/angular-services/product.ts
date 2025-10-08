import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor(private http: HttpClient) {}

  getProductData() {
    const url = "https://dummyjson.com/products"
    return this.http.get(url);
  }
  
}
