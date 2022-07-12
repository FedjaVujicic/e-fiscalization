import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-buyers-list',
  templateUrl: './buyers-list.component.html',
  styleUrls: ['./buyers-list.component.css']
})
export class BuyersListComponent implements OnInit {

  company: Company;
  allBuyers: Array<Company> = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    console.log(this.company.name);
    console.log(this.company.buyers.length);
    for (let i = 0; i < this.company.buyers.length; ++i) {
      this.companyService.getCompany(this.company.buyers[i]).subscribe((company: Company) => {
        this.allBuyers.push(company);
        console.log(company);
      });
    }
  }

}
