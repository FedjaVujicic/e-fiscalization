import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company/company.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent implements OnInit {

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


  constructor(private loginService: LoginService, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe(username => this.username = username);
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
    this.companyService.finishRegister(this.username, this.category, this.activityCodes, this.pdv,
      this.bankAccounts, this.warehouses, this.cashRegisters).subscribe(resp => {
        if (resp["message"] == "ok") {
          alert("uspešno!");
        } else {
          alert("neuspešno!");
        }
        this.router.navigate(["company"]);
      });
  }
}
