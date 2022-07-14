import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent implements OnInit {

  company: Company;

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

  message: string;


  constructor(private loginService: LoginService, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
  }

  addActivityCode(): void {
    if (!this.activityCodeOk()) {
      this.message = "Sifra delatnosti mora biti 4-cifren broj";
      return;
    }
    this.activityCodes.push(this.activityCode);
  }

  removeActivityCode(code: string): void {
    const index = this.activityCodes.indexOf(code);
    this.activityCodes.splice(index, 1);
  }

  addBankAccount(): void {
    if (!this.bankNumberOk()) {
      this.message = "Žiro račun mora biti 13-cifren broj";
      return;
    }
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

  fieldsOk(): boolean {
    if (!this.category) {
      this.message = "Odaberite kategoriju";
      return false;
    }
    if (this.activityCodes.length === 0) {
      this.message = "Unesite bar jednu šifru aktivnosti";
      return false;
    }
    if (this.bankAccounts.length === 0) {
      this.message = "Dodajte bar jedan žiro račun";
      return false;
    }
    if (this.warehouses.length === 0 && this.cashRegisters.length === 0) {
      this.message = "Dodajte bar jedan objekat";
      return false;
    }
    if (this.numWarehouses != this.warehouses.length) {
      this.message = "Unesite " + this.numWarehouses + " magacina";
      return false;
    }
    if (this.numCashRegisters != this.cashRegisters.length) {
      this.message = "Unesite " + this.cashRegisters + " fiskalnih kasa";
      return false;
    }
    return true;
  }

  activityCodeOk(): boolean {
    const mbFormat = /^\d{4}$/;
    return mbFormat.test(this.activityCode);
  }
  
  bankNumberOk(): boolean {
    const mbFormat = /^\d{13}$/;
    return mbFormat.test(this.bankNumber);
  }

  finishRegister() {
    if (!this.fieldsOk()) {
      return;
    }
    this.companyService.finishRegister(this.company.username, this.category, this.activityCodes, this.pdv,
      this.bankAccounts, this.warehouses, this.cashRegisters).subscribe(resp => {
        if (resp["message"] == "ok") {
          alert("uspešno!");
        } else {
          alert("neuspešno!");
        }
        sessionStorage.clear();
        this.router.navigate([""]);
      });
  }
}
