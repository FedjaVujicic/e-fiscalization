import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  customer: Customer;
  allReceipts: Array<Receipt>;
  currentReceipt: Receipt;
  viewingDetails: boolean = false;

  constructor(private receiptService: ReceiptService) {
    this.customer = JSON.parse(localStorage.getItem("logged"));
  }

  ngOnInit(): void {
    this.receiptService.getAllCustomer(this.customer.idNumber).subscribe((allReceipts: Array<Receipt>) => {
      this.allReceipts = allReceipts;
      console.log(this.allReceipts);
    });
  }

  getPaymentMethod(method: string): string {
    if (method === "check") {
      return "ček";
    }
    if (method === "card") {
      return "kartica";
    }
    if (method === "wire") {
      return "virman";
    }
    if (method === "cash") {
      return "keš";
    }
    return "";
  }

  viewDetails(receipt: Receipt) {
    this.currentReceipt = receipt;
    this.viewingDetails = true;
  }

  printDate(date: Date): string {
    let currentDate = new Date(date.valueOf());
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currentDate.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }
}
