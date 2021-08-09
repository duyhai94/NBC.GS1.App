import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  dataHeaderNav = {
    logo : {
      icon : null,
      text : 'Tin tức'
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
