import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  username: string;
  password: string;

  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
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
