import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  home = 'assets/icon/icon-home.svg';
  constructor() { }

  ngOnInit() {
  }


  openRequestPage(){}
  
}
