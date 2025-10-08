import { Component } from '@angular/core';
import { Product } from '../angular-services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-product-data-service',
  imports: [CommonModule],
  templateUrl: './async-product-data-service.html',
  styleUrl: './async-product-data-service.scss'
})
export class AsyncProductDataService {
  public productData: any;

  constructor(private productService: Product) {}

  ngOnInit() {
    this.getProductData();
  }

  getProductData() {
    this.productService.getProductData().subscribe((data: any) => {
      this.productData = data.products;
      console.log(this.productData);
    });
  }
}
