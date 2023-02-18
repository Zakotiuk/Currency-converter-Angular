import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private currencyService : CurrencyService) { }

  titleUSD : number;
  titleEUR : number;

  ngOnInit() {
    this.currencyService.getAll("USD", "UAH", 1).subscribe(items => {
      this.titleUSD = items.result
    })
    this.currencyService.getAll("EUR", "UAH", 1).subscribe(items => {
      this.titleEUR = items.result
    })
  }

 
  
}
