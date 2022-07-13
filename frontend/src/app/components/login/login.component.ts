import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Customer } from 'src/app/models/customer';
import { Receipt } from 'src/app/models/receipt';
import { LoginService } from 'src/app/services/login/login.service';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: string;
  userType: string;
  allReceipts: Array<Receipt> = [];
  filteredReceipts: Array<Receipt> = [];

  message: string;

  constructor(private loginService: LoginService, private router: Router, private receiptService: ReceiptService) { }

  ngOnInit(): void {
    this.receiptService.getAllReceipts().subscribe((allReceipts: Array<Receipt>) => {
      this.allReceipts = allReceipts;
      this.allReceipts.sort((a, b) => {
        let aDate, bDate: Date;
        aDate = new Date(a.date);
        bDate = new Date(b.date);
        return bDate.getTime() - aDate.getTime();
      });
      this.filteredReceipts = this.allReceipts.slice(0, 5);
    });
  }

  login(): void {
    if (!this.username || !this.password || !this.userType) {
      this.message = "Polja ne smeju biti prazna";
    }
    if (this.userType === "company") {
      this.loginService.loginCompany(this.username, this.password).subscribe((company: Company) => {
        if (company != null) {
          localStorage.setItem("logged", JSON.stringify(company));
          if (company.status == "firstlogin") {
            this.router.navigate(["first-login"]);
          } else {
            this.router.navigate(["company"]);
          }
        } else {
          this.message = "Unesite ispravne podatke";
        }
      });
    }
    
    else if (this.userType === "customer") {
      this.loginService.loginCustomer(this.username, this.password).subscribe((customer: Customer) => {
        if (customer != null) {
          localStorage.setItem("logged", JSON.stringify(customer));
          this.router.navigate(["customer"]);
        } else {
          this.message = "Unesite ispravne podatke";
        }
      });
    }
  }

}
