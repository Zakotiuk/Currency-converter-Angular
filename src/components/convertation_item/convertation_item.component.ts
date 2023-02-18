import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICurrency } from 'src/model/currency';

@Component({
  selector: 'app-convertation_item',
  templateUrl: './convertation_item.component.html',
  styleUrls: ['./convertation_item.component.css']
})
export class Convertation_itemComponent implements OnInit {
  @Input() info : ICurrency;
  @Output() userChoise = new EventEmitter<ICurrency>();

  amountFrom : number;
  amountTo : number;

  selectedCurrencyFrom: string;
  selectedCurrencyTo : string;

  isFromInput : boolean;

  item : ICurrency;

  selectedFrom(){
    this.sendRequest(this.selectedCurrencyTo,this.selectedCurrencyFrom,this.amountFrom)
    this.isFromInput = true;
  }

  selectedTo(){
    this.sendRequest(this.selectedCurrencyFrom, this.selectedCurrencyTo, this.amountTo)
    this.isFromInput = false;
  }

  sendRequest(from : string, to : string, amount : number){
    this.item = <ICurrency> <unknown>{
      query: {
        to: from,
        from: to,
        amount: amount
      }
    }
      this.userChoise.emit(this.item);
  }

  ngDoCheck(){
    this.isFromInput == true 
    ? this.amountTo = this.info?.result
    : this.amountFrom = this.info?.result
  }

  defaultCurrencyFrom : any;
  defaultCurrencyTo : any;

  currencyChoises = [
  {
    label: 'UAH',
  },
  {
    label : "EUR"
  },
  ];

  ngOnInit() {
    this.defaultCurrencyFrom = this.currencyChoises[0];
    this.selectedCurrencyFrom = Object.assign(this.defaultCurrencyFrom.label);

    this.defaultCurrencyTo = this.currencyChoises[1];
    this.selectedCurrencyTo = Object.assign(this.defaultCurrencyTo.label);
  }
}