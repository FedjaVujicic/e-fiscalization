import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  selectedPage: string = "companies-products";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(localStorage.getItem("logged"));
  }

  
  selectPage(page: string) {
    this.selectedPage = page;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([""]);
  }

}
