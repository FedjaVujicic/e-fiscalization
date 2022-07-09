import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-pw-change',
  templateUrl: './customer-pw-change.component.html',
  styleUrls: ['./customer-pw-change.component.css']
})
export class CustomerPwChangeComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;  

  customer: Customer;

  message: string;

  constructor(private customerSerivce: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem("logged"));
  }

  changePassword(): void {
    if (this.oldPassword != this.customer.password) {
      this.message = "Stara lozinka nije ispravna";
    }
    else if (this.passwordOk()) {
      this.customer.password = this.newPassword;
      localStorage.setItem("logged", JSON.stringify(this.customer));
      this.customerSerivce.changePassword(this.customer.username, this.newPassword).subscribe(resp => {
        if (resp["message"] == "ok") {
          alert("uspešno!");
        } else {
          alert("neuspešno!");
        }
        sessionStorage.clear();
        this.router.navigate([""]);
      });
      this.message = null;
    }
  }

  passwordOk(): boolean {
    if (this.newPassword != this.confirmPassword) {
      this.message = "Lozinke nisu iste";
      return false;
    }
    else {
      const pwFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
      if (!pwFormat.test(this.newPassword)) {
        this.message = "Lozinka mora imati \n -Minimalno 8 karaktera \n -Maksimalno 12 karaktera \n -Bar jedno veliko slovo \n -Bar jedan broj \n -Bar jedan specijalni karakter \n -Počinjati slovom";
        return false;
      }
      else {
        return true;
      }
    }
  }

}
