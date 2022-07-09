import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-add-company-extra',
  templateUrl: './add-company-extra.component.html',
  styleUrls: ['./add-company-extra.component.css']
})
export class AddCompanyExtraComponent implements OnInit {

  username: string;

  category: string;

  activityCode: string;
  activityCodes: Array<string> = [];

  pdv: boolean;

  bankName: string;
  bankNumber: string;
  bankAccounts: Array<{
    bankName: string;
    bankNumber: string;
  }> = [];

  numWarehouses: number = 1;
  warehouseId: string;
  warehouseName: string;
  warehouses: Array<{
    warehouseId: string;
    warehouseName: string;
  }> = [];

  numCashRegisters: number = 1;
  cashRegisterLocation: string;
  cashRegisterType: string;
  cashRegisters: Array<{
    cashRegisterLocation: string;
    cashRegisterType: string;
  }> = [];


  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
  }

  addActivityCode(): void {
    this.activityCodes.push(this.activityCode);
  }

  removeActivityCode(code: string): void {
    const index = this.activityCodes.indexOf(code);
    this.activityCodes.splice(index, 1);
  }

  addBankAccount(): void {
    this.bankAccounts.push({bankName: this.bankName, bankNumber: this.bankNumber});
  }

  removeBankAccount(account: { bankName: string, bankNumber: string }): void {
    const index = this.bankAccounts.indexOf(account);
    this.bankAccounts.splice(index, 1);    
  }

  addWarehouse(): void {
    if (this.warehouses.length < this.numWarehouses) {
      this.warehouses.push({warehouseName: this.warehouseName, warehouseId: this.warehouseId});
    }    
  }

  removeWarehouse(warehouse: { warehouseName: string, warehouseId: string }): void {
    const index = this.warehouses.indexOf(warehouse);
    this.warehouses.splice(index, 1);    
  }

  addCashRegister(): void {
    if (this.cashRegisters.length < this.numCashRegisters) {
      this.cashRegisters.push({cashRegisterLocation: this.cashRegisterLocation, cashRegisterType: this.cashRegisterType});
    }    
  }

  removeCashRegister(cashRegister: { cashRegisterLocation: string, cashRegisterType: string }): void {
    const index = this.cashRegisters.indexOf(cashRegister);
    this.cashRegisters.splice(index, 1);    
  }

  finishRegister() {
    let company: Company = JSON.parse(localStorage.getItem("adding"));
    this.companyService.register(company.repName, company.username, company.password, company.phone,
      company.email, company.name, company.address, company.pib, company.mb, company.logo).subscribe(resp => {
        if (resp["message"] == "ok") {
          this.companyService.finishRegister(company.username, this.category, this.activityCodes, this.pdv,
            this.bankAccounts, this.warehouses, this.cashRegisters).subscribe(resp => {
              if (resp["message"] == "ok") {
                alert("uspešno!");
                localStorage.removeItem("adding");
              } else {
                alert("neuspešno!");
              }
            });
        }
      });
  }
}
