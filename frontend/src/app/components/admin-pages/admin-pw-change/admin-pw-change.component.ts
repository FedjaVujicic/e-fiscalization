import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin-pw-change',
  templateUrl: './admin-pw-change.component.html',
  styleUrls: ['./admin-pw-change.component.css']
})
export class AdminPwChangeComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;  

  admin: Admin;

  message: string;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem("logged"));
  }

  changePassword(): void {
    if (this.oldPassword != this.admin.password) {
      this.message = "Stara lozinka nije ispravna";
    }
    else if (this.passwordOk()) {
      this.admin.password = this.newPassword;
      localStorage.setItem("logged", JSON.stringify(this.admin));
      this.adminService.changePassword(this.admin.username, this.newPassword).subscribe(resp => {
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
