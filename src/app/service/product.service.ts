import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductSerivce {
  constructor(private http: HttpClient) {}

  detailProduct(productId): Observable<any> {
    return this.http.get(
      `https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/product`,
      { params: { productId } }
    );
  }
  companyProduct(productId): Observable<any> {
    return this.http.get(
      `https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/product/company`,
      { params: { productId } }
    );
  }
  mediaProduct(productId): Observable<any> {
    return this.http.get(
      `https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/product/media`,
      { params: { productId } }
    );
  }
  getRelateProduct(companyId): Observable<any> {
    return this.http.get(
      `https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/product/company/related-product`,
      {
        params: {
          companyId,
          pageNumber: 1,
          pageSize: 6,
        },
      }
    );
  }
  getListCert(productId): Observable<any> {
    return this.http.get(
      `https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/product/certification/media`,
      { params: { productId } }
    );
  }
}
