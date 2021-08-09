import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dataHeaderNav = {
    logo : {
      icon : 'assets/icon/icon-logo.svg',
      text : null
    },
    list: {
      profile : true,
      favourite : false
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
