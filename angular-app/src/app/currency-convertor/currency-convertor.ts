import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularPipePipe } from '../angular-pipes/angular-pipe-pipe';

@Component({
  selector: 'app-currency-convertor',
  imports: [CommonModule, AngularPipePipe],
  templateUrl: './currency-convertor.html',
  styleUrl: './currency-convertor.scss'
})
export class CurrencyConvertor {
  public amount = 10;
  public name = 'sameer';
  public title = 'title';
}
