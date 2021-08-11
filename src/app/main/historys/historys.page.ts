import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
    private alert: AlertController
  ) { }

  ngOnInit() {
  }
  onDelete(id){
    console.log(id);
    this.alertDelete();
    
  }
  onLove(id){
    console.log(id);
    this.alertRemoLove();

  }
  async alertDelete() {
    const alert = await this.alert.create({
      cssClass: 'alert-history',
      header: 'Xóa sản phẩm khỏi lịch sử?',
      message: 'Bạn chắc chắn muốn loại bỏ sản phẩm khỏi Lịch sử?',
      buttons: [
        {
          text: 'Có',
          cssClass: 'secondary',
          handler: () => {
          }
        },
        {
          text: 'Không',
          handler: (blah) => {
          }
        }
      ]
    });

    await alert.present();
  }
  async alertRemoLove() {
    const alert = await this.alert.create({
      cssClass: 'alert-history',
      header: 'Xóa sản phẩm yêu thích?',
      message: 'Bạn chắc chắn muốn loại bỏ sản phẩm khỏi Lịch sử?',
      buttons: [
        {
          text: 'Có',
          handler: () => {
          }
        },
        {
          text: 'Không',
          handler: (blah) => {
          }
        }
      ]
    });

    await alert.present();
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
      iLove: true,
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
      iLove: true,
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
