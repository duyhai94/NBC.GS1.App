import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  dataTitleNews = {
    left: {
      show : true,
      icon : 'assets/icon/icon-new.svg',
      text : 'Tin tức'
    },
    right: {
      show : true,
      icon: 'assets/icon/icon-next.svg',
      link: '/main/news'
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
