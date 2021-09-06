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
      `http://54.169.107.162/nbc/product`,
      { params: { productId } }
    );
  }
  companyProduct(productId): Observable<any> {
    return this.http.get(
      `http://54.169.107.162/nbc/product/company`,
      { params: { productId } }
    );
  }
  mediaProduct(productId): Observable<any> {
    return this.http.get(
      `http://54.169.107.162/nbc/product/media`,
      { params: { productId } }
    );
  }
  getRelateProduct(companyId): Observable<any> {
    return this.http.get(
      `http://54.169.107.162/nbc/product/company/related-product`,
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
      `http://54.169.107.162/nbc/product/certification/media`,
      { params: { productId } }
    );
  }
}
