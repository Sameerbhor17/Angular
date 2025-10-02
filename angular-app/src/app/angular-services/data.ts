import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  getStaticProductData() {
    return [
      {id: 1, productName: 'Iphone 17', productType: 'Mobile', price:151000 },
      {id: 2, productName: 'Rolex', productType: 'Watch', price:100000 },
      {id: 3, productName: 'Macbook', productType: 'Laptop', price:125000 },
      {id: 4, productName: 'Apple Air Dopes 141', productType: 'Headphone', price:31000 },
      {id: 5, productName: 'Metaore 650', productType: 'Vehicle', price:451000 }
    ]
  }
}
