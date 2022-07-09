import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  selectedPage: string = "requests";

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
