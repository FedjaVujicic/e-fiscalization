import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  
  username: string;
  password: string;
  confirmPassword: string;
  firstname: string;
  lastname: string;
  phone: string;
  idNumber: string;

  message: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  addCustomer(): void {
    if (this.passwordOk()) { 
      this.customerService.addCustomer(this.username, this.password, this.firstname, this.lastname,
        this.phone, this.idNumber).subscribe(resp => {
          if (resp["message"] == "ok") {
            alert("uspešno!");
          } else {
            alert("neuspešno!");
          }
        });
      this.message = null;           
    }
  }

  passwordOk(): boolean {
    if (this.password != this.confirmPassword) {
      this.message = "Lozinke nisu iste";
      return false;
    }
    else {
      const pwFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
      if (!pwFormat.test(this.password)) {
        this.message = "Lozinka mora imati \n -Minimalno 8 karaktera \n -Maksimalno 12 karaktera \n -Bar jedno veliko slovo \n -Bar jedan broj \n -Bar jedan specijalni karakter \n -Počinjati slovom";
        return false;
      }
      else {
        return true;
      }
    }
  }

}
