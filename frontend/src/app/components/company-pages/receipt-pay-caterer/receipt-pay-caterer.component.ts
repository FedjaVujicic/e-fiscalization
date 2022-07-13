import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';

@Component({
  selector: 'app-receipt-pay-caterer',
  templateUrl: './receipt-pay-caterer.component.html',
  styleUrls: ['./receipt-pay-caterer.component.css']
})
export class ReceiptPayCatererComponent implements OnInit {

  allReceipts: Array<Receipt>;

  constructor() { }

  ngOnInit(): void {
    this.allReceipts = JSON.parse(localStorage.getItem("allReceipts"));
    if (this.allReceipts) console.log(this.allReceipts);
  }

}
