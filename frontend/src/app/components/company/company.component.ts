import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Company;
  selectedPage: string = "info";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
  }

  selectPage(page: string) {
    this.selectedPage = page;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}
