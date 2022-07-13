import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  
  readonly uri: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  addReceipt(receipt: Receipt) {
    return this.http.post(`${this.uri}/receipt/addReceipt`, receipt);
  }
}
