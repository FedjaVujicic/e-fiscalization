import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: string;

  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.username, this.password).subscribe((company: Company) => {
      if (company != null) {
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
  
}
