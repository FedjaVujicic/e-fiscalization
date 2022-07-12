import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly uri: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  register(repName: string, username: string, password: string, phone: string,
    email: string, name: string, address: string, pib: string, mb: string, logo: string) {
    const data = {
      repName: repName,
      username: username,
      password: password,
      phone: phone,
      email: email,
      name: name,
      address: address,
      pib: pib,
      mb: mb,
      logo: logo,
    };

    return this.http.post(`${this.uri}/company/register`, data);
  }

  finishRegister(username: string, category: string, activityCodes: Array<string>, pdv: boolean,
    bankAccounts: Array<{ bankName: string; bankNumber: string; }>, warehouses: Array<{ warehouseId: string; warehouseName: string; }>,
    cashRegisters: Array<{ cashRegisterLocation: string; cashRegisterType: string; }>) {
    const data = {
      username: username,
      category: category,
      activityCodes: activityCodes,
      pdv: pdv,
      bankAccounts: bankAccounts,
      warehouses: warehouses,
      cashRegisters: cashRegisters,
    };

    return this.http.post(`${this.uri}/company/finishRegister`, data);
  }
  
  // Checks whether a user with a same username or email exists when registering
  exists(username: string, email: string) {
    const data = {
      username: username,
      email: email,
    };

    return this.http.post(`${this.uri}/company/exists`, data);
  }

  changePassword(username: string, newPassword: string) {
    const data = {
      username: username,
      newPassword: newPassword,
    }

    return this.http.post(`${this.uri}/company/changePassword`, data);
  }

  getPendingCompanies() {
    return this.http.get(`${this.uri}/company/getPendingCompanies`);
  } 

  changeCompanyStatus(username: string, status: string) {
    const data = {
      username: username,
      status: status,
    }
    return this.http.post(`${this.uri}/company/changeCompanyStatus`, data);
  }

  addBuyer(username: string, buyer: string) {
    const data = {
      username: username,
      buyer: buyer,
    }
    return this.http.post(`${this.uri}/company/addBuyer`, data);
  }
    
}
