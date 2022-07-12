import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  
  selectedPage: string = "info";

  constructor() { }

  ngOnInit(): void {
  }

  selectPage(page: string) {
    this.selectedPage = page;
  }

}
