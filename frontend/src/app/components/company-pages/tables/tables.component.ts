import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Department } from 'src/app/models/department';
import { Table } from 'src/app/models/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  container = {
    position: "relative",
    background: "#cdaa7d",
    width: "100%",
    height: "100%",
  };

  company: Company;
  allTables: Array<Table> = [];
  allDepartments: Array<Department> = [];
  currentDepartment: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.allDepartments = this.company.departments;
  }

  getStyle(i: number) {
      return {
        width: "10vw",
        height: "10vw",
        'background-color': "#815438",
        position: "absolute",
        top: this.allDepartments[this.currentDepartment].tables[i].top,
        left: this.allDepartments[this.currentDepartment].tables[i].left,
        'border-radius': this.allDepartments[this.currentDepartment].tables[i].borderRadius,
      }
  }

}
