import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-business',
  templateUrl: './product-business.page.html',
  styleUrls: ['./product-business.page.scss'],
})
export class ProductBusinessPage implements OnInit {
 
  datatitle = {
    dataTitleProduct : {
      left: {
        show : true,
        icon : 'assets/icon/icon-outstanding.svg',
        text : 'Sản phẩm của doanh nghiệp'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-next.svg',
        link: ''
      }
    },

    dataTitleNews : {
      left: {
        show : true,
        icon : 'assets/icon/icon-new.svg',
        text : 'Bài đăng'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-next.svg',
        link: '/main/news'
      }
    },
    dataTitleCerf : {
      left: {
        show : true,
        icon : 'assets/icon/icon-trademark.svg',
        text : 'Chứng chỉ, chứng nhận sản phẩm'
      },
      right: {
        show : false,
      }
  
    },
    business: {
      left: {
        show : true,
        icon : 'assets/icon/icon-buliding.svg',
        text : 'Giới thiệu doanh nghiệp'
      },
      right: {
        show : false,
      }
    }
  }
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onCert(){
    this.router.navigateByUrl('main/product/product-cert');
  }
  onBack(){
    this.router.navigateByUrl('main/product');

  }
}
