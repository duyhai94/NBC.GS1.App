import { Component, OnInit } from '@angular/core';
import { BaseAlertComponent } from 'src/app/base/base-alert/base-alert.component';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }
  openModalDelete(id){
    this.modalService.presentModal({
      component: BaseAlertComponent,
      cssClass: 'modal-history',
      mode: 'ios',
      componentProps: {
        'title': 'Xóa sản phẩm khỏi lịch sử?',
        'content': 'Bạn chắc chắn muốn loại bỏ sản phẩm khỏi Lịch sử?',
        'type': 2,
        'id': id,
        
      }
    })
  }
  dataProduct = [
  
    {
      id: 4,
      nameProduct: 'Sparkling water gan',
      imgProduct: 'assets/img/p1.png',
      ratting: '5.0',
      company: 'Corona Vietnam',
      categories: 'Nước giải khát',
      iCheck: true,
      iLove: true,
      verify: true,
    },
    {
      id: 5,
      nameProduct: 'Sparkling water gan',
      imgProduct: 'assets/img/p2.png',
      ratting: '5.0',
      company: 'Corona Vietnam',
      categories: 'Nước giải khát',
      iCheck: true,
      iLove: true,
      verify: true,
    }
  ]
}
