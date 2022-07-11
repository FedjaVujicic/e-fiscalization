import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  company: Company;
  categoryName: string;
  message: string;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
  } 

  openWindow(): void {
    window.open("http://localhost:4200/add-product", 
    'C-Sharpcorner', 'toolbar=no,scrollbars=no,resizable=no,top=100,left=500,width=600,height=400');
  }


}
