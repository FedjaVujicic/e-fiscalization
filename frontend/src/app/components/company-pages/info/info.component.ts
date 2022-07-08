import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  mainWindow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  selectNavItem(): void {
    this.mainWindow = !this.mainWindow;
  }
}
