import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  readonly uri: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  changePassword(username: string, newPassword: string) {
    const data = {
      username: username,
      newPassword: newPassword,
    }

    return this.http.post(`${this.uri}/admin/changePassword`, data);
  }
}
