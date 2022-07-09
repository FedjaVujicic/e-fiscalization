import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  mainWindow: boolean = true;
  company: Company;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("details"));
  }

  selectNavItem(): void {
    this.mainWindow = !this.mainWindow;
  }

  pdv(): string {
    if (this.company.pdv) {
      return "da";
    }
    else {
      return "ne";
    }
  }

  backToRequests(): void {
    localStorage.removeItem("details");
    this.router.navigate(["admin/requests"]);
  }
}
