import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent implements OnInit {

  username: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(username => this.username = username);
  }

}
