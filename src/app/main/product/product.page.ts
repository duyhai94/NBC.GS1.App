import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductSerivce } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  icheck;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  idProduct;
  detailProduct$: Observable<any>;
  relatedProduct$: Observable<any>;
  companyProduct$: Observable<any>;
  mediaProduct$: Observable<any>;
  certProduct$: Observable<any>;
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private productService: ProductSerivce
  ) {}

  ngOnInit() {
    this.icheck = this.activeRouter.snapshot.params.verify;
    this.idProduct = this.activeRouter.snapshot.params.id;
    this.initProduct(this.idProduct);

  }
  onCert() {
    this.router.navigateByUrl('main/product/product-cert');
  }
  onBack() {
    this.router.navigate(['main/home']);
  }
  onRouterInfo() {
    this.router.navigate(['/product-info']);
  }
  dataTitle = {
    product: {
      left: {
        show: true,
        icon: 'assets/icon/icon-outstanding.svg',
        text: 'Sản phẩm khác của doanh nghiệp',
      },
      right: {
        show: false,
      },
    },
    cerf: {
      left: {
        show: true,
        icon: 'assets/icon/icon-trademark.svg',
        text: 'Chứng chỉ, chứng nhận sản phẩm',
      },
      right: {
        show: false,
      },
    },
    info: {
      left: {
        show: true,
        icon: 'assets/icon/icon-fodel.svg',
        text: 'Thông tin sản phẩm',
      },
      right: {
        show: true,
        icon: 'assets/icon/icon-next.svg',
        link: 'main/product/product-info',
      },
    },
    business: {
      left: {
        show: true,
        icon: 'assets/icon/icon-buliding.svg',
        text: 'Doanh nghiệp sở hữu',
      },
      right: {
        show: true,
        icon: 'assets/icon/icon-next.svg',
        link: 'main/product/product-business',
      },
    },
    rating: {
      left: {
        show: true,
        icon: 'assets/icon/icon-document.svg',
        text: 'Đánh giá sản phẩm',
      },
      right: {
        show: true,
        icon: 'assets/icon/icon-next.svg',
        link: 'main/product/product-reviews',
      },
    },
  };

  initProduct(id) {
    forkJoin([
      this.productService.detailProduct(id),
      this.productService.companyProduct(id),
      this.productService.mediaProduct(id),
      this.productService.getListCert(id),
    ])
      .pipe(
        tap(([detailProduct, companyProduct, mediaProduct, certProduct]) => {
          this.relatedProduct$ = this.productService
            .getRelateProduct(companyProduct.payload.CompanyId)
            .pipe(
              map((a) => {
                return a.payload;
              })
            );
        })
      )
      .subscribe(
        ([detailProduct, companyProduct, mediaProduct, certProduct]) => {
          this.detailProduct$ = of(detailProduct.payload);
          this.companyProduct$ = of(companyProduct.payload);
          this.mediaProduct$ = of(mediaProduct.payload);
          this.certProduct$ = of(certProduct.payload);
        }
      );
  }
}
