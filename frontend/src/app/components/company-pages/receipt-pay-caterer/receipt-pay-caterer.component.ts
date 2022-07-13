import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-receipt-pay-caterer',
  templateUrl: './receipt-pay-caterer.component.html',
  styleUrls: ['./receipt-pay-caterer.component.css']
})
export class ReceiptPayCatererComponent implements OnInit {

  company: Company;
  allReceipts: Array<Receipt> = [];
  paymentMethod: Array<string> = [];
  paidCash: Array<number> = [];
  customerId: Array<string> = [];
  message: Array<string> = [];
  customerFirstname: Array<string> = [];
  customerLastname: Array<string> = [];
  numSlip: Array<string> = [];
  buyer: Array<string> = [];

  constructor(private receiptService: ReceiptService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.allReceipts = JSON.parse(localStorage.getItem("allReceipts"));
  }

  printDate(date: Date): string {
    let currentDate = new Date(date.valueOf());
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currentDate.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  getChange(currentReceipt: Receipt, i: number): string {
    if (this.paidCash) {
      return (this.paidCash[i] - currentReceipt.totalPriceTax).toFixed();
    }
    return "";
  }

  checkChange(currentReceipt: Receipt, i: number): boolean {
    return this.paidCash[i] >= currentReceipt.totalPriceTax;
  }

  payCash(currentReceipt: Receipt, i: number): void {
    if (!this.paidCash[i] || !this.customerId[i]) {
      this.message[i] = "Polja ne smeju biti prazna";
      return;
    }
    currentReceipt.customerId = this.customerId[i];
    this.pay(currentReceipt, i);
  }

  payCheck(currentReceipt: Receipt, i: number): void {
    if (!this.customerFirstname[i] || !this.customerLastname[i] || !this.customerId[i]) {
      this.message[i] = "Polja ne smeju biti prazna";
      return;
    }
    currentReceipt.customerId = this.customerId[i];
    currentReceipt.customerFirstname = this.customerFirstname[i];
    currentReceipt.customerLastname = this.customerLastname[i];
    this.pay(currentReceipt, i);
  }

  payCard(currentReceipt: Receipt, i: number): void {
    if (!this.numSlip[i] || !this.customerId[i]) {
      this.message[i] = "Polja ne smeju biti prazna";
      return;
    }
    currentReceipt.customerId = this.customerId[i];
    currentReceipt.numSlip = this.numSlip[i];
    this.pay(currentReceipt, i);
  }

  payWire(currentReceipt: Receipt, i: number): void {
    if (!this.buyer[i]) {
      this.message[i] = "Polja ne smeju biti prazna";
      return;
    }
    currentReceipt.buyer = this.buyer[i];
    this.pay(currentReceipt, i);
  }

  removeReceipt(receipt: Receipt) {
    const index = this.allReceipts.indexOf(receipt);
    this.allReceipts.splice(index, 1);  
    localStorage.setItem("allReceipts", JSON.stringify(this.allReceipts));      
  }

  pay(currentReceipt: Receipt, i: number): void {    
    currentReceipt.paymentMethod = this.paymentMethod[i];
    this.receiptService.addReceipt(currentReceipt).subscribe(resp => {
      if (resp["message"] == "ok") {
        alert("uspešno!");
      } else {
        alert("neuspešno!");
      }
      this.removeReceipt(currentReceipt);
      window.location.reload();      
    });
  }
}