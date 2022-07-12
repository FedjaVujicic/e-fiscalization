import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-search-buyer',
  templateUrl: './search-buyer.component.html',
  styleUrls: ['./search-buyer.component.css']
})
export class SearchBuyerComponent implements OnInit {

  company: Company;
  allCompanies: Array<Company> = [];
  filteredCompanies: Array<Company> = [];
  searchParam: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.companyService.getActiveCompanies().subscribe((allCompanies: Array<Company>) => {
      this.allCompanies = allCompanies;
      this.filteredCompanies = allCompanies;
    });
  }

  search(): void {
    this.filteredCompanies = this.allCompanies.filter(product => {
      return product.name.match(new RegExp(`${this.searchParam}`, "i"));
    })
  }

  addButtonRender(buyer: Company): boolean {
    if (buyer.username === this.company.username) {
      return false;
    }

    for (let i = 0; i < this.company.buyers.length; ++i) {
      if (this.company.buyers[i].buyerUsername === buyer.username) {
        return false;
      }
    }
    return true;
  }

  addBuyer(buyerUsername: string) {
    if (!this.company.buyers) {
      this.company.buyers = [];
    }
    this.company.buyers.push({
      buyerUsername: buyerUsername,
      daysToPay: 60,
      rebate: 5,
    });
    localStorage.setItem("logged", JSON.stringify(this.company));

    this.companyService.addBuyer(this.company.username, buyerUsername, 60, 5).subscribe(resp => {
      if (resp["message"] == "ok") {
        alert("uspešno!");
      } else {
        alert("neuspešno!");
      }
    });
  }


}
