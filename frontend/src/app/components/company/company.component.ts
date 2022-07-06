import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  selectedPage: string = "info";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPage(page: string) {
    this.selectedPage = page;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}
