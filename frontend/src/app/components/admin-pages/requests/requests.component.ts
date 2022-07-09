import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  companies: Array<Company>;

  constructor(private http: HttpClient, private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getPendingCompanies().subscribe((companies: Array<Company>) => {
      this.companies = companies;
    });
  }

  viewDetails(company: Company): void {
    localStorage.setItem("details", JSON.stringify(company));
    this.router.navigate(["admin/request-details"]);
  }

  changeCompanyStatus(company: Company, status: string): void {
    this.companyService.changeCompanyStatus(company.username, status).subscribe(resp => {
      if (resp["message"] == "ok") {
        alert("uspešno!");
        window.location.reload();
      } else {
        alert("neuspešno!");
      }
    });
  }

}
