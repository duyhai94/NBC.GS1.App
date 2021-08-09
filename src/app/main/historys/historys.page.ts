import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historys',
  templateUrl: './historys.page.html',
  styleUrls: ['./historys.page.scss'],
})
export class HistorysPage implements OnInit {
  dataHeaderNav = {
    logo : {
      icon : null,
      text : 'Liên hệ'
    },
    list: {
      profile : true,
      favourite : true
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
