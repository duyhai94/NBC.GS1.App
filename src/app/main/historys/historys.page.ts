import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BaseAlertComponent } from 'src/app/base/base-alert/base-alert.component';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-historys',
  templateUrl: './historys.page.html',
  styleUrls: ['./historys.page.scss'],
})
export class HistorysPage implements OnInit {
  dataHeaderNav = {
    logo : {
      icon : null,
      text : 'Liên hệ'
    },
    list: {
      profile : true,
      favourite : true
    }
  }
  constructor(
    private alert: AlertController,
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }


  openModalLove(id){
    this.modalService.presentModal({
      component: BaseAlertComponent,
      cssClass: 'modal-history',
      mode: 'ios',
      componentProps: {
        'title': 'Xóa sản phẩm yêu thích?',
        'content': 'Bạn chắc chắn muốn loại bỏ sản phẩm khỏi Lịch sử?',
        'type': 1,
        'id': id,
      }
    })
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
      id: 1,
      nameProduct: 'Sparkling water gan',
      imgProduct: 'assets/img/p1.png',
      ratting: '3.0',
      company: 'Nestle Vietnam',
      categories: 'Nước giải khát',
      iCheck: false,
      iLove: false,
      verify: false,
    },
    {
      id: 2,
      nameProduct: 'Spiked Cold Brew',
      imgProduct: 'assets/img/p2.png',
      ratting: '3.0',
      company: 'Nestle Vietnam',
      categories: 'Nước giải khát',
      iCheck: false,
      iLove: false,
      verify: false,
    },
    {
      id: 3,
      nameProduct: 'Sparkling water gan',
      imgProduct: 'assets/img/p3.png',
      ratting: '5.0',
      company: 'Nestle Vietnam',
      categories: 'Nước giải khát',
      iCheck: true,
      iLove: true,
      verify: true,
    },
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
