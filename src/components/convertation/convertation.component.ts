import { Component, OnInit} from '@angular/core';
import { ICurrency } from 'src/model/currency';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-convertation',
  templateUrl: './convertation.component.html',
  styleUrls: ['./convertation.component.css']
})
export class ConvertationComponent implements OnInit {

  constructor(private currencyService: CurrencyService){
  }

  info : ICurrency;

  userChoise(item : ICurrency){
    this.getInfo(item.query.from, item.query.to, item.query.amount);
  }

  getInfo (currencyFrom : string, currencyTo : string, amount : number){
    this.currencyService.getAll(currencyFrom, currencyTo, amount).subscribe(items => {
      this.info = items
      console.log(items)
    })
  }

  ngOnInit() {
    this.getInfo("", "", 0);
  }
}