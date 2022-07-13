import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-receipt-pay-store',
  templateUrl: './receipt-pay-store.component.html',
  styleUrls: ['./receipt-pay-store.component.css']
})
export class ReceiptPayStoreComponent implements OnInit {

  company: Company;
  currentReceipt: Receipt;
  paymentMethod: string;
  paidCash: number;
  customerId: string;
  message: string;
  customerFirstname: string;
  customerLastname: string;
  numSlip: string;
  buyer: string;

  constructor(private receiptService: ReceiptService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.currentReceipt = JSON.parse(localStorage.getItem("currentReceipt"));
  }

  printDate(date: Date): string {
    let currentDate = new Date(date.valueOf());
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currentDate.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  getChange(): string {
    if (this.paidCash) {
      return (this.paidCash - this.currentReceipt.totalPriceTax).toFixed();
    }
    return "";
  }

  payCash(): void {
    if (!this.paidCash || !this.customerId) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    this.currentReceipt.customerId = this.customerId;
    this.pay();
  }

  payCheck(): void {
    if (!this.customerFirstname || !this.customerLastname || !this.customerId) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    this.currentReceipt.customerId = this.customerId;
    this.currentReceipt.customerFirstname = this.customerFirstname;
    this.currentReceipt.customerLastname = this.customerLastname;
    this.pay();
  }

  payCard(): void {
    if (!this.numSlip || !this.customerId) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    this.currentReceipt.customerId = this.customerId;
    this.currentReceipt.numSlip = this.numSlip;
    this.pay();
  }

  payWire(): void {
    if (!this.buyer) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    this.currentReceipt.buyer = this.buyer;
    this.pay();
  }

  pay(): void {    
    this.currentReceipt.paymentMethod = this.paymentMethod;
    this.receiptService.addReceipt(this.currentReceipt).subscribe(resp => {
      if (resp["message"] == "ok") {
        alert("uspešno!");
      } else {
        alert("neuspešno!");
      }
      localStorage.removeItem("currentReceipt");
      this.router.navigate(["company/receipts-store"]);
    });
  }
}
