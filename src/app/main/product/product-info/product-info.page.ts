import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductSerivce } from 'src/app/service/product.service';
import { ShareService } from 'src/app/service/share.service';

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
  idProduct=1;
  detailProduct$: Observable<any>;
  detailProduct;
  certProduct;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private shareService: ShareService,
    private productSerivce: ProductSerivce
  ) {}

  ngOnInit() {
    this.shareService.currentProductId.subscribe(
      (res) => (this.idProduct = res)
    );
    this.productSerivce.detailProduct(this.idProduct).subscribe((res) => {
      this.detailProduct$ = of(res.payload);
      this.detailProduct = res.payload;
    });
    this.productSerivce.getListCert(2).subscribe((res) => {
      this.certProduct = res.payload;
    });
  }
  onCert() {
    this.router.navigateByUrl('main/product/product-cert');
  }
}
