import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-confirm-buyer',
  templateUrl: './confirm-buyer.component.html',
  styleUrls: ['./confirm-buyer.component.css']
})
export class ConfirmBuyerComponent implements OnInit {

  company: Company;
  buyer: Company;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.buyer = JSON.parse(localStorage.getItem("adding"));
  }

  confirmBuyer(): void {
    if (!this.company.buyers) {
      this.company.buyers = [];
    }
    this.company.buyers.push(this.buyer.username);
    localStorage.setItem("logged", JSON.stringify(this.company));
    localStorage.removeItem("adding");
    
    this.companyService.addBuyer(this.company.username, this.buyer.username).subscribe(resp => {
      if (resp["message"] == "ok") {
        alert("uspešno!");
      } else {
        alert("neuspešno!");
      }
      this.router.navigate(["company/buyers/buyers-list"]);
    });
  }

  cancelBuyer(): void {
    localStorage.removeItem("adding");
    this.router.navigate(["company/buyers/buyers-list"]);
  }

}
