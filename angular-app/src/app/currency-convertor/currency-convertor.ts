import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-convertor',
  imports: [CommonModule],
  templateUrl: './currency-convertor.html',
  styleUrl: './currency-convertor.scss'
})
export class CurrencyConvertor {
  public amount = 10;
  public name = 'sameer';
  public title = 'title';
}
