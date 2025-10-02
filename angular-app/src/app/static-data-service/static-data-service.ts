import { Component } from '@angular/core';
import { Data } from '../angular-services/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-static-data-service',
  imports: [NgFor],
  templateUrl: './static-data-service.html',
  styleUrl: './static-data-service.scss'
})
export class StaticDataService {
  public productData: {
    id: number;
    productName: string;
    productType: string;
    price: number
  }[] | undefined;

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.productData = this.dataService.getStaticProductData();
  }
}
