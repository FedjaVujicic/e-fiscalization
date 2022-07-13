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
    if (page === "receipts") {
      if (this.company.category === "ugostitelj") {
        page = "table-selection";
      }
      else if (this.company.category === "prodavnica") {
        page = "receipts-store";
      }
      this.router.navigate(["company/" + page]);
    }
    this.selectedPage = page;
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate([""]);
  }

}
