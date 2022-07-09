import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly uri: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  addCustomer(username: string, password: string, firstname: string, lastname: string, phone: string, idNumber: string) {
    const data = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      idNumber: idNumber,
    };

    return this.http.post(`${this.uri}/customer/addCustomer`, data);
  }
  
  changePassword(username: string, newPassword: string) {
    const data = {
      username: username,
      newPassword: newPassword,
    }

    return this.http.post(`${this.uri}/customer/changePassword`, data);
  }
}
