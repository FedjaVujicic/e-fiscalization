import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSource = new BehaviorSubject<string>("default user");
  currentUser = this.userSource.asObservable();

  readonly uri: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.uri}/company/login`, data);
  }
  
  changeUser(username: string) {
    this.userSource.next(username);
  }
}
