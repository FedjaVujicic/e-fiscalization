import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-company-pw-change',
  templateUrl: './company-pw-change.component.html',
  styleUrls: ['./company-pw-change.component.css']
})
export class CompanyPwChangeComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;  

  company: Company;

  message: string;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
  }

  changePassword(): void {
    if (this.oldPassword != this.company.password) {
      this.message = "Stara lozinka nije ispravna";
    }
    else if (this.passwordOk()) {
      this.company.password = this.newPassword;
      localStorage.setItem("logged", JSON.stringify(this.company));
      this.companyService.changePassword(this.company.username, this.newPassword).subscribe(resp => {
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
