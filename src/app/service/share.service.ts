/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}
  private productId = new BehaviorSubject<any>(2);

  currentProductId = this.productId.asObservable();

  changeProductId(data) {
    this.productId.next(data);
  }
}
