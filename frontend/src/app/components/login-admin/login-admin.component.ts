import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { Receipt } from 'src/app/models/receipt';
import { LoginService } from 'src/app/services/login/login.service';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  username: string;
  password: string;
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
    if (!this.username || !this.password) {
    this.message = "Polja ne smeju biti prazna";
  }
    this.loginService.loginAdmin(this.username, this.password).subscribe((admin: Admin) => {
      if (admin != null) {
        localStorage.setItem("logged", JSON.stringify(admin));
        this.router.navigate(["admin"]);
      } else {
        this.message = "Unesite ispravne podatke";
      }
    });
  }
}
