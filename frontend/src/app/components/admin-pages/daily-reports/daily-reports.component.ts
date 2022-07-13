import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.css']
})
export class DailyReportsComponent implements OnInit {
  allReceipts: Array<Receipt>;
  allReceiptsCompanies: Array<Array<Receipt>> = [];
  totalPriceNoTax: Array<number> = [];
  totalPriceTax: Array<number> = [];
  amountFromPdv: Array<number> = [];
  companyNames: Array<string> = [];

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.receiptService.getAllReceipts().subscribe((allReceipts: Array<Receipt>) => {
      this.allReceipts = allReceipts;
      for (let i = 0; i < this.allReceipts.length; ++i) {
        if (this.allReceipts[i].companyName) {
          if (this.companyNames.indexOf(this.allReceipts[i].companyName) === -1) {
            this.companyNames.push(this.allReceipts[i].companyName);
          }
        }
      }
      
      for (let i = 0; i < this.companyNames.length; ++i) {
        this.allReceiptsCompanies.push(this.allReceipts.filter(receipt => receipt.companyName == this.companyNames[i]));
      }

      this.getTotalAmounts();
    });
  }

  getTotalAmounts() {
    for (let i = 0; i < this.allReceiptsCompanies.length; ++i) {
      for (let j = 0; j < this.allReceiptsCompanies[i].length; ++j) {
        if (j === 0) {
          this.totalPriceNoTax[i] = 0;
          this.totalPriceTax[i] = 0;
        }
        this.totalPriceNoTax[i] += this.allReceiptsCompanies[i][j].totalPriceNoTax;
        this.totalPriceTax[i] += this.allReceiptsCompanies[i][j].totalPriceTax;
        this.amountFromPdv[i] = this.totalPriceTax[i] - this.totalPriceNoTax[i];
      }
    }
  }

  printDate(): string {
    let currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currentDate.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  getAmount(num: number): number {
    return Math.round(num * 100) / 100;
  }


}
