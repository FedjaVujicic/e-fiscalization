import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Receipt } from 'src/app/models/receipt';

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

  constructor() { }

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
    //dbCall
  }

  payCheck(): void {
    if (!this.customerFirstname || !this.customerLastname || !this.customerId) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    //dbCall
  }

  payCard(): void {
    if (!this.numSlip || !this.customerId) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    //dbCall
  }

  payWire(): void {
    if (!this.buyer) {
      this.message = "Polja ne smeju biti prazna";
      return;
    }
    //dbCall
  }
}
