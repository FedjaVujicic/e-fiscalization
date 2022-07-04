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
}
