import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  icheck;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.icheck = this.activeRouter.snapshot.params.verify;
    console.log(this.icheck);
    
  }
  onBack(){
    this.router.navigate(['main/home'])
  }
  dataTitle = {
    product: {
      left: {
        show : true,
        icon : 'assets/icon/icon-outstanding.svg',
        text : 'Sản phẩm khác của doanh nghiệp'
      },
      right: {
        show : false,
      }
    },
    cerf: {
      left: {
        show : true,
        icon : 'assets/icon/icon-trademark.svg',
        text : 'Chứng chỉ, chứng nhận sản phẩm'
      },
      right: {
        show : false,
      }

    },
    info: {
      left: {
        show : true,
        icon : 'assets/icon/icon-fodel.svg',
        text : 'Thông tin sản phẩm'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-next.svg',
        link: ''
      }
    },
    business: {
      left: {
        show : true,
        icon : 'assets/icon/icon-buliding.svg',
        text : 'Doanh nghiệp sở hữu'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-next.svg',
        link: ''
      }
    },
    rating: {
      left: {
        show : true,
        icon : 'assets/icon/icon-document.svg',
        text : 'Đánh giá sản phẩm'
      },
      right: {
        show : true,
        icon: 'assets/icon/icon-next.svg',
        link: ''
      }
    }
   

  }



}
