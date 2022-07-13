import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Department } from 'src/app/models/department';
import { Receipt } from 'src/app/models/receipt';
import { Table } from 'src/app/models/table';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.component.html',
  styleUrls: ['./table-selection.component.css']
})
export class TableSelectionComponent implements OnInit {
  container = {
    position: "relative",
    background: "#cdaa7d",
    width: "100%",
    height: "100%",
  };

  company: Company;
  allTables: Array<Table> = [];
  allDepartments: Array<Department> = [];
  allReceipts: Array<Receipt>;
  currentDepartment: number = 0;
  message: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.allDepartments = this.company.departments;
    this.allReceipts = JSON.parse(localStorage.getItem("allReceipts"));
    if (this.allReceipts) console.log(this.allReceipts);
  }

  getStyle(i: number) {
    return {
      width: "10vw",
      height: "10vw",
      'background-color': "#815438",
      border: "3px solid black",
      position: "absolute",
      top: this.allDepartments[this.currentDepartment].tables[i].top,
      left: this.allDepartments[this.currentDepartment].tables[i].left,
      'border-radius': this.allDepartments[this.currentDepartment].tables[i].borderRadius,
    }
  }

  departmentName(): string {
    return this.allDepartments[this.currentDepartment].name;
  }

  selectTable(index: number) {
    if (this.allReceipts) {
      if (this.allReceipts.find(receipt => {
        return (receipt.tableId === index) && (receipt.departmentName === this.departmentName());
      })) {
        this.message = "Zauzet!";
        return;
      }
    }
    let currentReceipt: Receipt = new Receipt();
    currentReceipt.tableId = index;
    currentReceipt.departmentName = this.departmentName();
    localStorage.setItem("currentReceipt", JSON.stringify(currentReceipt));
    this.router.navigate(["company/receipts-caterer"]);
  }

  toPayment(): void {
    this.router.navigate(["company/receipt-pay-caterer"]);
  }


}
