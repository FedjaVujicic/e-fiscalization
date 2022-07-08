import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  mainWindow: boolean = true;
  company: Company;

  constructor() { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
  }

  selectNavItem(): void {
    this.mainWindow = !this.mainWindow;
  }
}
