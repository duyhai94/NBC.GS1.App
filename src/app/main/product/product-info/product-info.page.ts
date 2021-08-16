import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
  dataTitleCerf = {
    left: {
      show: true,
      icon: 'assets/icon/icon-trademark.svg',
      text: 'Chứng chỉ, chứng nhận sản phẩm',
    },
    right: {
      show: false,
    },
  };
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit() {
    const heroId = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.activeRouter.snapshot.paramMap.get('id'));
    
  }
  onCert() {
    this.router.navigateByUrl('main/product/product-cert');
  }
}
