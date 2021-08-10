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
  datatitle = {
    dataTitleProduct : {

      left: {
        show : true,
        icon : 'assets/icon/icon-outstanding.svg',
        text : 'Sản phẩm nổi bật'
      },
      right: {
        show : false,
      }
    },
    dataTitleEnterprise : {

      left: {
        show : true,
        icon : 'assets/icon/icon-trademark.svg',
        text : 'Doanh nghiệp nổi bật'
      },
      right: {
        show : false,
      }
    },
    dataTitleNews : {
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
  }
  
  constructor() { }

  ngOnInit() {
  }

}
