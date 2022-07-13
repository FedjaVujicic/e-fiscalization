import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  company: Company;
  allReceipts: Array<Receipt>;
  totalPriceNoTax: number = 0;
  totalPriceTax: number = 0;
  amountFromPdv: number;

  constructor(private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.receiptService.getAllCompany(this.company.name).subscribe((allReceipts: Array<Receipt>) => {
      this.allReceipts = allReceipts;
      this.getTotalAmount();
    });
  }

  getTotalAmount() {
    for (let i = 0; i < this.allReceipts.length; ++i) {
      this.totalPriceNoTax += this.allReceipts[i].totalPriceNoTax;
      this.totalPriceTax += this.allReceipts[i].totalPriceTax;
    }
    this.amountFromPdv = this.totalPriceTax - this.totalPriceNoTax;
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
